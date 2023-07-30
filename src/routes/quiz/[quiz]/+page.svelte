<script lang="ts">
  import groupBy from "just-group-by";
  import Button from "../../../components/Button.svelte";
  import Question from "../../../components/Question.svelte";
  import Scores from "../../../components/Scores.svelte";
  import type { Question as QuestionType } from "../../../types/Quiz";
  import type { PageData } from "./$types";

  export let data: PageData;

  let { collection, quizzes } = data;
  let questions = quizzes.flatMap((it) => it.questions);

  let selections: (number | undefined)[] = [];
  let showAnswers = false;

  $: grouped = groupBy(
    questions.map((q, index) => ({ ...q, index })),
    (question) => {
      if (selections[question.index] === undefined) {
        return "Unanswered";
      } else if (selections[question.index] !== question.correct) {
        return "Incorrect";
      } else {
        return "Correct";
      }
    }
  );

  let quizName = collection?.displayName ?? quizzes.map((it) => it.displayName).join(", ");

  const groupNames: (keyof typeof grouped)[] = ["Correct", "Incorrect", "Unanswered"];
  let shownGroups = groupNames;

  function scrollToTop() {
    window.scrollTo({
      behavior: "smooth",
      top: 0,
    });
  }

  $: shouldShow = (question: QuestionType, index: number) => {
    if (selections[index] === undefined) {
      return shownGroups.includes("Unanswered");
    } else if (selections[index] !== question.correct) {
      return shownGroups.includes("Incorrect");
    } else {
      return shownGroups.includes("Correct");
    }
  };
</script>

<main class="mx-auto max-w-3xl">
  <a href="/" class="mb-2 block font-medium underline print:hidden">&larr; Back Home</a>
  <h1 class="text-3xl font-bold">
    {quizName}
  </h1>
  <p class="mb-8">{questions.length} questions</p>

  {#if showAnswers}
    <Scores {grouped}>
      <Button
        on:click={() => {
          showAnswers = false;
        }}>Hide Answers</Button>
      <Button
        on:click={() => {
          selections = [];
          showAnswers = false;
          setTimeout(() => scrollToTop());
        }}>Reset Quiz</Button>
    </Scores>
  {/if}

  {#if showAnswers && Object.keys(grouped).length > 1}
    <div class="flex items-center gap-2 print:hidden">
      Show:
      {#each groupNames as name}
        {#if Object.keys(grouped).includes(name)}
          <label class="flex items-center gap-1">
            <input
              type="checkbox"
              name="showQuestionType"
              value={name}
              bind:group={shownGroups} />{name}</label
          >{/if}
      {/each}
    </div>
  {/if}
  {#each questions as question, index}
    {#if shouldShow(question, index)}
      <Question
        question={{ ...question, number: index + 1 }}
        id="question_{index}"
        bind:selection={selections[index]}
        showAnswer={showAnswers}
        disabled={showAnswers} />
    {/if}
  {/each}

  <div class="flex items-center justify-end gap-4 print:hidden">
    <a href="/" class="mr-auto font-medium underline">&larr; Back Home</a>
    <button
      on:click={(e) => {
        e.preventDefault();
        scrollToTop();
      }}>&uarr; Scroll to Top</button>
    <Button
      on:click={() => {
        showAnswers = true;
        setTimeout(() => scrollToTop());
      }}>Check Answers</Button>
  </div>
</main>
