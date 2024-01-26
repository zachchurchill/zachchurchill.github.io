---
layout: page
title: wines
---

<p>There have been <strong>{{ site.data.wines | size }}</strong> wines logged overall.</p>

## 2023
{% assign wines_2023 = site.data.wines | where: "year_consumed", "2023" %}
<strong>{{ wines_2023 | size }}</strong> wines enjoyed:
<ul id="2023_wines">
{% for wine in wines_2023 %}
    <li class="wine">
        {{ wine.winery }} - "{{ wine.wine }}"
        {% if wine.vintage != "-" %}({{ wine.vintage }}){% endif %}
        <span style="font-size: 0.6rem">{{ wine.source }}</span>
    </li>
{% endfor %}
</ul>

## 2022
{% assign wines_2022 = site.data.wines | where: "year_consumed", "2022" %}
<strong>{{ wines_2022 | size }}</strong> wines enjoyed:
<ul id="2022_wines">
{% for wine in wines_2022 %}
    <li class="wine">
        {{ wine.winery }} - "{{ wine.wine }}"
        {% if wine.vintage != "-" %}({{ wine.vintage }}){% endif %}
        <span style="font-size: 0.6rem">{{ wine.source }}</span>
    </li>
{% endfor %}
</ul>

{%-include back_to_top_button.html -%}
