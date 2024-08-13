---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
---

# {{ site.author }}

{{ site.description }}

**info**:
- [github repo](https://github.com/{{ site.github_username }}) 
- [email](mailto:{{ site.email }})
- [resume](https://github.com/zachchurchill/zachchurchill/blob/main/professional/default_resume.pdf)

**collections**:
- [books]({% link books.markdown %})
- [meads]({% link meads.markdown %})
- [ferments]({% link ferments.markdown %})

**posts**
{% for post in site.posts %}
- {{ post.date | date: "%Y-%m-%d" }} [{{ post.title }}]({{ post.url }})
{% endfor %}
