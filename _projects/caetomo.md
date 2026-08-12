---
layout: page
title: CAETomo
description: An accessible workflow for turning spectroscopic tilt series into three-dimensional maps.
importance: 1
category: software
github: https://github.com/jinseuk56/CAETomo
img: assets/img/projects/caetomo-workflow.png
giscus_comments: false
---

{% include project-gallery-styles.liquid %}
{% include project-repository-link.liquid %}

CAETomo brings alignment, feature-map extraction (blind source separation), and reconstruction into one interactive EELS-tomography workflow. It is designed to make three-dimensional spectroscopic analysis easier to explore and reproduce.

<h2 class="project-section-heading">Visual highlights</h2>

<div class="project-gallery">
  <div class="project-figure">
    {% include figure.liquid path="assets/img/projects/caetomo-workflow.png" class="img-fluid rounded z-depth-1" alt="CAETomo EELS tomography workflow" caption="A streamlined path from an EELS tilt series to a three-dimensional reconstruction." %}
  </div>
  <div class="project-figure">
    {% include figure.liquid path="assets/img/projects/caetomo-eels-tomography-result.png" class="img-fluid rounded z-depth-1" sizes="(min-width: 768px) 45vw, 95vw" alt="EELS tomography result" caption="Plasmon EELS tomography resolves the three-dimensional distribution of localized surface plasmon features." %}
  </div>
  <div class="project-figure">
    {% include figure.liquid path="assets/img/projects/caetomo-image-tomography-result.png" class="img-fluid rounded z-depth-1" sizes="(min-width: 768px) 45vw, 95vw" alt="Image tomography reconstruction result" caption="Compressed sensing electron tomography enables a robust three-dimensional reconstruction despite a lack of projections." %}
  </div>
</div>

## Related research

- J. Jo, **J. Ryu**, _et al._, [Direct three-dimensional observation of the plasmonic near-fields of a nanoparticle with circular dichroism](https://doi.org/10.1021/acsnano.4c10677), _ACS Nano_ (2024).
