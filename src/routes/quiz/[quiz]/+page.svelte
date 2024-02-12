<script lang="ts">
  import groupBy from "just-group-by";
  import { onMount } from "svelte";
  import { Confetti } from "svelte-confetti";
  import Button from "../../../components/Button.svelte";
  import Question from "../../../components/Question.svelte";
  import Scores from "../../../components/Scores.svelte";
  import type { Question as QuestionType } from "../../../types/Quiz";
  import type { PageData } from "./$types";

  export let data: PageData;

  let { collection, quizzes } = data;
  let questions = quizzes.flatMap((it) =>
    it.questions.map((question) => ({ ...question, quiz: it }))
  );
  let recoveredAnswers = false;

  onMount(() => {
    for (let i = 0; i < questions.length; i++) {
      const question = questions[i];
      const selection = localStorage.getItem(`webquiz_${question.quiz.id}_${question.number}`);
      if (selection !== null) {
        selections[i] = parseInt(selection);
        recoveredAnswers = true;
      }
    }
  });

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
    if (!showAnswers) {
      return true;
    } else if (selections[index] === undefined) {
      return shownGroups.includes("Unanswered");
    } else if (selections[index] !== question.correct) {
      return shownGroups.includes("Incorrect");
    } else {
      return shownGroups.includes("Correct");
    }
  };

  function shouldShowConfetti() {
    if (!showAnswers) {
      return false;
    }
    for (let i = 0; i < questions.length; i++) {
      if (selections[i] !== questions[i].correct) {
        return false;
      }
    }
    return true;
  }

  function resetQuiz() {
    selections.forEach((selection, index) => {
      if (selection) {
        localStorage.removeItem(`webquiz_${questions[index].quiz.id}_${questions[index].number}`);
      }
    });
    selections = [];
  }

  let showConfetti = false;
</script>

{#if showConfetti}
  <div
    class="pointer-events-none fixed inset-0 -top-4 flex h-screen w-screen justify-center overflow-hidden">
    <Confetti
      x={[-5, 5]}
      y={[0, 0.1]}
      delay={[0, 8000]}
      duration={5000}
      amount={500}
      fallDistance="100vh" />
  </div>
{/if}

<svelte:head>
  <title>{quizName} | upsc.study</title>
  <meta name="og:title" content={quizName} />
</svelte:head>

<main class="mx-auto max-w-prose">
  <a href="/" class="mb-2 my-20 block font-medium underline print:hidden">&larr; Back Home</a>
  <h1 class="text-3xl font-bold">
    {quizName}
  </h1>
  <div class="hidden break-before-avoid opacity-75 print:block">
    
  </div>
  <p class="mb-8">{questions.length} questions</p>

  {#if recoveredAnswers}
    <p>
      ✅ Progress restored from a previous session. <button
        class="font-medium underline"
        on:click={() => {
          resetQuiz();
          recoveredAnswers = false;
        }}>Reset answers.</button>
    </p>
  {/if}

  {#if showAnswers}
    <Scores {grouped}>
      <Button
        on:click={() => {
          showAnswers = false;
        }}>Hide Answers</Button>
      <Button
        on:click={() => {
          resetQuiz();
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
        {question}
        displayNumber={index + 1}
        id="question_{index}"
        bind:selection={selections[index]}
        showAnswer={showAnswers}
        disabled={showAnswers} />
    {/if}
  {/each}

  <div class="flex items-center justify-center gap-4 print:hidden sm:justify-end">
    <a href="/" class="mr-auto hidden font-medium underline sm:block">&larr; Back Home</a>
    <button
      on:click={(e) => {
        e.preventDefault();
        scrollToTop();
      }}>&uarr; Scroll to Top</button>
    <Button
      on:click={() => {
        showAnswers = true;
        recoveredAnswers = false;
        shownGroups = groupNames;
        setTimeout(() => scrollToTop());
        if (shouldShowConfetti()) {
          showConfetti = true;
        }
      }}>Check Answers</Button>
  </div>
</main>
