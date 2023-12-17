---
layout: page
title: meads
---

<p>There have been <strong>{{ site.data.meads | size }}</strong> meads logged overall.</p>

<button id="include_flavors" type="button">Show Flavors/Tasting Notes</button>

{% assign meaderys = site.data.meads | map: "meadery" | uniq %}

{% for meadery in meaderys %}
    {%-
        include makers_list.html
            drink_type="mead"
            drinks=site.data.meads
            maker_type="meadery"
            maker=meadery
            flavor_text_col="flavors__tasting_notes"
    -%}
{% endfor %}

{%- include show_hide_js.html buttonID="include_flavors" className="flavors" buttonText="Flavors/Tasting Notes" -%}
