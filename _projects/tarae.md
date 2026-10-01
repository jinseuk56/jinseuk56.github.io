---
layout: page
title: "Agentic Microscopy Data Analysis Software"
description: An open-source, cross-platform agentic suite for multimodal electron-microscopy characterization.
importance: 1
category: research
img: assets/img/projects/TARAE_main.png
giscus_comments: false
---

{% include project-gallery-styles.liquid %}

TARAE (Task-Aware Research and Analysis Environment for Electron Microscopy) is an independent PySide6 application being developed to reduce dependence on closed, vendor-specific microscopy software. Its name also evokes the Korean word *tarae*, an intricately bundled skein of thread—a metaphor for organizing and interpreting intertwined multimodal data.

The platform brings common images, TIFF, DM3/DM4, EMD/HDF5, and 4D-STEM data into one cross-platform environment through a standardized data-type registry. It connects 4D-STEM, EELS and EDX spectrum imaging, ptychography, electron tomography, and automated crystallographic phase-separation workflows with unsupervised feature extraction based on linear or deep-learning dimensionality reduction and clustering.

Its embedded agent is designed to accept heterogeneous data and a high-level scientific question, inspect the available data types, formulate and execute a multi-step analysis strategy using supervised backend tools, and compile quantitative results into a structured, publication-ready report.

<h2 class="project-section-heading">Visual highlight</h2>

<div class="project-gallery">
  <div class="project-figure">
    {% include figure.liquid path="assets/img/projects/TARAE_main.png" class="img-fluid rounded z-depth-1" sizes="(min-width: 768px) 90vw, 95vw" alt="TARAE workflow connecting a researcher, an AI agent, and supervised analysis software" caption="TARAE keeps the researcher, AI agent, and local execution environment in a transparent, supervised analysis loop." %}
  </div>
</div>
