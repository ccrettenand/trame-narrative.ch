---
title: Formations
layout: default
---
{% assign counter = 0 %}
{% for formation in site.formation %}
    {% capture nowunix %}{{'now' | date: '%s'}}{% endcapture %}
    {% capture posttime %}{{formation.end_date | date: '%s'}}{% endcapture %}

    {% if formation.published != false and posttime > nowunix %}
        {% assign counter = counter | plus:1 %}
{{ formation.output }}
    {% endif %}
{% endfor %}

{% if counter == 0 %}
## Aucune formation à venir.
{% endif %}

# Formations passées

{% for formation in site.formation %}
    {% capture nowunix %}{{'now' | date: '%s'}}{% endcapture %}
    {% capture posttime %}{{formation.end_date | date: '%s'}}{% endcapture %}

    {% if formation.published != false and posttime <= nowunix %}
        {% assign counter = counter | plus:1 %}
{{ formation.output }}
    {% endif %}
{% endfor %}
