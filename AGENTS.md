# Repository instructions

## New blog post intake

When the user asks to turn material in `new_post/` into a blog post:

1. Treat every file in `new_post/` except `.gitkeep` as source material for the new post.
2. Preserve the author's voice while fixing structure, grammar, Markdown and accessibility text.
3. Follow the existing Jekyll front matter and post style. Use the requested publication date, or the current date when none is given.
4. Move the finished article to `_posts/YYYY-MM-DD-descriptive-slug.md`.
5. Move supporting media to `assets/images/posts/YYYY_MM_DD/`, give files web-friendly names and update all references in the article.
6. Choose the strongest relevant image as the front-matter `image`, add useful visuals in context, and write descriptive alt text.
7. Run the available Jekyll build or equivalent validation and inspect the rendered post when practical.
8. Leave `new_post/` empty except for `.gitkeep` when the intake is complete.

Do not invent technical claims or silently discard source material. Flag ambiguities that would materially change the article.
