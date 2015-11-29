---
title: Therapies
layout: default
---
{% for therapie in site.therapie %}
    {% if therapie.published != false %}
{{ therapie.output }}
    {% endif %}
{% endfor %}

<a name="approche"></a>

Approche thérapeutique
----------------------

Les histoires me passionnent, autant celles qu’on écoute au coin du feu que celles qui se racontent le jour du marché.

Lorsqu’on décide de consulter, il est courant qu’on se sente emprisonné dans une même histoire, l’histoire du Problème, qui semble régir notre vie et nos relations.
