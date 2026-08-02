---
layout: default
title: Home
permalink: /
---

## About

Write a short introduction here: your name, the Masters programme you're
studying, and what this e-portfolio is for. This section is a good place to
summarise your academic background and interests.

## Module Areas

<div class="module-links">
{% for module in site.data.modules %}
  <a class="module-card" href="{{ '/modules/' | append: module.slug | append: '/' | relative_url }}">
    <h3>{{ module.name }}</h3>
    <p>{{ module.description }}</p>
  </a>
{% endfor %}
</div>
