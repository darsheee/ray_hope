<script lang="ts">
  import "@fontsource-variable/outfit";
  import toast, { Toaster } from "svelte-french-toast";

  import "../app.css";
  // import Analytics from "../components/Analytics.svelte";
  import Header  from "../components/Header.svelte";
  import Footer from "../components/Footer.svelte";

  import { pwaInfo } from "virtual:pwa-info";
 
  $: webManifest = pwaInfo ? pwaInfo.webManifest.linkTag : ''  

</script>
<svelte:head>
  {@html webManifest}
  
</svelte:head>



<Header/> 

<main>
 
  <slot />
</main>

<Footer />
<!-- <Analytics /> -->

