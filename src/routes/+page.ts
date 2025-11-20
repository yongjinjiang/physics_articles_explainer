import { loadArticles } from '$lib/utils/articles';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
  const articles = await loadArticles();
  return {
    articles
  };
};

export const prerender = true;
