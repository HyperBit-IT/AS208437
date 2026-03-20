<script lang="ts">
  type Props = {
    prefix: string;
    description: string;
  };

  let { prefix, description }: Props = $props();
</script>

<article class="prefix-card">
  <span class="prefix-icon" aria-hidden="true">
    <svg viewBox="0 0 24 24" fill="none">
      <rect x="2.75" y="4" width="18.5" height="6" rx="1.5" />
      <rect x="2.75" y="14" width="18.5" height="6" rx="1.5" />
      <path d="M6.5 7H6.51" stroke-linecap="round" />
      <path d="M6.5 17H6.51" stroke-linecap="round" />
    </svg>
  </span>

  <div class="prefix-copy">
    <h3>{prefix}</h3>
    <p>{description}</p>
  </div>
</article>

<style>
  .prefix-card {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 1rem;
    padding: 0.95rem 1rem;
    border: 1px solid #e5e7eb;
    border-radius: 10px;
    background: #ffffff;
  }

  .prefix-icon {
    display: inline-grid;
    place-items: center;
    width: 2.65rem;
    height: 2.65rem;
    border: 1px solid #e5e7eb;
    border-radius: 10px;
    background: #f9fafb;
    color: #4b5563;
  }

  .prefix-icon svg {
    width: 1.3rem;
    height: 1.3rem;
    stroke: currentColor;
    stroke-width: 1.6;
  }

  .prefix-copy {
    display: grid;
    gap: 0.25rem;
    min-width: 0;
  }

  h3 {
    margin: 0;
    font-family: var(--font-mono);
    font-size: 0.98rem;
    font-weight: 600;
    overflow-wrap: anywhere;
  }

  p {
    margin: 0;
    color: var(--text-secondary);
    line-height: 1.55;
  }
</style>
