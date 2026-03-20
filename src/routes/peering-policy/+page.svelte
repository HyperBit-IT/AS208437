<script lang="ts">
  import { currentYear, policyItems, reservedRights } from '$lib/site';
</script>

<svelte:head>
  <title>Peering Policy | AS208437 - HyperBit SRLs</title>
  <meta
    name="description"
    content="Open peering policy and operational terms for HyperBit SRLs AS208437."
  />
</svelte:head>

<div class="page-shell">
  <main class="page-frame">
    <a class="back-link" href="/">← Back to home</a>

    <header class="site-header">
      <div class="site-logo">
        <img src="/HyperBit_Dark_Logo.svg" alt="HyperBit logo" width="120" height="120" />
      </div>
      <p class="eyebrow">AS208437</p>
      <h1 class="site-title">Peering Policy</h1>
      <p class="site-subtitle">
        AS208437 maintains an open peering policy, establishing connections with networks that
        share our presence at mutual exchange points.
      </p>
    </header>

    <section class="panel policy-panel">
      <div class="policy-block">
        <h2 class="panel-title">Peering Policy</h2>
        <ul>
          {#each policyItems as item}
            <li>{item}</li>
          {/each}
        </ul>
      </div>

      <div class="policy-block">
        <h2 class="panel-title">Reserved Rights</h2>
        <ul>
          {#each reservedRights as item}
            <li>{item}</li>
          {/each}
        </ul>
      </div>

      <p class="contact-copy">
        For peering inquiries, contact
        <a class="policy-link" href="mailto:noc@hyperbit.it">noc@hyperbit.it</a>.
      </p>
    </section>

    <footer class="site-footer">
      <p>HyperBit SRLs © {currentYear}</p>
    </footer>
  </main>
</div>

<style>
  .policy-panel {
    display: grid;
    gap: 1.8rem;
    max-width: 52rem;
    margin: 0 auto;
    padding: 1.5rem;
  }

  .policy-block {
    display: grid;
    gap: 0.85rem;
  }

  ul {
    display: grid;
    gap: 0.8rem;
    margin: 0;
    padding-left: 1.2rem;
    color: var(--text-secondary);
    line-height: 1.65;
  }

  li::marker {
    color: var(--accent);
  }

  .contact-copy {
    margin: 0;
    color: var(--text-secondary);
    font-size: 1.02rem;
    line-height: 1.6;
  }

  .policy-link {
    color: var(--accent-strong);
    font-weight: 600;
  }

  .policy-link:hover {
    text-decoration: underline;
  }
</style>
