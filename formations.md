---
title: Formations
layout: default
---
{% assign counter = 0 %}
{% for formation in site.formation %}
    {% if formation.published != false %}
        {% assign counter = counter | plus:1 %}
{{ formation.output }}
    {% endif %}
{% endfor %}

{% if counter == 0 %}
## Aucune formation à venir.
{% endif %}
