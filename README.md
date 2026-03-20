# AS208437 Website

Sito istituzionale di HyperBit SRLs riscritto in SvelteKit.

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
```

## Struttura

- `src/routes/+page.svelte`: homepage
- `src/routes/peering-policy/+page.svelte`: peering policy
- `src/lib/site.ts`: contenuti condivisi del sito
- `src/app.css`: stile globale
- `static/`: asset pubblici serviti direttamente
