---
title: Therapies
layout: default
---
{% include banner.html title="Congé maternité" content="Afin d'explorer de nouveaux défis professionnels, ma pratique clinique est désormais suspendue pour une durée indéterminée. Au plaisir de vous croiser dans d'autres contextes !" %}

{% for therapie in site.therapie %}
    {% if therapie.published != false %}
{{ therapie.output }}
    {% endif %}
{% endfor %}

<header>
    <h2 style="text-align:center;">Approche thérapeutique</h2>
</header>

<div class="row" style="margin-bottom: 10px">
    <span class="image 8u -2u 12u(mobile)">
        <img src="/files/therapies/panorama/approche.jpg" alt="Approche thérapeutique">
    </span>
</div>

Les histoires me passionnent, autant celles qu’on écoute au coin du feu que celles qui se racontent le jour du marché.

Lorsqu’on décide de consulter, il est courant de se sentir emprisonné dans une histoire récurrente, l’histoire du Problème, qui semble régir notre vie et nos relations.

Nos espoirs et nos valeurs semblent annihilés par ce Problème et nos projets, désormais inaccessibles.

Dès lors, comment envisager une histoire qui nous ressemble, qui honore ce qui importe à nos yeux ? Comment aménager notre relation au Problème d’une manière qui nous convient ? Comment être à nouveau auteur de sa vie ?

C’est le genre de conversations auxquelles je vous convie.
