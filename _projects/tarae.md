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

TARAE provides a unified workspace in which microscopy data, processing results, analytical relationships, and scientific context are managed as connected research objects. Its embedded agent is designed to understand the contents of the current workspace, translate a researcher’s scientific objective into an appropriate analysis strategy, coordinate available tools, and return interpretable results together with their supporting evidence. TARAE therefore extends the concept of independent microscopy software beyond replacing proprietary viewers. This approach provides a practical foundation for scalable and reproducible electron microscopy analysis and, ultimately, for autonomous characterization workflows that preserve human scientific oversight.

<h2 class="project-section-heading">Visual highlights</h2>

<div class="project-gallery">
  <div class="project-figure">
    {% include figure.liquid path="assets/img/projects/TARAE_idea.png" class="img-fluid rounded z-depth-1" sizes="(min-width: 768px) 45vw, 95vw" zoomable=true alt="TARAE's three roles: the researcher, the AI agent in its own sandbox, and TARAE on the researcher's computer, with the dialogue, requests, and results that pass between them" caption="The AI agent reasons in its own sandbox, TARAE checks and runs every request, and the researcher judges" %}
  </div>
  <div class="project-figure">
    {% include figure.liquid path="assets/img/projects/TARAE_ladder.png" class="img-fluid rounded z-depth-1" sizes="(min-width: 768px) 45vw, 95vw" zoomable=true alt="A four-step ladder from the researcher doing everything to autonomous characterization with human oversight, under the outlook that autonomous experiments and autonomous characterization together make autonomous microscopy" caption="A ladder toward autonomous microscopy: TARAE works on the steps where the agent assists and the scientific calls stay with the researcher" %}
  </div>
</div>
