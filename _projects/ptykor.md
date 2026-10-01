---
layout: page
title: PTYKOR Project
description: A physics-informed reconstruction framework targeting high depth resolution with multi-tilt electron ptychography.
importance: 2
category: research
img: assets/img/projects/PTYKOR_main.PNG
giscus_comments: false
---

{% include project-gallery-styles.liquid %}

PTYKOR is the software foundation for the research project *Physics-Informed Deep Generative 3D Electron Ptychography for Achieving Single-Atomic-Layer Depth Resolution*. This research is supported by the Basic Science Research Program through the National Research Foundation of Korea (NRF), funded by the Ministry of Education, for the period 1 September 2026–31 August 2029.

Conventional electron tomography requires high-dose, high-angle tilt series and is therefore difficult to apply to thin, two-dimensional, and beam-sensitive materials. This project combines differentiable multislice electron ptychography, sparse small-angle multi-tilt 4D-STEM measurements, virtual depth scanning, and a deep generative prior. The ptychographic forward model will constrain and verify generative completion of missing-wedge information, with a target depth resolution of 5 Å or better.

<h2 class="project-section-heading">Visual highlights</h2>

<div class="project-gallery">
  <div class="project-figure">
    {% include figure.liquid path="assets/img/projects/PTYKOR_main.PNG" class="img-fluid rounded z-depth-1" sizes="(min-width: 768px) 45vw, 95vw" alt="PTYKOR research objective, methods, agent-assisted workflow, and three-year roadmap" caption="PTYKOR combines multi-tilt 4D-STEM, multislice ptychographic reconstruction, virtual depth scanning, and physics-informed AI within a three-year research roadmap." %}
  </div>
  <div class="project-figure">
    {% include figure.liquid path="assets/img/projects/PTYKOR_preliminary_result.PNG" class="img-fluid rounded z-depth-1" sizes="(min-width: 768px) 45vw, 95vw" alt="Preliminary PTYKOR ePIE reconstructions of a twisted WSe2 bilayer and a gold nanoparticle" caption="Preliminary ePIE reconstructions of a twisted WSe2 bilayer and a gold nanoparticle demonstrate the current single-slice and multislice workflows based on classical ePIE algorithms." %}
  </div>
</div>
