<script lang="ts">
  import '../app.css';
  import SiteNav from '$lib/components/SiteNav.svelte';
  import SiteFooter from '$lib/components/SiteFooter.svelte';

  let { children } = $props();
</script>

<div class="route-shell">
  <SiteNav />
  <div class="route-frame">
    {@render children()}
  </div>
  <SiteFooter />
</div>
