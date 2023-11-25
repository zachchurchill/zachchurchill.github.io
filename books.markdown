---
layout: page
title: books
---

<p>There have been <strong>{{ site.data.books | size }}</strong> books logged overall.</p>

## 2023
{% assign books_2023 = site.data.books | where: "year_read", "2023" %}
<strong>{{ books_2023 | size }}</strong> books read:
<ul id="books">
{% for book in books_2023 %}
    <li class="book">"{{ book.title }}" by {{ book.author }}</li>
{% endfor %}
</ul>
