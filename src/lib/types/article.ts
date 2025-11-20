export interface ArticleMetadata {
  title: string;
  description: string;
  date: string;
  slug: string;
  sourceUrl?: string;
  author?: string;
}

export interface ExplanationSection {
  id: string;
  title: string;
  content: string;
}

export interface ArticleData {
  metadata: ArticleMetadata;
  explanations: ExplanationSection[];
}
