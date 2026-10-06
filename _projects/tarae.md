---
layout: page
title: "TARAE Project"
description: An open-source, cross-platform agentic suite for multimodal electron-microscopy characterization.
importance: 1
category: research
img: assets/img/projects/TARAE_idea.png
giscus_comments: false
---

{% include project-gallery-styles.liquid %}

TARAE (Task-Aware Research and Analysis Environment for Electron Microscopy) is open-source, cross-platform research software built around one question: how should an AI agent take part in scientific analysis? Its name also evokes the Korean word *tarae*, an intricately bundled skein of thread—a metaphor for organizing and interpreting intertwined multimodal data.

TARAE's answer keeps three roles apart. The AI agent works in its own sandbox, where it is free to reason: it plans the analysis, chooses tools, and proposes settings. TARAE, running on the researcher's computer with the data, checks each request, runs it with its own code, and keeps the record. The researcher sets the question, confirms what matters, and judges the science. The agent does not finish a task alone; it works in conversation with the researcher, and because it is given expert-written knowledge of each kind of data and each tool, it can suggest analysis strategies that fit the data and say plainly what cannot be done. Looking ahead, TARAE aims at autonomous characterization with human oversight, one half of autonomous microscopy alongside autonomous experiments.

Electron microscopy is where this idea is built and tested. Its software is scattered across vendor programs and Python packages, its analyses range from simple processing to work that depends on an expert's judgment, and the developers are electron microscopists who can verify each step and each conclusion. As a platform, TARAE is an independent PySide6 application that reduces dependence on closed, vendor-specific microscopy software. It brings common images, TIFF, DM3/DM4, EMD/HDF5, and 4D-STEM data into one environment through a standardized data-type registry, and connects 4D-STEM, EELS and EDX spectrum imaging, ptychography, electron tomography, and automated crystallographic phase-separation workflows with unsupervised feature extraction based on linear or deep-learning dimensionality reduction and clustering.

<h2 class="project-section-heading">Visual highlights</h2>

<div class="project-gallery">
  <div class="project-figure">
    {% include figure.liquid path="assets/img/projects/TARAE_idea.png" class="img-fluid rounded z-depth-1" sizes="(min-width: 768px) 45vw, 95vw" zoomable=true alt="TARAE's three roles: the researcher, the AI agent in its own sandbox, and TARAE on the researcher's computer, with the dialogue, requests, and results that pass between them" caption="The AI agent reasons in its own sandbox, TARAE checks and runs every request, and the researcher judges" %}
  </div>
  <div class="project-figure">
    {% include figure.liquid path="assets/img/projects/TARAE_ladder.png" class="img-fluid rounded z-depth-1" sizes="(min-width: 768px) 45vw, 95vw" zoomable=true alt="A four-step ladder from the researcher doing everything to autonomous characterization with human oversight, under the outlook that autonomous experiments and autonomous characterization together make autonomous microscopy" caption="A ladder toward autonomous microscopy: TARAE works on the steps where the agent assists and the scientific calls stay with the researcher" %}
  </div>
</div>
