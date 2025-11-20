# Quick Start Guide

## Installation & Running

```bash
# Install dependencies
npm install --engine-strict=false

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Adding Your First Article

1. Create a new file in `src/lib/data/articles/your-article.md`

2. Use this template:

```markdown
<script context="module">
  export const metadata = {
    title: "Your Article Title",
    description: "Brief description",
    date: "2025-01-15",
    slug: "your-article-slug",
    author: "Your Name",
    sourceUrl: "https://source-url.com"
  };

  export const explanations = [
    {
      id: "concept-1",
      title: "Explanation Title",
      content: `
        <p>Your explanation with HTML formatting.</p>
      `
    }
  ];
</script>

<script>
  import ExplanationTrigger from '$lib/components/ExplanationTrigger.svelte';
  export let scrollToExplanation;
</script>

## Your Article Title

This is a paragraph with a <ExplanationTrigger id="concept-1" {scrollToExplanation}>clickable term</ExplanationTrigger>.
```

3. The article will automatically appear on the homepage

## How It Works

### Two-Column Layout
- **Left**: Article content with clickable terms
- **Right**: Detailed explanations

### Scroll Sync
When you click a `<ExplanationTrigger>`, the right column automatically scrolls to the matching explanation and highlights it.

### Key Components

- `ExplanationTrigger`: Wraps clickable text
- `scrollToExplanation`: Function passed from article page
- `metadata`: Article info (title, date, etc.)
- `explanations`: Array of explanation objects

## Deploy to GitHub Pages

1. Push your code to GitHub

2. Go to repository Settings → Pages

3. Set Source to "GitHub Actions"

4. The site will automatically deploy on push to `main`

## Customization

- **Colors**: Edit `src/app.css` and Tailwind classes
- **Layout**: Modify `src/routes/article/[slug]/+page.svelte`
- **Homepage**: Edit `src/routes/+page.svelte`
- **Styles**: Update `tailwind.config.js`

## Troubleshooting

**Build fails with engine error:**
```bash
npm install --engine-strict=false
```

**Changes not showing:**
```bash
# Clear cache and rebuild
rm -rf .svelte-kit build
npm run build
```

**Preview not working:**
Make sure you run `npm run build` first before `npm run preview`.
