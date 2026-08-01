<script lang="ts">
  import { onMount } from 'svelte';
  import type { Map as LeafletMap } from 'leaflet';
  import 'leaflet/dist/leaflet.css';
  import { networkInfo, networkSites } from '$lib/data/network';

  const pops = networkSites.filter((s) => s.type === 'pop');

  let mapEl: HTMLDivElement;
  let map: LeafletMap | undefined;

  function markerHtml(site: (typeof networkSites)[number]) {
    if (site.type === 'pop') {
      return '<span class="leaflet-pop-marker"></span>';
    }
    const statusClass = site.status === 'active' ? 'is-active' : 'is-activating';
    return `<span class="leaflet-ix-marker ${statusClass}"></span>`;
  }

  onMount(() => {
    let cancelled = false;

    (async () => {
      const L = (await import('leaflet')).default;
      if (cancelled) return;

      map = L.map(mapEl, { scrollWheelZoom: false, attributionControl: true });

      L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        maxZoom: 19
      }).addTo(map);

      for (const site of networkSites) {
        const icon = L.divIcon({
          className: '',
          html: markerHtml(site),
          iconSize: [16, 16],
          iconAnchor: [8, 8]
        });
        L.marker([site.lat, site.lon], { icon, title: site.name })
          .addTo(map)
          .bindPopup(
            `<strong>${site.name}</strong><br>${site.facility}<br>${site.city} — ${
              site.status === 'active' ? 'Active' : 'In activation'
            }`
          );
      }

      const bounds = L.latLngBounds(networkSites.map((s) => [s.lat, s.lon] as [number, number]));
      map.fitBounds(bounds, { padding: [40, 40] });
    })();

    return () => {
      cancelled = true;
      map?.remove();
    };
  });
</script>

<svelte:head>
  <title>Network Map | AS208437 - HyperBit SRLs</title>
  <meta
    name="description"
    content="Preview of the AS208437 / HyperBit physical network map: main PoP and Internet Exchange presence across Italy."
  />
</svelte:head>

<main class="subpage">
  <section class="subpage-hero">
    <div class="container">
      <a class="back-link" href="/">← Back to overview</a>

      <p class="subpage-kicker">{networkInfo.asn} · Infrastructure</p>
      <h1>Network Map <span class="status-badge dim">Preview</span></h1>
      <p class="subpage-lead">
        Where {networkInfo.name} operates physically: our main PoP and the Internet Exchange
        points we peer at or are activating across Italy.
      </p>
    </div>
  </section>

  <section class="section-pad section-soft">
    <div class="container panel-grid panel-grid-2">
      <article class="subpage-panel map-panel">
        <p class="panel-index">Physical map</p>
        <div class="map-frame" bind:this={mapEl} role="img" aria-label="Map of HyperBit PoP and IX presence in Italy"></div>

        <div class="map-legend">
          <span class="legend-item"><span class="legend-dot pop" aria-hidden="true"></span>Main PoP</span>
          <span class="legend-item"><span class="legend-dot active" aria-hidden="true"></span>IX — active</span>
          <span class="legend-item"><span class="legend-dot activating" aria-hidden="true"></span>IX — in activation</span>
        </div>
      </article>

      <article class="subpage-panel">
        <p class="panel-index">PoP</p>
        <ul class="subpage-list">
          {#each pops as pop}
            <li>{pop.city} — {pop.facility} ({pop.role})</li>
          {/each}
        </ul>

        <p class="panel-index" style="margin-top: 28px;">Contact</p>
        <p class="subpage-copy">
          For colocation, peering or infrastructure inquiries, contact
          <a href="mailto:noc@hyperbit.it">noc@hyperbit.it</a>.
        </p>
      </article>
    </div>
  </section>

  <section class="section-pad">
    <div class="container">
      <article class="subpage-panel">
        <p class="panel-index">Sites</p>
        <div class="table-scroll">
          <table class="data-table">
            <thead>
              <tr>
                <th>Site</th>
                <th>Type</th>
                <th>Facility</th>
                <th>City</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {#each networkSites as site}
                <tr>
                  <td class="mono-strong">{site.name}</td>
                  <td>{site.type === 'pop' ? 'PoP' : 'IX'}</td>
                  <td>{site.facility}</td>
                  <td>{site.city}</td>
                  <td>
                    {#if site.status === 'active'}
                      <span class="status-badge">Active</span>
                    {:else}
                      <span class="status-badge dim">In activation</span>
                    {/if}
                  </td>
                </tr>
              {/each}
            </tbody>
          </table>
        </div>
      </article>
    </div>
  </section>
</main>
