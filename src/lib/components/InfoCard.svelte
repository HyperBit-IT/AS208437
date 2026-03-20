<script lang="ts">
  type Props = {
    title: string;
    description: string;
    href: string;
    external?: boolean;
  };

  let { title, description, href, external = false }: Props = $props();
</script>

<a
  class="card-link panel"
  href={href}
  target={external ? '_blank' : undefined}
  rel={external ? 'noreferrer' : undefined}
>
  <span class="card-icon" aria-hidden="true">
    <svg viewBox="0 0 24 24" fill="none">
      <rect x="2.75" y="4" width="18.5" height="6" rx="1.5" />
      <rect x="2.75" y="14" width="18.5" height="6" rx="1.5" />
      <path d="M6.5 7H6.51" stroke-linecap="round" />
      <path d="M6.5 17H6.51" stroke-linecap="round" />
    </svg>
  </span>

  <span class="card-copy">
    <span class="card-title">{title}</span>
    <span class="card-description">{description}</span>
  </span>
</a>

<style>
  .card-link {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 1rem;
    padding: 1.3rem 1.4rem;
    transition:
      transform 180ms ease,
      border-color 180ms ease,
      box-shadow 180ms ease;
  }

  .card-link:hover,
  .card-link:focus-visible {
    transform: translateY(-2px);
    border-color: rgba(15, 118, 110, 0.26);
    box-shadow: 0 22px 50px rgba(15, 23, 42, 0.12);
  }

  .card-icon {
    display: inline-grid;
    place-items: center;
    width: 3rem;
    height: 3rem;
    border-radius: 1rem;
    background: rgba(15, 118, 110, 0.1);
    color: var(--accent);
  }

  .card-icon svg {
    width: 1.45rem;
    height: 1.45rem;
    stroke: currentColor;
    stroke-width: 1.75;
  }

  .card-copy {
    display: grid;
    gap: 0.35rem;
  }

  .card-title {
    font-size: 1.1rem;
    font-weight: 650;
    letter-spacing: -0.03em;
  }

  .card-description {
    color: var(--text-secondary);
    line-height: 1.55;
  }
</style>
