<script lang="ts">
  import { page } from '$app/state';
  import { networkInfo } from '$lib/data/network';

  const pathname = $derived(page.url.pathname);
</script>

<nav class="site-nav">
  <a class="logo" href="/" aria-label="AS208437 home">
    <img src="/HyperBit_Dark_Logo.svg" alt="HyperBit" width="120" height="40" decoding="async" />
    <span class="logo-asn">{networkInfo.asn}</span>
  </a>

  <div class="nav-links">
    <a href="/" class:active={pathname === '/'}>Overview</a>
    <a href="/peering-policy" class:active={pathname === '/peering-policy'}>Peering Policy</a>
    <a href={networkInfo.statusUrl} target="_blank" rel="noreferrer" data-external>Status</a>
    <a href="https://hyperbit.it" target="_blank" rel="noreferrer" data-external>hyperbit.it</a>
  </div>
</nav>
