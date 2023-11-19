<script lang="ts">
  import Button from "../../components/Button.svelte";
  import QuizQuestionSearch from "../../components/QuizQuestionSearch.svelte";
  import type { Question, Quiz } from "../../types/Quiz";
  import type { FormSubmission } from "./submit/+server";

  let errorType = "quiz";
  let searchTerm = "";

  let selected: (Question & { quiz: Quiz }) | undefined = undefined;

  let details = "";
  let contact = "";

  const quizNames = import.meta.glob("../../assets/quiz/*.json");
  const modules = Promise.all(Object.keys(quizNames).map((quiz) => quizNames[quiz]() as any));
  const quizzes = modules.then((moduleList) => moduleList.map((module) => module.default as Quiz));

  async function submit(info: FormSubmission) {
    await fetch("/report/submit", {
      method: "POST",
      body: JSON.stringify(info),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          alert("Success! Your response has been received.");
        } else {
          alert("There was an error handling your request.");
        }
      })
      .catch((err) => {
        console.log(err);
        alert("There was an error handling your request.");
      });
  }
</script>

<svelte:head>
  <title>Report an Error</title>
</svelte:head>

<main class="mx-auto w-[65ch] max-w-[90vw]">
  <h1 class="text-3xl font-bold">Report an Error</h1>

  <form>
    <div class="my-4">
      <p class="font-medium">I am reporting an error with:</p>
      <label class="block">
        <input type="radio" required name="errorType" value="quiz" bind:group={errorType} />
        A quiz question
      </label>

      <label class="block">
        <input type="radio" required name="errorType" value="site" bind:group={errorType} />
        The site itself
      </label>
    </div>
    <div class="my-4">
      {#if errorType === "quiz"}
        {#if !selected}
          <p class="font-medium">Search for the quiz question:</p>
          <input type="search" bind:value={searchTerm} />
        {/if}
        {#if searchTerm !== ""}
          {#if !selected}
            {#await quizzes}
              <p>Loading quiz questions...</p>
            {:then awaited}
              <QuizQuestionSearch {searchTerm} quizzes={awaited} bind:selected />
            {/await}
          {:else}
            <form
              on:submit={(e) => {
                e.preventDefault();
                if (!selected) {
                  alert("You have no quiz question selected!");
                  return;
                }
                submit({
                  errorType: "quiz",
                  contact,
                  details,
                  selected: { ...selected, quiz: { ...selected.quiz, questions: [] } },
                });
              }}>
              <div class="my-4">
                <p class="mb-2 font-medium">
                  Selected Question: {selected.quiz.displayName} #{selected.number}
                </p>
                <Button primary on:click={() => (selected = undefined)} class="mb-4"
                  >Clear selection</Button>
                <p class="font-medium">{selected.question}</p>
                <ul class="list-inside list-disc">
                  {#each selected.choices as choice}
                    <li>{choice}</li>
                  {/each}
                </ul>
                <p class="mt-4">
                  Correct answer: <span class="font-medium"
                    >{selected.choices[selected.correct]}</span>
                </p>
              </div>

              <div class="my-4">
                <label class="font-medium">
                  Please describe the issue in detail, including what's wrong, how it should be
                  corrected, and sources (if necessary).
                  <textarea
                    name="details"
                    required
                    maxlength="1024"
                    bind:value={details}
                    class="w-full font-normal" />
                </label>
              </div>

              <div class="my-4">
                <p class="font-medium">Contact email <span class="font-normal">(optional)</span></p>
                <input type="email" maxlength="1024" bind:value={contact} />
              </div>

              <div class="mt-4 flex w-full">
                <Button primary type="submit">Submit</Button>
              </div>
            </form>
          {/if}
        {/if}
      {:else if errorType === "site"}
        <form
          on:submit={(e) => {
            e.preventDefault();
            submit({
              errorType: "site",
              contact,
              details,
            });
          }}>
          <div class="my-4">
            <label class="font-medium">
              Please describe the issue in detail, including steps to reproduce, expected behavior,
              and affected pages.
              <textarea
                name="details"
                required
                maxlength="1024"
                bind:value={details}
                class="w-full font-normal" />
            </label>
          </div>
          <div class="my-4">
            <p class="font-medium">Contact email <span class="font-normal">(optional)</span></p>
            <input type="email" maxlength="1024" bind:value={contact} />
          </div>

          <div class="mt-4 flex w-full">
            <Button primary type="submit">Submit</Button>
          </div>
        </form>
      {/if}
    </div>
  </form>
</main>
