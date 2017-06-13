---
title: Formations
layout: default
---
{% include banner.html title="Formations sur mesures" content="<p>Passionnée par la rencontre avec d'autres professionnels et la transmission de pratiques et de concepts qui animent ma vision professionnelle, Charlotte propose des formations et des interventions ciblées depuis 5 ans.
                                                               Intérêts et expertise notamment dans les domaines suivants : approche narrative, accompagnement du deuil et autres ruptures de liens (séparation conjugale, maladie).</p>
                                                               <p><a href='/moi.html#contact'>Contactez-moi pour discuter de votre projet !</a></p>" %}

<div class="future_formations">
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
</div>

# Formations passées

<div class="past_formations">
{% for formation in site.formation %}
    {% capture nowunix %}{{'now' | date: '%s'}}{% endcapture %}
    {% capture posttime %}{{formation.end_date | date: '%s'}}{% endcapture %}

    {% if formation.published != false and posttime <= nowunix %}
        {% assign counter = counter | plus:1 %}
{{ formation.output }}
    {% endif %}
{% endfor %}
</div>
