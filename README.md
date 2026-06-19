# Moe Sani — Personal Website

Professional Jekyll site for [moe-sani.github.io](https://moe-sani.github.io).

## Quick Start

```bash
bundle install
bundle exec jekyll serve
# → http://localhost:4000
```

## Adding a New Case Study

Drop a `.md` file in `_case_studies/`:

```yaml
---
title: "My New Project"
date: 2026-07-01
tags: [Edge AI, Robotics]
icon: "🤖"
read_time: 5
excerpt: "Short description."
---

Your markdown content here...
```

Commit, push, done.

## Customisation

- **Photo**: `assets/images/moe.jpeg`
- **Colours**: CSS variables in `assets/css/style.scss`
- **Contact form**: Replace `YOUR_FORM_ID` with your [Formspree](https://formspree.io) ID
- **Social links**: Update `_config.yml`
