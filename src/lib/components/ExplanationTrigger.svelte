<script lang="ts">
  interface Props {
    id: string;
    scrollToExplanation: (id: string) => void;
    children?: any;
  }

  let { id, scrollToExplanation, children }: Props = $props();
</script>

<button
  type="button"
  class="article-trigger"
  onclick={() => scrollToExplanation(id)}
>
  {@render children?.()}
</button>
