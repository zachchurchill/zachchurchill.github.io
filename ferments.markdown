---
layout: page
title: ferments
---

<p>There have been <strong>{{ site.data.ferments | size }}</strong> ferments logged overall.</p>

## still cookin'
{% assign in_progress = site.data.ferments | where_exp: "item", "item.bottlingDate == nil" %}
<strong>{{ in_progress | size }}</strong> ferments still aging:
<ul id="ferments__aging">
{% for ferment in in_progress %}
    <li class="ferment">
        "{{ ferment.ferment }}" ({{ ferment.id }} - {{ ferment.type }})
        <ul class="ferment_details">
            <li>Started {{ ferment.primaryStartDate }} with SG ~ {{ ferment.startingSG }}</li>
            <li>Batch size: {{ ferment.gallon }} {% if ferment.gallon == 1 %}gallon{% else %}gallons{% endif %}</li>
        </ul>
    </li>
{% endfor %}
</ul>


## completed
{% assign completed = site.data.ferments | where_exp: "item", "item.bottlingDate != nil" %}
<strong>{{ completed | size }}</strong> ferments completed and bottled:
<ul id="ferments__completed">
{% for ferment in completed %}
    <li class="ferment">
        "{{ ferment.ferment }}" ({{ ferment.id }} - {{ ferment.type }})
        <ul class="ferment_details">
            <li>Started {{ ferment.primaryStartDate }} with SG ~ {{ ferment.startingSG }}</li>
            <li>Bottled {{ ferment.bottlingDate }} with final SG ~ {{ ferment.finalSG }}</li>
            <li>Batch size: {{ ferment.gallon }} {% if ferment.gallon == 1 %}gallon{% else %}gallons{% endif %}</li>
        </ul>
    </li>
{% endfor %}
</ul>
