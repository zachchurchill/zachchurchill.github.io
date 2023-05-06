---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
---
# zachchurchill.github.io

Interactive lists for meads, beers, and wines that I've had forthcoming along with some less interesting facts about me.

## Posts

Unlikely that I'll use these, but let's go ahead and set up links so I don't forget about the example post:
<ul>
    {% for post in site.posts %}
    <li>
        <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
    {% endfor %}
</ul>
