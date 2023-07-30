<script lang="ts">
  import collections from "../assets/collections.json";
  import QuizCard from "../components/QuizCard.svelte";

  // ["unit_1", "unit_2", ..., "unit_10"]
  const units = Array.from({ length: 10 }).map(
    (_, i) => `unit_${i + 1}`
  ) as (keyof typeof collections)[];

  const chapters = Array.from({ length: 24 }).map((_, i) => i + 1);
</script>

<main class="mx-auto max-w-3xl">
  <h1 class="text-3xl font-bold">Select a Quiz</h1>

  <h2 class="mb-2 mt-6 text-2xl font-bold">By Unit</h2>
  <section class="grid grid-cols-4 gap-4">
    {#each units as unit}
      <QuizCard name={collections[unit].displayName} slug={unit} />
    {/each}
  </section>

  <h2 class="mb-2 mt-6 text-2xl font-bold">By Textbook Chapter</h2>
  <section class="grid grid-cols-4 gap-4">
    {#each chapters as chapter}
      <QuizCard name="Chapter {chapter}" slug="apes_ch{chapter}" />
    {/each}
  </section>

  <h2 class="mb-2 mt-6 text-2xl font-bold">Review the Course</h2>
  <section class="grid grid-cols-4 gap-4">
    <QuizCard name="Review Quiz 1" slug="apes_rev1" />
    <QuizCard name="Review Quiz 2" slug="apes_rev2" />
    <QuizCard name="Review Quiz 3" slug="apes_rev3" />
    <QuizCard name="2022 Final Review" slug="apes_f22" />
    <QuizCard class="col-span-2" name="Complete APES Review" slug="complete_review" />
    <QuizCard class="col-span-2" name="Everything" slug="everything" />
  </section>
</main>
