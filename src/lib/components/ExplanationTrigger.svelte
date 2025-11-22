<script lang="ts">
  interface Props {
    id: string;
    scrollToExplanation: (id: string) => void;
    children?: any;
  }

  let { id, scrollToExplanation, children }: Props = $props();

  function handleClick(event: MouseEvent) {
    event.preventDefault();
    event.stopPropagation();
    scrollToExplanation(id);
  }
</script>

<span
  role="button"
  tabindex="0"
  class="article-trigger"
  onclick={handleClick}
  onkeydown={(e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClick(e as any);
    }
  }}
>
  {@render children?.()}
</span>
