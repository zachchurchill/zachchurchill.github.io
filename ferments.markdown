---
layout: page
title: ferments
custom_js: include_details
---

<p>There have been <strong>{{ site.data.ferments | size }}</strong> ferments logged overall.</p>

<button id="include_details" type="button">Show Fermentation Log Details</button>

## still cookin'
{% assign in_progress = site.data.ferments | where_exp: "item", "item.bottlingDate == nil" %}
<strong>{{ in_progress | size }}</strong> ferments still aging:
<ul id="ferments__aging">
{% for ferment in in_progress %}
    <li class="ferment">
        "{{ ferment.ferment }}" ({{ ferment.id }} - {{ ferment.type }})
        <ul class="ferment_details" style="display: none">
            <li>Started {{ ferment.primaryStartDate }}{% if ferment.startingSG != nil %} with SG ~ {{ ferment.startingSG }}{% endif %}</li>
            <li>{{ ferment.gallon }} gallon batch using {{ ferment.yeast }}</li>
            {% if ferment.oakStartDate != nil %}
            <li>
                Oaked using {{ ferment.oakAmount }} of {{ ferment.oakFlavor }} {{ ferment.oakType}}
                {% if ferment.oakEndDate != nil %}from {{ ferment.oakStartDate }} to {{ ferment.oakEndDate }}
                {% else %}since {{ ferment.oakStartDate }}
                {% endif %}
            </li>
            {% endif %}
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
        <ul class="ferment_details" style="display: none">
            <li>Started {{ ferment.primaryStartDate }}{% if ferment.startingSG != nil %} with SG ~ {{ ferment.startingSG }}{% endif %}</li>
            <li>Bottled {{ ferment.bottlingDate }}{% if ferment.finalSG != nil %} with final SG ~ {{ ferment.finalSG }}{% endif %}</li>
            <li>{{ ferment.gallon }} gallon batch using {{ ferment.yeast }}</li>
            {% if ferment.oakStartDate != nil %}
            <li>
                Oaked using {{ ferment.oakAmount }} of {{ ferment.oakFlavor }} {{ ferment.oakType}}
                {% if ferment.oakEndDate != nil %}from {{ ferment.oakStartDate }} to {{ ferment.oakEndDate }}
                {% else %}since {{ ferment.oakStartDate }}
                {% endif %}
            </li>
            {% endif %}
            {% if ferment.carbonationMethod != nil %}<li>Carbonated via {{ ferment.carbonationMethod }}</li>{% endif %}
        </ul>
    </li>
{% endfor %}
</ul>
