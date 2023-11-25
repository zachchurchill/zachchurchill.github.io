---
layout: page
title: meads
custom_js: include_flavors
---

<p>There have been <strong>{{ site.data.meads | size }}</strong> meads logged overall.</p>

<button id="include_flavors" type="button">Include Flavors/Tasting Notes</button>

{% assign meaderys = site.data.meads | map: "meadery" | uniq %}

{% for meadery in meaderys %}
{%-include mead_list.html meads=site.data.meads meadery=meadery-%}
{% endfor %}
