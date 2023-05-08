---
layout: default
name: Meads
title: Meads
---

<table>
    {% for row in site.data.meads %}
        {% if forloop.first %}
        <tr>
            {% for pair in row %}
                <th style="text-transform: capitalize">{{ pair[0] | replace: "__", "/" | replace: "_", " " }}</th>
            {% endfor %}
        </tr>
        {% endif %}
        {% tablerow pair in row %}
            {{ pair[1] }}
        {% endtablerow %}
    {% endfor %}
</table>
