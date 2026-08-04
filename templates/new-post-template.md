<!--
  HOW TO ADD A NEW PIECE OF WORK

  1. Copy this file into /_posts/, renaming it to:
       YYYY-MM-DD-short-title.md
     The date in the filename must match the "date" field below — this is
     a Jekyll requirement for posts.
  2. Fill in the front matter below (delete this comment block first).
  3. Set "module" to the slug of the module it belongs to (must match a
     slug in _data/modules.yml and the corresponding page in /modules/).
  4. Optionally list "tags" (labels) for this post — they appear as chips
     on the listing and become clickable filters on the module page.
  5. To attach a file (PDF, doc, image), drop it in /assets/attachments/
     and link it from the content below, e.g.:
       [Meeting Notes (PDF)]({{ "/assets/attachments/meeting-notes.pdf" | relative_url }})
     Always use relative_url like this rather than a bare path — see
     README.md "Adding attachments to a post" for why.
  6. Write the full content of the piece of work below the front matter.
     It will appear automatically on that module's page, sorted by date.
-->
---
layout: post
title: "Piece of Work Title"
date: 2026-01-01
module: module-slug-here
tags: [label-one, label-two]
summary: "One or two sentence summary shown on the module listing page."
---

Write the full content of this piece of work here. Standard Markdown is
supported (headings, lists, images, code blocks, links, etc.).
