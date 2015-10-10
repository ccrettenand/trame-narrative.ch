---
layout: default
---
{% for formation in site.formation %}
  {{ formation.output }}
{% endfor %}
