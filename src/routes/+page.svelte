<script lang="ts">
  import { resourceLinks } from '$lib/site';
  import {
    monitoring,
    networkInfo,
    peering,
    prefixes,
    technicalHighlights,
    transit,
    upstreams
  } from '$lib/data/network';

  const ipv4Count = prefixes.filter((p) => p.family === 'IPv4').length;
  const ipv6Count = prefixes.filter((p) => p.family === 'IPv6').length;

  const stats = [
    { value: String(transit.upstreamCount), label: 'upstream providers' },
    { value: peering.peerCountLabel, label: `peers @ ${peering.ix}` },
    { value: transit.maxCapacityLabel, label: 'max transit capacity' },
    { value: String(ipv4Count), label: 'announced IPv4 prefixes' },
    { value: String(ipv6Count), label: 'announced IPv6 prefixes' }
  ];
</script>

<svelte:head>
  <title>AS208437 - HyperBit SRLs</title>
  <meta
    name="description"
    content="AS208437 network overview: upstreams, peering, RPKI status, DDoS protection and announced prefixes for HyperBit SRLs."
  />
</svelte:head>

<main class="subpage">
  <section class="subpage-hero">
    <div class="container subpage-hero-grid">
      <div>
        <p class="subpage-kicker">Network · {networkInfo.asn}</p>
        <h1>Autonomous System 208437</h1>
        <p class="subpage-lead">
          {networkInfo.name} operates its own AS, upstream transit and peering. This page
          publishes the routing references, announced prefixes and operational contacts we use to
          run the network.
        </p>
        <div class="hero-cta">
          <a
            class="btn-primary"
            href={networkInfo.statusUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Network status (opens in a new tab)"
          >
            Network status <span aria-hidden="true">↗</span>
          </a>
          <a class="btn-secondary" href="/peering-policy">Peering policy</a>
        </div>
      </div>

      <aside class="subpage-panel">
        <p class="panel-index">ASN summary</p>
        <ul class="subpage-list">
          <li>ASN: {networkInfo.asn}</li>
          <li>Org: {networkInfo.name}</li>
          <li>Peering policy: {networkInfo.peeringPolicy}</li>
          <li>Peering: {peering.ix}, {peering.peerCountLabel} peers</li>
          <li>In activation: {peering.upcomingIxes.join(', ')}</li>
          <li>Upstreams: {transit.upstreamCount} independent</li>
          <li>Monitoring: {monitoring.coverageLabel}</li>
          <li>DDoS protection: full AS cone</li>
        </ul>
      </aside>
    </div>
  </section>

  <section class="section-pad section-soft">
    <div class="container">
      <div class="stat-grid">
        {#each stats as stat}
          <article class="stat-card">
            <h3>{stat.value}</h3>
            <p>{stat.label}</p>
          </article>
        {/each}
      </div>
    </div>
  </section>

  <section class="section-pad">
    <div class="container panel-grid panel-grid-2">
      <article class="subpage-panel">
        <p class="panel-index">Technical highlights</p>
        <ul class="subpage-list">
          {#each technicalHighlights as item}
            <li>{item}</li>
          {/each}
        </ul>
      </article>

      <article class="subpage-panel">
        <p class="panel-index">Upstreams</p>
        <div class="table-scroll">
          <table class="data-table">
            <thead>
              <tr>
                <th>ASN</th>
                <th>Provider</th>
                <th>Role</th>
              </tr>
            </thead>
            <tbody>
              {#each upstreams as upstream}
                <tr>
                  <td class="mono-strong">{upstream.asn}</td>
                  <td>{upstream.name}</td>
                  <td>{upstream.role}</td>
                </tr>
              {/each}
            </tbody>
          </table>
        </div>
      </article>
    </div>
  </section>

  <section class="section-pad section-soft">
    <div class="container">
      <article class="subpage-panel">
        <p class="panel-index">Prefixes</p>
        <p class="subpage-copy">This page lists all prefixes announced by this AS.</p>
        <div class="table-scroll">
          <table class="data-table">
            <thead>
              <tr>
                <th>Prefix</th>
                <th>Family</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {#each prefixes as item}
                <tr>
                  <td class="mono-strong">{item.prefix}</td>
                  <td>
                    <span class="status-badge tech">{item.family}</span>
                  </td>
                  <td>{item.description}</td>
                </tr>
              {/each}
            </tbody>
          </table>
        </div>
      </article>
    </div>
  </section>

  <section class="section-pad">
    <div class="container panel-grid panel-grid-2">
      <article class="subpage-panel">
        <p class="panel-index">Resources</p>
        <ul class="subpage-list">
          {#each resourceLinks as link}
            <li>
              <a href={link.href} target="_blank" rel="noreferrer">{link.label} ↗</a>
            </li>
          {/each}
        </ul>
      </article>

      <article class="subpage-panel">
        <p class="panel-index">Contacts</p>
        <ul class="subpage-list">
          <li>Peering inquiries: <a href="mailto:noc@hyperbit.it">noc@hyperbit.it</a></li>
          <li><a href="https://hyperbit.it/net" target="_blank" rel="noreferrer">hyperbit.it/net ↗</a></li>
        </ul>
      </article>
    </div>
  </section>
</main>
