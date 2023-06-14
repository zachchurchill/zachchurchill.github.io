---
layout: gathered_collections
name: Meads
title: Meads
tableId: meads
---
<table id="{{ page.tableId }}">
    {% for row in site.data.meads %}
        {% if forloop.first %}
        <thead>
          <tr>
              {% for pair in row %}
                  <th style="text-transform: capitalize">{{ pair[0] | replace: "__", "/" | replace: "_", " " }}</th>
              {% endfor %}
          </tr>
        </thead>
        {% endif %}
        {% tablerow pair in row %}
            {{ pair[1] }}
        {% endtablerow %}
    {% endfor %}
</table>
