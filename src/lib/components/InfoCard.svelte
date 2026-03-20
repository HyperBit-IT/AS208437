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
    padding: 1.2rem 1.25rem;
    transition:
      background-color 180ms ease,
      border-color 180ms ease;
  }

  .card-link:hover,
  .card-link:focus-visible {
    background: #fafafa;
    border-color: #d1d5db;
  }

  .card-icon {
    display: inline-grid;
    place-items: center;
    width: 2.75rem;
    height: 2.75rem;
    border: 1px solid #e5e7eb;
    border-radius: 10px;
    background: #f9fafb;
    color: #4b5563;
  }

  .card-icon svg {
    width: 1.35rem;
    height: 1.35rem;
    stroke: currentColor;
    stroke-width: 1.6;
  }

  .card-copy {
    display: grid;
    gap: 0.35rem;
  }

  .card-title {
    font-size: 1.05rem;
    font-weight: 600;
  }

  .card-description {
    color: var(--text-secondary);
    line-height: 1.5;
  }
</style>
