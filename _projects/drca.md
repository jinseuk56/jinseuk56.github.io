---
layout: page
title: DR-Assisted Cluster Analysis
description: Finding meaningful structure in high-dimensional microscopy data without predefined labels.
importance: 2
category: software
github: https://github.com/jinseuk56/drca
img: assets/img/projects/drca-workflow.png
giscus_comments: false
---

{% include project-gallery-styles.liquid %}
{% include project-repository-link.liquid %}

DRCA is a Python toolkit for data-driven feature extraction from multidimensional microscopy data. It combines dimensionality reduction and unsupervised clustering to reveal spatially resolved patterns without predefined labels.

<h2 class="project-section-heading">Visual highlights</h2>

<div class="project-gallery">
  <div class="project-figure">
    {% include figure.liquid path="assets/img/projects/drca-workflow.png" class="img-fluid rounded z-depth-1" alt="DRCA dimensionality reduction and clustering workflow" caption="DRCA uses liner/nonlinear dimensionality reduction methods and density-based clustering to make complex microscopy datasets explorable." %}
  </div>
  <div class="project-figure">
    {% include figure.liquid path="assets/img/projects/drca-plasmon-eels.png" class="img-fluid rounded z-depth-1" alt="DRCA application to plasmonic EELS data" caption="DRCA separates and maps spatially overlapping plasmonic features in EELS data." %}
  </div>
</div>

## Related research

- **J. Ryu**, _et al._, [Dimensionality reduction and unsupervised clustering for EELS-SI](https://doi.org/10.1016/j.ultramic.2021.113314), _Ultramicroscopy_ (2021).
