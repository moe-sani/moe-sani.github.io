# moesani.com

Personal site for **Moe Sani** — Edge AI, IoT & autonomous systems architect.
Built with [Jekyll](https://jekyllrb.com/) and hosted on GitHub Pages.

## Run locally

```bash
bundle install
bundle exec jekyll serve
```

Then open http://localhost:4000.

## Structure

| Path | Purpose |
|------|---------|
| `index.html` | Homepage (hero, services, case studies, publications, contact) |
| `about-me.html` | About page (`/about-me/`) |
| `blog/index.html` | Case studies listing (`/blog/`) |
| `publications.html` | Publications listing (`/publications/`) |
| `_posts/` | Case study / blog posts (`YYYY-MM-DD-title.md`) |
| `_layouts/` | Page templates (`default`, `post`) |
| `_includes/` | Reusable snippets (e.g. social icons) |
| `_data/` | Content data (`publications.yml`, `social.yml`) |
| `assets/` | CSS, JS, and images |
| `_config.yml` | Jekyll configuration |

## Adding a case study

Create `_posts/YYYY-MM-DD-my-title.md` with front matter:

```yaml
---
title: "My case study"
date: 2026-06-15
tags: [Edge AI, Robotics]
excerpt: "One-line summary shown on cards."
image: /assets/images/posts/cover.png
---
```

Alternatively, drop a draft and its supporting media into `new_post/`. When the post is prepared, the formatted article is moved to `_posts/`, its media is moved to a dated folder under `assets/images/posts/`, and `new_post/` is cleared for the next draft.

## Editing data

- **Publications** → `_data/publications.yml`
- **Social links** → `_data/social.yml`
