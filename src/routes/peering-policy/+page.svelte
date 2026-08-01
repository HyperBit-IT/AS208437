<script lang="ts">
  import {
    additionalActiveIxes,
    networkInfo,
    peering,
    policyItems,
    reservedRights
  } from '$lib/data/network';
</script>

<svelte:head>
  <title>Peering Policy | AS208437 - HyperBit SRLs</title>
  <meta
    name="description"
    content="Open peering policy and operational terms for HyperBit SRLs AS208437."
  />
</svelte:head>

<main class="subpage">
  <section class="subpage-hero">
    <div class="container">
      <a class="back-link" href="/">← Back to overview</a>

      <p class="subpage-kicker">{networkInfo.asn} · Peering</p>
      <h1>Peering Policy</h1>
      <p class="subpage-lead">
        {networkInfo.asn} maintains an open peering policy, establishing connections with
        networks that share our presence at mutual exchange points.
      </p>
    </div>
  </section>

  <section class="section-pad section-soft">
    <div class="container panel-grid panel-grid-2">
      <article class="subpage-panel">
        <p class="panel-index">Peering policy</p>
        <ul class="subpage-list">
          {#each policyItems as item}
            <li>{item}</li>
          {/each}
        </ul>
      </article>

      <article class="subpage-panel">
        <p class="panel-index">Reserved rights</p>
        <ul class="subpage-list">
          {#each reservedRights as item}
            <li>{item}</li>
          {/each}
        </ul>
      </article>
    </div>
  </section>

  <section class="section-pad">
    <div class="container">
      <article class="subpage-panel">
        <p class="panel-index">Exchange point presence</p>
        <div class="table-scroll">
          <table class="data-table">
            <thead>
              <tr>
                <th>IXP</th>
                <th>Status</th>
                <th>Peers</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="mono-strong">{peering.ix}</td>
                <td><span class="status-badge">Active</span></td>
                <td>{peering.peerCountLabel}</td>
              </tr>
              {#each additionalActiveIxes as ix}
                <tr>
                  <td class="mono-strong">{ix.name}</td>
                  <td><span class="status-badge">Active</span></td>
                  <td>{ix.peersLabel}</td>
                </tr>
              {/each}
              {#each peering.upcomingIxes as ix}
                <tr>
                  <td class="mono-strong">{ix}</td>
                  <td><span class="status-badge dim">In activation</span></td>
                  <td>—</td>
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
        <p class="panel-index">Contact</p>
        <p class="subpage-copy">
          For peering inquiries, contact
          <a href="mailto:noc@hyperbit.it">noc@hyperbit.it</a>.
        </p>
      </article>
    </div>
  </section>
</main>
