---
# TODO branch off default layout for home, memory bank entries and posts
layout: default
---
# zachchurchill.github.io

Interactive lists for meads, beers, and wines that I've had forthcoming along with some less interesting facts about me.

## Memory Banks

<ul>
    {% for memory_bank in site.memory_banks %}
    <li>
        <a href="{{ memory_bank.url }}">{{ memory_bank.title }}</a>
    </li>
    {% endfor %}
</ul>

## Posts

Unlikely that I'll use these, but let's go ahead and set up links so I don't forget about the example post:
<ul>
    {% for post in site.posts %}
    <li>
        <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
    {% endfor %}
</ul>
