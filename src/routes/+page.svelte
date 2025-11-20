<script lang="ts">
  import type { PageData } from './$types';

  let { data }: { data: PageData } = $props();
</script>

<div class="container mx-auto px-4 py-12">
  <header class="mb-12 text-center">
    <h1 class="text-5xl font-bold text-gray-900 mb-4">
      Physics Explainer
    </h1>
    <p class="text-xl text-gray-600 max-w-2xl mx-auto">
      Interactive explanations of complex physics concepts with synchronized visualizations
    </p>
  </header>

  {#if data.articles.length === 0}
    <div class="text-center py-12">
      <p class="text-gray-500 text-lg">No articles yet. Add your first article to get started!</p>
    </div>
  {:else}
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each data.articles as article}
        <a
          href="/article/{article.slug}"
          class="block bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
        >
          <div class="p-6">
            <div class="text-sm text-gray-500 mb-2">
              {new Date(article.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </div>
            <h2 class="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
              {article.title}
            </h2>
            <p class="text-gray-600 leading-relaxed">
              {article.description}
            </p>
            {#if article.author}
              <div class="mt-4 text-sm text-gray-500">
                By {article.author}
              </div>
            {/if}
          </div>
          <div class="bg-gradient-to-r from-blue-500 to-purple-600 h-1 w-0 group-hover:w-full transition-all duration-300"></div>
        </a>
      {/each}
    </div>
  {/if}
</div>
