<script lang="ts">
  import InfoCard from '$lib/components/InfoCard.svelte';
  import PrefixCard from '$lib/components/PrefixCard.svelte';
  import { currentYear, infoCards, prefixes, quickLinks } from '$lib/site';
</script>

<svelte:head>
  <title>AS208437 - HyperBit SRLs</title>
  <meta
    name="description"
    content="HyperBit SRLs network overview, prefixes, peering resources and operational links."
  />
</svelte:head>

<div class="page-shell">
  <main class="page-frame">
    <header class="site-header">
      <div class="site-logo">
        <img src="/HyperBit_Dark_Logo.svg" alt="HyperBit logo" width="120" height="120" />
      </div>
      <p class="eyebrow">AS208437</p>
      <h1 class="site-title">AS208437 - HyperBit SRLs</h1>
      <p class="site-subtitle">
        Public information for HyperBit SRLs, including routing references, peering policy and
        announced prefixes.
      </p>
    </header>

    <section class="hero-grid" aria-label="Network overview">
      <div class="stack">
        {#each infoCards as card}
          <InfoCard {...card} />
        {/each}

        <div class="button-row">
          {#each quickLinks as link}
            <a class="button-link" href={link.href} target="_blank" rel="noreferrer">
              {link.label}
            </a>
          {/each}
        </div>
      </div>

      <aside class="panel prefixes-panel">
        <div class="prefixes-header">
          <h2 class="panel-title">Prefixes</h2>
          <p class="panel-copy">This page lists all prefixes announced by this AS.</p>
        </div>

        <div class="stack">
          {#each prefixes as item}
            <PrefixCard {...item} />
          {/each}
        </div>
      </aside>
    </section>

    <footer class="site-footer">
      <p>HyperBit SRLs © {currentYear}</p>
    </footer>
  </main>
</div>

<style>
  .prefixes-panel {
    padding: 1.4rem;
  }

  .prefixes-header {
    display: grid;
    gap: 0.5rem;
    margin-bottom: 1.2rem;
  }
</style>
