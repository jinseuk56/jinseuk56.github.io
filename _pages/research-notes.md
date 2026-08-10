---
layout: page
permalink: /research/
title: research notes
description: Methods, projects, and work in progress.
nav: false
---

{% assign research_posts = site.posts | where_exp: "post", "post.categories contains 'research'" %}

{% if research_posts.size > 0 %}
  <ul class="post-list">
    {% for post in research_posts %}
      <li>
        <h3><a class="post-title" href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
        <p class="post-meta">{{ post.date | date: '%B %d, %Y' }}</p>
      </li>
    {% endfor %}
  </ul>
{% else %}
  <p>Research notes and project updates will appear here.</p>
{% endif %}
