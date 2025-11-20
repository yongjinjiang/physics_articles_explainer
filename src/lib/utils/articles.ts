import type { ArticleMetadata } from '$lib/types/article';

export async function loadArticles(): Promise<ArticleMetadata[]> {
  const modules = import.meta.glob('/src/lib/data/articles/*.md');
  const articles: ArticleMetadata[] = [];

  for (const path in modules) {
    const module = await modules[path]() as any;
    if (module.metadata) {
      articles.push(module.metadata);
    }
  }

  return articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function loadArticle(slug: string) {
  try {
    const module = await import(`../data/articles/${slug}.md`);
    return module;
  } catch (e) {
    return null;
  }
}
