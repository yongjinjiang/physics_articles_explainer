import { error } from '@sveltejs/kit';
import { loadArticle } from '$lib/utils/articles';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
  const article = await loadArticle(params.slug);

  if (!article || !article.metadata) {
    throw error(404, 'Article not found');
  }

  return {
    metadata: article.metadata,
    Content: article.default,
    explanations: article.explanations || []
  };
};

export const prerender = true;
