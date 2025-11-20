# Physics Explainer Web App

An interactive physics explainer website built with SvelteKit, featuring a two-column synchronized layout for article content and detailed explanations.

## Features

- **Two-column layout**: Original article text on the left, detailed explanations on the right
- **Scroll synchronization**: Click on highlighted terms to automatically scroll to explanations
- **Markdown support**: Articles written in Markdown with frontmatter using mdsvex
- **Static site generation**: Deployable to GitHub Pages
- **Responsive design**: Built with Tailwind CSS

## Project Structure

```
src/
├── lib/
│   ├── components/
│   │   └── ExplanationTrigger.svelte  # Clickable trigger component
│   ├── data/
│   │   └── articles/                   # Markdown articles go here
│   │       └── quantum-entanglement.md # Example article
│   ├── types/
│   │   └── article.ts                  # TypeScript types
│   └── utils/
│       └── articles.ts                 # Article loading utilities
├── routes/
│   ├── +layout.svelte                  # Root layout
│   ├── +layout.ts                      # Prerender config
│   ├── +page.svelte                    # Homepage with card grid
│   ├── +page.ts                        # Homepage data loading
│   └── article/
│       └── [slug]/
│           ├── +page.svelte            # Article page (two-column)
│           └── +page.ts                # Article data loading
└── app.css                             # Global styles + Tailwind
```

## Getting Started

### Prerequisites

- Node.js 20+ (you have v23.7.0, which works with --engine-strict=false)
- npm or pnpm

### Installation

```sh
npm install --engine-strict=false
```

### Development

Start the development server:

```sh
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Building for Production

```sh
npm run build
```

Preview the production build:

```sh
npm run preview
```

## Adding New Articles

1. Create a new Markdown file in [src/lib/data/articles/](src/lib/data/articles/)
2. Use the following structure:

```markdown
---
title: "Your Article Title"
description: "A brief description"
date: "2025-01-15"
slug: "your-article-slug"
author: "Your Name"
sourceUrl: "https://original-article-url.com"
---

<script>
  import ExplanationTrigger from '$lib/components/ExplanationTrigger.svelte';
  export let scrollToExplanation;
</script>

## Your Content

This is a paragraph with a <ExplanationTrigger id="concept-1" {scrollToExplanation}>clickable term</ExplanationTrigger>.

<script context="module">
  export const metadata = {
    title: "Your Article Title",
    description: "A brief description",
    date: "2025-01-15",
    slug: "your-article-slug",
    author: "Your Name",
    sourceUrl: "https://original-article-url.com"
  };

  export const explanations = [
    {
      id: "concept-1",
      title: "Explanation Title",
      content: `
        <p>Your detailed explanation here with HTML formatting.</p>
      `
    }
  ];
</script>
```

### Article Structure Explained

- **Frontmatter**: Metadata at the top (title, description, date, etc.)
- **Script block**: Import components and accept props
- **Content**: Write your article with Markdown
- **ExplanationTrigger**: Wrap terms that link to explanations
- **context="module" script**: Export metadata and explanations array

## Deploying to GitHub Pages

### Step 1: Enable GitHub Pages

1. Push your code to GitHub
2. Go to your repository settings
3. Navigate to "Pages" in the left sidebar
4. Under "Source", select "GitHub Actions"

### Step 2: Configure Repository Name

The GitHub Actions workflow is already set up in [.github/workflows/deploy.yml](.github/workflows/deploy.yml).

If your repository is at `https://github.com/username/repo-name`, the site will be available at:
```
https://username.github.io/repo-name
```

### Step 3: Deploy

Push to the `main` branch:

```sh
git add .
git commit -m "Initial commit"
git push origin main
```

The GitHub Actions workflow will automatically build and deploy your site.

### Local Testing with Base Path

To test the site locally with the same base path as GitHub Pages:

```sh
BASE_PATH=/your-repo-name npm run build
npm run preview
```

## How Scroll Synchronization Works

1. **ExplanationTrigger component**: Wraps clickable text in articles
2. **scrollToExplanation function**: Passed from article page to triggers
3. **State management**: Active explanation ID tracked with `$state`
4. **DOM refs**: Each explanation bound with `bind:this`
5. **Smooth scroll**: `scrollIntoView` with smooth behavior
6. **Visual feedback**: Active explanations get highlighted with Tailwind classes

## Customization

### Styling

- Modify [src/app.css](src/app.css) for global styles
- Edit [tailwind.config.js](tailwind.config.js) for Tailwind customization
- Update component styles in `.svelte` files

### Layout

- Homepage grid: [src/routes/+page.svelte](src/routes/+page.svelte)
- Article layout: [src/routes/article/[slug]/+page.svelte](src/routes/article/[slug]/+page.svelte)

## Tech Stack

- **SvelteKit**: Framework
- **Svelte 5**: Latest version with runes (`$state`, `$props`)
- **mdsvex**: Markdown preprocessor
- **Tailwind CSS**: Styling
- **TypeScript**: Type safety
- **adapter-static**: Static site generation
- **GitHub Actions**: CI/CD

## License

This project is open source and available under the MIT License.

## Support

For issues or questions, please open an issue on GitHub.
