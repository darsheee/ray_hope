<script lang="ts">
  import Card from "./components/Card.svelte";
  import quizzes from "../data.json";
</script>

{#each quizzes as quiz (quiz.id)}
  <Card {quiz} />
{/each}
