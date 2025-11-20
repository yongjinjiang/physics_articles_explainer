<script lang="ts">
  import type { PageData } from './$types';
  import type { ExplanationSection } from '$lib/types/article';

  let { data }: { data: PageData } = $props();

  let activeExplanationId = $state<string | null>(null);
  let explanationRefs: Record<string, HTMLElement> = {};

  const Content = data.Content;

  function scrollToExplanation(id: string) {
    activeExplanationId = id;
    const element = explanationRefs[id];

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }

  function isActive(id: string): boolean {
    return activeExplanationId === id;
  }
</script>

<div class="min-h-screen bg-white">
  <!-- Header -->
  <header class="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-8">
    <div class="container mx-auto px-4">
      <a href="/" class="text-sm hover:underline mb-2 inline-block opacity-90">
        ← Back to Articles
      </a>
      <h1 class="text-4xl font-bold mb-2">{data.metadata.title}</h1>
      <div class="flex items-center gap-4 text-sm opacity-90">
        <span>{new Date(data.metadata.date).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })}</span>
        {#if data.metadata.author}
          <span>•</span>
          <span>By {data.metadata.author}</span>
        {/if}
        {#if data.metadata.sourceUrl}
          <span>•</span>
          <a href={data.metadata.sourceUrl} target="_blank" rel="noopener noreferrer" class="hover:underline">
            View Original
          </a>
        {/if}
      </div>
    </div>
  </header>

  <!-- Two-column layout -->
  <div class="container mx-auto px-4 py-8">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">

      <!-- Left Column: Article Content -->
      <div class="lg:sticky lg:top-8 h-fit">
        <div class="bg-white rounded-lg shadow-lg p-8 max-h-[calc(100vh-8rem)] overflow-y-auto scroll-smooth">
          <div class="prose prose-lg max-w-none">
            <Content {scrollToExplanation} />
          </div>
        </div>
      </div>

      <!-- Right Column: Explanations -->
      <div class="bg-gray-50 rounded-lg shadow-lg p-8 max-h-[calc(100vh-8rem)] overflow-y-auto scroll-smooth">
        <h2 class="text-2xl font-bold text-gray-900 mb-6">Detailed Explanations</h2>

        {#if data.explanations.length === 0}
          <p class="text-gray-500">No explanations available for this article yet.</p>
        {:else}
          <div class="space-y-6">
            {#each data.explanations as explanation (explanation.id)}
              <div
                bind:this={explanationRefs[explanation.id]}
                class="p-6 rounded-lg transition-all duration-300 {isActive(explanation.id)
                  ? 'explanation-highlight'
                  : 'bg-white border border-gray-200 explanation-hidden'}"
                id={explanation.id}
              >
                <h3 class="text-xl font-semibold text-gray-900 mb-3">
                  {explanation.title}
                </h3>
                <div class="text-gray-700 leading-relaxed prose prose-sm max-w-none">
                  {@html explanation.content}
                </div>
              </div>
            {/each}
          </div>
        {/if}
      </div>

    </div>
  </div>
</div>

<style>
  :global(.article-trigger) {
    @apply cursor-pointer text-blue-600 font-semibold hover:text-blue-800 hover:underline transition-colors;
  }

  :global(.prose h2) {
    @apply text-2xl font-bold text-gray-900 mt-8 mb-4;
  }

  :global(.prose h3) {
    @apply text-xl font-semibold text-gray-800 mt-6 mb-3;
  }

  :global(.prose p) {
    @apply mb-4 text-gray-700 leading-relaxed;
  }

  :global(.prose ul) {
    @apply list-disc list-inside mb-4 text-gray-700;
  }

  :global(.prose ol) {
    @apply list-decimal list-inside mb-4 text-gray-700;
  }

  :global(.prose code) {
    @apply bg-gray-100 px-2 py-1 rounded text-sm font-mono text-gray-800;
  }

  :global(.prose pre) {
    @apply bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-4;
  }

  :global(.prose blockquote) {
    @apply border-l-4 border-blue-500 pl-4 italic text-gray-600 my-4;
  }
</style>
