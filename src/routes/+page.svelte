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
      <span class="pill">ASN AS208437</span>
      <h1 class="site-title">HyperBit SRLs network edge</h1>
      <p class="site-subtitle">
        Operational overview for AS208437, with public routing references, peering policy and the
        prefixes currently announced by our network.
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
          <p class="panel-copy">All public prefixes currently announced by AS208437.</p>
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
    padding: 1.5rem;
  }

  .prefixes-header {
    display: grid;
    gap: 0.5rem;
    margin-bottom: 1.2rem;
  }
</style>
