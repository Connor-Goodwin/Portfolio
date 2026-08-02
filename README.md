# e-Portfolio

A Jekyll-based Masters e-Portfolio, built for GitHub Pages.

## Structure

- `index.md` — homepage (About section + auto-generated links to each module).
- `_data/modules.yml` — list of module areas shown on the homepage.
- `modules/*.md` — one page per module. Lists all posts belonging to that module
  (title, date, summary, link) automatically, sorted newest first.
- `_posts/*.md` — one file per piece of work. Rendered as a blog-style post
  (title, date, content) and picked up by its module page via the `module`
  front matter field.
- `_layouts/` — `default.html` (shared header/nav/footer), `module.html`
  (module listing page), `post.html` (individual piece of work).
- `assets/css/style.css` — site styling.
- `assets/js/tag-filter.js` — powers the label filter buttons on module pages.
- `templates/` — copy-and-fill templates for adding new modules/posts
  (excluded from the built site).

## Adding a new module

1. Copy `templates/new-module-template.md` into `modules/`, rename it to the
   module's slug (e.g. `modules/machine-learning.md`).
2. Fill in `title`, `module`, and `permalink` in its front matter.
3. Add a matching entry to `_data/modules.yml` (`name`, `slug`, `description`)
   so it appears as a link on the homepage.

## Adding a new piece of work

1. Copy `templates/new-post-template.md` into `_posts/`, rename it to
   `YYYY-MM-DD-short-title.md` (the date in the filename must match the
   `date` field in the front matter).
2. Fill in `title`, `date`, `module` (must match a module slug), and
   `summary`.
3. Optionally add `tags` (a list of labels, e.g. `tags: [research, reflection]`).
4. Write the content below the front matter in Markdown.

The post will automatically appear on its module's listing page — no other
file needs to be edited.

## Labels and filtering

Any post with a `tags` list shows those labels as chips on the module page
and on the post itself. If a module has at least one tagged post, its page
gets a filter bar (built from every tag used in that module, deduplicated
automatically) — clicking a label shows only matching posts; clicking "All"
resets it. This is plain client-side JavaScript (`assets/js/tag-filter.js`),
so no rebuild is needed when you add or change tags — just add labels to a
post's front matter and they show up.

## Local preview

Requires Ruby 3.0+ and Bundler. macOS ships an old system Ruby (2.6), which is
too old for the `github-pages` gem — install a newer Ruby first, e.g.
`brew install ruby` or via [rbenv](https://github.com/rbenv/rbenv).

```bash
bundle install
bundle exec jekyll serve
```

Then open http://localhost:4000. You don't need this step to publish — GitHub
Pages builds the site for you — it's only useful for previewing changes
before pushing.

## Publishing to GitHub Pages

1. Create a GitHub repository and push this directory to it.
2. In the repo, go to **Settings → Pages**, and under "Build and deployment"
   set the source to your default branch (e.g. `main`) and root folder.
   GitHub will build the Jekyll site automatically — no extra configuration
   needed.
3. If your repository is **not** named `<your-username>.github.io`, set
   `baseurl: "/<repo-name>"` in `_config.yml` so links resolve correctly.
