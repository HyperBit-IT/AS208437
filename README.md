# AS208437 Website

Public network-operations page for HyperBit SRLs (AS208437): routing references, peering policy
and announced prefixes. Built with SvelteKit, matching the visual language and technical stack
of the main [HyperBit website](https://hyperbit.it) (Svelte 5, Tailwind CSS 4, Poppins /
JetBrains Mono), statically prerendered and served via a Node adapter, deployed as a Docker
container (Coolify).

## Sviluppo

```bash
npm install
npm run dev
```

Il sito sarà disponibile su `http://localhost:5173`.

## Comandi utili

```bash
npm run check
npm run build
npm run preview
npm run start   # avvia il server prodotto da `build/` (node build)
```

## Deploy

Il sito è pacchettizzato con il `Dockerfile` incluso (multi-stage, `node:22-alpine`) e pensato per
essere deployato su Coolify come app Docker, esattamente come `Website-New`:

```bash
docker build -t as208437-web .
docker run -p 3000:3000 as208437-web
```

## Struttura

- `src/routes/+page.svelte`: homepage (network overview, stats, upstreams, prefixes, resources)
- `src/routes/peering-policy/+page.svelte`: peering policy e presenza IXP
- `src/lib/data/network.ts`: dati tecnici della rete (ASN, upstream, peering, prefissi, policy)
- `src/lib/site.ts`: link di risorse derivati dai dati di rete
- `src/lib/components/`: `SiteNav`, `SiteFooter`
- `src/app.css`: design system condiviso (dark theme, griglia, tipografia tecnica)
- `static/`: asset pubblici serviti direttamente (logo, favicon, geofeed)
