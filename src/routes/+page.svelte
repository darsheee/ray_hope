<script lang="ts">
  import collections from "../assets/collections.json";
  import QuizCard from "../components/QuizCard.svelte";

  // ["unit_1", "unit_2", ..., "unit_10"]
  const units = Array.from({ length: 10 }).map(
    (_, i) => `unit_${i + 1}`
  ) as (keyof typeof collections)[];

  const chapters = Array.from({ length: 24 }).map((_, i) => i + 1);

 const crashs = Array.from({ length: 3 }).map(
    (_, i) => `crash_${i + 1}`
  ) as (keyof typeof collections)[];

 

</script>

<svelte:head>
  <title>Ias.Shiksha</title>
  <meta name="og:title" content="upsc.study" />
  
</svelte:head>

<main class="mx-auto max-w-3xl">
  <!-- <h1 class="text-3xl font-bold">Civils.app</h1> -->

  <h2 class="mb-2 mt-6 text-xl font-bold">Previous Year Questions </h2>
  <section class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
   
    <QuizCard name="Ancient History " slug="ancient_history_pyq" />
    <QuizCard name="Medieval History " slug="medieval_history_pyq" />
    <QuizCard name="Modern India " slug="modern_history_pyq" />
    <QuizCard name="Geography " slug="geography_pyq" />
    <QuizCard name="Indian Polity " slug="polity_pyq" />
    <QuizCard name="Economics " slug="economics_pyq" />
    
    <QuizCard name="Environment " slug="enviro_pyq" />
    <QuizCard name="Science" slug="science_pyq" />
    <QuizCard name="Current Affairs " slug="pyq_current-affairs" />

    
    <!-- <QuizCard class="sm:col-span-2" name="Complete APES Review" slug="complete_review" />
    <QuizCard class="sm:col-span-2" name="Everything" slug="everything" /> -->
  </section>

  <!-- <h2 class="mb-2 mt-6 text-xl font-bold">By Unit</h2>
  <section class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
    {#each units as unit}
      <QuizCard name={collections[unit].displayName} slug={unit} />
    {/each}
  </section> -->

   <h2 class="mb-2 mt-6 text-xl font-bold"> Polity Workbook</h2>
  <section class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
    {#each crashs as crash}
      <QuizCard name={collections[crash].displayName} slug={crash} />
    {/each}
  </section>


  <!-- <h2 class="mb-2 mt-6 text-xl font-bold">By Textbook Chapter</h2>
  <section class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
    {#each chapters as chapter}
      <QuizCard name="Chapter {chapter}" slug="apes_ch{chapter}" />
    {/each}
  </section> -->

  
</main>
