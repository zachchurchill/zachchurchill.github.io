---
layout: page
title: ciders
---

<p>There have been <strong>{{ site.data.ciders | size }}</strong> ciders logged overall.</p>

[Download CSV]({{ "assets/data/ciders.csv" | relative_url }})

<button id="include_flavors" type="button">Show Flavors/Tasting Notes</button>

{% assign ciderys = site.data.ciders | map: "cidery" | uniq %}

{% for cidery in ciderys %}
    {%-
        include makers_list.html
            drink_type="cider"
            drinks=site.data.ciders
            maker_type="cidery"
            maker=cidery
            flavor_text_col="flavor_text"
    -%}
{% endfor %}

{%- include show_hide_js.html buttonID="include_flavors" className="flavors" buttonText="Flavors/Tasting Notes" -%}
