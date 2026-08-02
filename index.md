---
layout: default
title: Home
permalink: /
---

## About

I currently work as a Cyber Security Analyst, alongside this role I am studying an MSc in Artificial Intelligence at University of Essex. This page is my e-Portfolio for this course and showcases some of the work I have completed in my studies.

## Module Areas

<div class="module-links">
{% for module in site.data.modules %}
  <a class="module-card" href="{{ '/modules/' | append: module.slug | append: '/' | relative_url }}">
    <h3>{{ module.name }}</h3>
    <p>{{ module.description }}</p>
  </a>
{% endfor %}
</div>
