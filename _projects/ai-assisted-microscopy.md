---
layout: page
title: Data-driven and AI-assisted Microscopy Analysis
description: Turning high-dimensional microscopy data into interpretable spectral, structural, and compositional insight.
importance: 1
category: research
img: assets/img/projects/drca-workflow.png
giscus_comments: false
---

{% include project-gallery-styles.liquid %}

Modern transmission electron microscopes (TEM) produce increasingly large and high-dimensional datasets, including three-dimensional spectrum imaging and four-dimensional scanning transmission electron microscopy (4D-STEM) measurements. At each probe position, the recorded signal may consist of a spectrum containing thousands of energy channels or a diffraction pattern containing tens of thousands of detector pixels. Extracting interpretable information from these datasets remains challenging because of limited signal-to-noise ratios, particularly under low-dose conditions, as well as the computational demands and subjectivity associated with conventional analysis. I develop data-driven approaches that make those datasets more interpretable while preserving a clear connection to the underlying physics.

<h2 class="project-section-heading">Visual highlights</h2>

<div class="project-gallery">
  <div class="project-figure">
    {% include figure.liquid path="assets/img/projects/drca-workflow.png" class="img-fluid rounded z-depth-1" sizes="(min-width: 768px) 45vw, 95vw" alt="DRCA workflow from high-dimensional microscopy data to clustered features" caption="From multidimensional microscopy data to interpretable feature maps through dimensionality reduction and clustering." %}
  </div>
  <div class="project-figure">
    {% include figure.liquid path="assets/img/projects/4dstem-nmf-analysis.png" class="img-fluid rounded z-depth-1" sizes="(min-width: 768px) 45vw, 95vw" alt="Non-negative matrix factorization analysis of 4D-STEM data" caption="A data-driven route from 4D-STEM measurements to interpretable components." %}
  </div>
  <div class="project-figure">
    {% include figure.liquid path="assets/img/projects/1d-cae-architecture.png" class="img-fluid rounded z-depth-1" sizes="(min-width: 768px) 45vw, 95vw" alt="Architecture of a one-dimensional convolutional autoencoder for spectrum data" caption="A one-dimensional convolutional autoencoder learns a compact representation of microscopy spectra." %}
  </div>
</div>

## Selected outputs

- **J. Ryu**, _et al._, [Dimensionality reduction and unsupervised clustering for EELS spectrum imaging](https://doi.org/10.1016/j.ultramic.2021.113314), _Ultramicroscopy_ (2021).
- J. Jo, **J. Ryu**, _et al._, [Direct three-dimensional observation of plasmonic near-fields](https://doi.org/10.1021/acsnano.4c10677), _ACS Nano_ (2024).
- **J. Ryu**, _et al._, [Resolving nanoscale heterogeneities in lead-halide perovskites](https://doi.org/10.1002/adma.74382), _Advanced Materials_ (2026).
