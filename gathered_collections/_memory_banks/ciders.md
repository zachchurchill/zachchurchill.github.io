---
layout: gathered_collections
name: Ciders
title: Ciders
tableId: ciders
---
<table id="{{ page.tableId }}">
    {% for row in site.data.ciders %}
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
