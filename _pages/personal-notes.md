---
layout: page
permalink: /notes/
title: personal notes
description: Photo journals and personal writing.
nav: false
---

{% assign personal_posts = site.posts | where_exp: "post", "post.categories contains 'personal'" %}

<ul class="post-list">
  {% for post in personal_posts %}
    <li>
      <h3><a class="post-title" href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
      <p class="post-meta">{{ post.date | date: '%B %d, %Y' }}</p>
    </li>
  {% endfor %}
</ul>
