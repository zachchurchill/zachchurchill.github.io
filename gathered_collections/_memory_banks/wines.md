---
layout: gathered_collections
name: Wines
title: Wines
tableId: wines
---
<table id="{{ page.tableId }}">
    {% for row in site.data.wines %}
        {% if forloop.first %}
        <thead>
          <tr>
              {% for pair in row %}
                  <th style="text-transform: capitalize">{{ pair[0] | replace: "_", " " }}</th>
              {% endfor %}
          </tr>
        </thead>
        {% endif %}
        {% tablerow pair in row %}
            {{ pair[1] }}
        {% endtablerow %}
    {% endfor %}
</table>
