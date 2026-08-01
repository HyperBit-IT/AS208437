<script lang="ts">
  import { currentYear } from '$lib/data/network';
  import { networkInfo } from '$lib/data/network';
</script>

<footer class="site-footer">
  <div class="footer-grid">
    <div class="footer-brand">
      <span>{networkInfo.name} · {networkInfo.asn}</span>
      <span>© {currentYear}</span>
    </div>

    <div class="footer-links">
      <a href="/">Overview</a>
      <a href="/network-map">Network Map</a>
      <a href="/peering-policy">Peering Policy</a>
      <a href="https://hyperbit.it" target="_blank" rel="noreferrer">hyperbit.it</a>
      <a href="mailto:noc@hyperbit.it">noc@hyperbit.it</a>
    </div>

    <a
      class="footer-status"
      href={networkInfo.statusUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Network status (opens in a new tab)"
    >
      <span class="live-dot" aria-hidden="true"></span>
      <span>Network status</span>
    </a>
  </div>
</footer>
