---
layout: default
name: Wines
title: Wines
---

<table>
    {% for row in site.data.wines %}
        {% if forloop.first %}
        <tr>
            {% for pair in row %}
                <th style="text-transform: capitalize">{{ pair[0] | replace: "_", " " }}</th>
            {% endfor %}
        </tr>
        {% endif %}
        {% tablerow pair in row %}
            {{ pair[1] }}
        {% endtablerow %}
    {% endfor %}
</table>
