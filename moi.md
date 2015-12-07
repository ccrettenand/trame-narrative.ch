---
title: Charlotte Crettenand
layout: aboutme
---

<a name="moi"></a>

Après l'obtention de son Master en Psychologie Clinique de l'Enfant et l'Adolescent à l'Université de Lausanne, Charlotte a été engagée à la [CIMI][cimi] (Consultation Interdisciplinaire de la Maltraitance Intrafamiliale) à Lausanne et a pu bénéficier d'un riche encadrement théorique et pratique par le Dr Gérard Salem et le Dr Nahum Frenck.

Charlotte a ensuite vécu 15 mois à Montréal (2010-2011), au Canada, où elle s'est perfectionnée et formée en thérapie familiale et conjugale à l'[IFACEF][ifacef] (Institut de Formation et d'Aide Communautaire à l'Enfant et la Famille) ainsi qu'en approche narrative avec André Grégoire (Centre de Psychothérapie Stratégique), Peggy Sax (Re-authoring Teaching) et David Epston.

A son retour en Suisse, elle fonde le cabinet de consultation “Trame Narrative” à Sion en mars 2012. La même année, elle devient présidente de l’association [As’trame Valais][astrame-vs] dont elle assure également la coordination clinique et les rencontres avec les familles.

Elle poursuit sa formation en psychothérapie d'orientation systémique dans le cadre de [Relance Relationnelle][rr] avec Dr Lucien Barrelet, Mr Rodolphe Soulignac et Dr Thomas Will. En 2014, elle obtient son titre de psychologue-psychothérapeute FSP en orientation systémique.

En 2014, elle rejoint l'équipe de formateurs du “Certificat de Thérapie Narrative” coordonné par Relance Relationnelle.

Charlotte est reconnue en tant que psychologue spécialiste en psychothérapie par la [FSP][fsp]. Elle est par ailleurs membre de l'[ASVALIS][asvalis] (Association Valaisanne d'Interventions Systémiques et de Thérapie Familiale), l'[ASTHEFIS][asthefis] (Association Suisse de Thérapies de Familles et Interventions Systémiques) et l’[APVs][apvs] (Association des psychologues du Valais).

<div class='logos-membre' markdown='1'>
[![Fédération Suisse des Psychologues][fsp-logo]][fsp]
[![Association Suisse de Thérapies de Familles et Interventions Systémiques][asthefis-logo]][asthefis]
[![Fédération Valaisanne d'Interventions Systémiques et de Thérapies de Familles][asvalis-logo]][asvalis]
[![Association des Psychologues du Valais][apvs-logo]][apvs]
</div>

[cimi]: http://www.cimi.ch
[ifacef]: http://www.ifacef.com/
[astrame-vs]: http://astrame-valais.ch
[rr]: http://relancerelationnelle.ch
[fsp]: http://www.psychologie.ch/fr/
[asvalis]: http://www.asvalis.ch
[asthefis]: http://www.asthefis.ch
[apvs]: http://www.psy-vs.ch/fr/
[fsp]: http://www.psychologie.ch/

[fsp-logo]: /files/logo/fsp.png
[asthefis-logo]: /files/logo/asthefis.png
[asvalis-logo]: /files/logo/asvalis.png
[apvs-logo]: /files/logo/apvs.png

<a name="publications"></a>

Publications
------------

{% for publication in site.publication reversed %}
    {% if publication.published != false %}
{{ publication.output }}
    {% endif %}
{% endfor %}

{% for conte in site.conte %}
    {% if conte.relative_path contains 'tapisserie' %}
<div class="banner-wrapper apropos-conte">
 <div class="inner">
  <article id="banner" class="container">
   <p><a href="{{ conte.url }}" class="conte-link">Un conte : {{ conte.title }}</a></p>
  </article>
 </div>
</div>
    {% endif %}
{% endfor %}
