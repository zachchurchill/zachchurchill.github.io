---
layout: page
title: books
---

<p>There have been <strong>{{ site.data.books | size }}</strong> books logged overall.</p>

[Download CSV]({{ "assets/data/books.csv" | relative_url }})

{% assign unique_years = site.data.books | map: "year_read" | uniq | reverse %}
{% for year in unique_years %}
## {{ year }}
{% assign filtered_books = site.data.books | where: "year_read", year %}
<strong>{{ filtered_books | size }}</strong> books read:
<ul id="books__{{ year }}">
{% for book in filtered_books %}
    <li class="book">"{{ book.title }}" by {{ book.author }}</li>
{% endfor %}
</ul>
{% endfor %}

{%-include back_to_top_button.html -%}
