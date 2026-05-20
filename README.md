# 🌟 Production-Grade AI Engineering & Full-Stack Portfolio

Welcome to the central, production-grade repository for my personal developer portfolio and machine learning showcase. This repository contains the optimized source architecture for a highly responsive, developer-centric web interface that aggregates my professional background, technical core competencies, and operational deployments.

The application serves a dual purpose: it acts as a minimalist, high-performance digital gateway for technical hiring teams, and it implements a modular, configuration-driven JavaScript architecture to dynamically showcase complex project topologies without code duplication or hardcoded interface layers.

---

## 1. Architectural Philosophy & Design System

The core frontend structure is engineered strictly around performance optimization, high semantic fidelity, and low-latency interaction. Eschewing heavy client-side rendering engines or bulky UI libraries, the site leverages an asynchronous, vanilla design framework designed to score near-perfection on automated performance matrices.

### Core Architecture Pillars

* **Zero-Dependency Layout System:** Built entirely on a custom CSS Grid and Flexbox foundation. The interface isolates styling variables into global CSS custom properties, allowing instantaneous real-time rendering, minimal repaints, and an intuitive transition layout across all device viewports.
* **Centralized JavaScript Hydration Engine:** Project details, modals, metrics, and deep-dive technical summaries are entirely decoupled from the visual DOM markup. The system operates on a data-driven model architecture where a singular, deeply structured state dictionary dynamically handles state transitions, modal population, context switches, and source routing.
* **Strict Separation of Concerns:** Core components are explicitly separated into semantic HTML5 layers (`index.html`), a design-system-driven stylesheet, and a robust functional script layer. This ensures that scaling up the project registry or modifying professional context does not require deep refactoring of layout logic.

### Design Tokens & CSS Custom Variables

The interface implements a refined terminal-meets-enterprise aesthetic, operating within a high-contrast dark palette tailored for modern developers and engineering managers.

```css
:root {
  --ink: #0a0c0f;          /* Terminal Deep Black Base */
  --paper: #0d1117;        /* Background Content Cards */
  --amber: #e8a020;        /* Core Highlight / Primary Action Tint */
  --amber-dim: #7a5010;    /* Muted Structural Outlines */
  --amber-glow: rgba(232, 160, 32, 0.1); /* Translucent Component Backdrops */
  --text-main: #f0f4f8;    /* High-contrast Readable Typography */
  --text-muted: #8b949e;   /* Secondary Meta Information Labels */
}

```

---

## 2. Advanced Technical Stack Matrix

The portfolio acts as a direct showcase for a robust end-to-end engineering background, highlighting my proficiency across scalable backend systems, edge computer vision deployments, localized large language model reasoning pipelines, and complex analytical systems.

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                                   TECHNICAL CORE MATRIX                                │
├─────────────────────────┬──────────────────────────────┬───────────────────────────────┤
│    LANGUAGES & CORE     │     BACKEND & INFERENCE      │      DATA INFRASTRUCTURE      │
├─────────────────────────┼──────────────────────────────┼───────────────────────────────┤
│ • Python (Expert)       │ • FastAPI(Async Asynchronous)│ • PostgreSQL & MySQL          │
│ • Java (Enterprise)     │ • Flask & Spring Boot        │ • Supabase (Vector Store)     │
│ • SQL & NoSQL           │ • YOLOv8 / ONNX Pipelines    │ • Docker (Containerization)   │
│ • JavaScript / ES6+     │ • TensorRT FP16 Quantization │ • Google Cloud Platform (GCP) │
│ • TypeScript / C#       │ • Ollama Local LLM Runtimes  │ • GitHub Actions (CI/CD)      │
└─────────────────────────┴──────────────────────────────┴───────────────────────────────┘

```

---

## 3. High-Performance Project Portfolio (The Core 6 Deployments)

The repository's interactive grid features exactly six distinct engineering projects. Each item represents a solved technical challenge across enterprise backend development, advanced Machine Learning Operations (MLOps), natural language processing, and statistical analytics.

```
┌─────────────────────────────────────────────────────────────────────────┐
│                          PORTFOLIO GRID ARCHITECTURE                    │
├────────────────────────────────────┬────────────────────────────────────┤
│  01. Medical RCM Pipeline          │  02. plAIntiff Legal RAG System    │
│  (DeepSeek-R1 / Quantized Search)  │  (4-bit TurboQuant / CUDA Engine)  │
├────────────────────────────────────┼────────────────────────────────────┤
│  03. Fire & Smoke CV System        │  04. HR Attrition ML Platform      │
│  (YOLOv8 / TensorRT Optimization)  │ (Random Forest / Power BI Pipeline)│
├────────────────────────────────────┼────────────────────────────────────┤
│  05. Intelligent Keyword Engine    │  06. Spam Email Classifier         │
│  (TF-IDF / TextRank / MLflow)      │  (Naive Bayes / Modular Flask API) │
└────────────────────────────────────┴────────────────────────────────────┘

```

---

### 01. Medical RCM — AI-Powered Claim Denial Analysis

* **Role:** Lead AI Pipeline Engineer
* **Target Core Architecture:** Automated Healthcare Claim Denial Parsing & Remediation Tracking
* **GitHub Repository:** [Medical-RCM-Revenue_Cycle_Management-Pipeline](https://github.com/bhaumikmango/Medical-RCM-Revenue_Cycle_Management-Pipeline)
* **Deployment Status:** Local Production System (Offline / Zero-Cloud Data Transmission Layout)

#### Overview & Architecture

An enterprise-grade, localized hybrid AI pipeline built to automate healthcare insurance claim denial analysis from complex Electronic Data Interchange (EDI) 835 Remittance Advice and 837 Claim Transaction datasets. To protect sensitive Protected Health Information (PHI) and eliminate recurring cloud API operating expenditures, the entire inference layout runs locally on bare-metal architectures via a 5-layer pipeline topology.

```
 ┌────────────────┐      ┌────────────────┐      ┌──────────────────┐
 │ Ingestion Layer│ ---> │ Rule Engine    │ ---> │ TurboStore Match │
 │ (EDI 835/837)  │      │ (Deterministic)│      │ (4-bit Quant CPU)│
 └────────────────┘      └────────────────┘      └────────┬─────────┘
                                                          │
 ┌────────────────┐      ┌─────────────────┐              │
 │ Analytics UI & │ <--- │ DeepSeek-R1:8B  │ <────────────┘
 │ Reports Engine │      │(Local Inference)│
 └────────────────┘      └─────────────────┘

```

#### Deep Technical Accomplishments

* **5-Layer Hybrid Pipeline Logic:** Successfully decoupled evaluation tasks. Layer 1 ingests and validates transactional records; Layer 2 executes high-speed, deterministic Python-based date arithmetic and modifier sanity checks; Layer 3 queries historical patterns; Layer 4 processes unstructured exceptions; Layer 5 applies automated analytical aggregation.
* **Custom TurboStore Vector Layout:** Engineered a low-overhead, memory-mapped vector retrieval index utilizing 4-bit scalar quantization (`np.memmap`). By pinning the extraction embeddings (`snowflake-arctic-embed-xs`) strictly to the CPU, 100% of available system VRAM is preserved for local large language model context processing, entirely mitigating Out-Of-Memory (OOM) failures under high concurrency.
* **DeepSeek-R1 Integration:** Built a robust inference client utilizing Ollama to host a local `DeepSeek-R1:8B` parameter model. The model parses structured rule-engine flags along with few-shot historical patterns to isolate the technical root causes of denials, evaluate financial recoverability, and programmatically generate formal appeal documentation.
* **Conflict Resolution Guard:** Implemented a hardcoded verification layer that forces a deterministic override whenever the logical rule checks and the model's output match, resulting in 100% precision metrics across `not_recoverable` administrative test samples.

#### Tech Stack

* Python, FastAPI, DeepSeek-R1 (8B), Ollama, NumPy, Scikit-Learn, SQLite, Docker, Asyncio.

---

### 02. plAIntiff — Quantized Legal Retrieval System

* **Role:** Core Systems Architect
* **Target Core Architecture:** High-Efficiency Retrieval-Augmented Generation for Legal Discovery
* **GitHub Repository:** [plAIntiff-RAG](https://github.com/bhaumikmango/plAIntiff-RAG)
* **Deployment Status:** Production-Ready Offline Core Engine

#### Overview & Architecture

plAIntiff is an advanced, privacy-governed Retrieval-Augmented Generation (RAG) system engineered specifically for high-density document parsing and legal discovery. Operating under structural guidelines that prevent external network egress, the system ensures corporate vector spaces and multi-tenant indexes remain strictly contained on local physical drives.

#### Deep Technical Accomplishments

* **TurboQuant Implementation:** Developed a custom 4-bit tensor quantization engine that reduces structural legal embedding representations by approximately 75% in memory. This optimization enables real-time vector matches across extensive corporate data stores directly within localized RAM limitations.
* **Siloed Multi-Tenant Isolation:** Designed a dedicated multi-index runtime routing layer. Each organization or legal team maps to an entirely isolated, memory-mapped index block, ensuring absolute data partitioning across clients with no possibility of cross-tenant context leaks during high-throughput queries.
* **Async Concurrency Controls:** Built a robust asynchronous request queue within a FastAPI backend using explicit resource locking mechanisms. This architecture orchestrates continuous incoming query loads without destabilizing underlying GPU memory allocations during parallel LLM generation cycles.

#### Tech Stack

* Python, FastAPI, Llama 3, Ollama, Supabase, NumPy, CUDA Acceleration, Memory-Mapped IO.

---

### 03. Fire & Smoke Detection System

* **Role:** Computer Vision & MLOps Engineer
* **Target Core Architecture:** Automated Real-Time Industrial Hazard Monitoring Pipeline
* **GitHub Repository:** [Fire-Smoke-Detection-Using-Yolov8](https://github.com/bhaumikmango/Fire-Smoke-Detection-Using-Yolov8)
* **Deployment Status:** Edge Node Containerized Blueprint

#### Overview & Architecture

A high-throughput, mission-critical computer vision intelligence framework built to monitor and detect industrial hazards in real-time streaming video. The architecture targets edge deployment nodes, taking raw frame feeds, applying low-latency bounding box evaluations, and surfacing high-frequency analytics endpoints for physical alarm integration.

#### Deep Technical Accomplishments

* **YOLOv8 Optimization Strategy:** Fine-tuned a compact YOLOv8 object detection backbone using a custom imagery dataset treated with aggressive structural augmentations, including mosaic tiling, mixup operations, and color-space perturbations. This process achieved a ~92% detection accuracy across edge validation data.
* **TensorRT Quantization Workflow:** Compiled raw PyTorch weight matrices down through ONNX intermediate layers into optimized TensorRT FP16 execution engines. This optimization resulted in a ~40% latency reduction during inference passes, allowing real-time processing speeds of up to 45 frames per second on portable edge compute platforms.
* **Production Multi-Stage Containerization:** Crafted a multi-stage Docker configuration that isolates heavy build-time dependencies (such as CUDA compilation runtimes and C++ optimization packages) from the slimmed-down production image. This architecture minimizes deployment scale while ensuring consistent cross-platform execution.

#### Tech Stack

* Python, YOLOv8, PyTorch, TensorRT, ONNX, FastAPI, NVIDIA CUDA, Docker, Linux Core Shell.

---

### 04. HR Attrition Prediction Platform

* **Role:** Data Scientist
* **Target Core Architecture:** Enterprise Workforce Analytics & Proactive Attrition Modeling
* **GitHub Repository:** [HR-Attrition-Prediction](https://github.com/bhaumikmango/HR-Attrition-Prediction)
* **Live Production Link:** [Vercel Application Instance](https://hr-attrition-project-git-main-bhaumiks-projects-006c20ba.vercel.app/)

#### Overview & Architecture

An end-to-end, enterprise-scale predictive intelligence product that exposes employee retention trends through statistical modelling. The application couples a heavy scikit-learn analytics pipeline with a responsive web front-end and commercial business intelligence reporting layers, transforming raw organizational vectors into clear, actionable executive insights.

#### Deep Technical Accomplishments

* **Predictive Optimization Design:** Conducted extensive Exploratory Data Analysis (EDA) on an enterprise dataset tracking over 10,000 distinct employee lifecycles. Implemented structured feature transformations, handling categorical cardinality via target encoding and optimizing class balances through systematic SMOTE algorithms before passing arrays to a Random Forest Classifier.
* **Hyperparameter Search Engineering:** Configured cross-validated GridSearch execution patterns to fine-tune tree depth, structural splitting criteria, and estimator density. This rigor minimized false-negative metrics to prevent high-value employee departures from going unflagged.
* **Power BI Data Layer Integration:** Formulated an integrated analytical pipeline that pumps real-time API model inferences into interactive Power BI dashboard visualizers, improving executive decision visibility metrics by approximately 30%.

#### Tech Stack

* Python, Flask, Scikit-Learn, Pandas, NumPy, Power BI, Vercel Core Hosting, Git CI/CD.

---

### 05. Intelligent Keyword Extraction Engine

* **Role:** NLP Systems Developer
* **Target Core Architecture:** Automated High-Velocity Document Indexing & Semantics Parsing
* **GitHub Repository:** [Keywords-Extraction-NLP](https://github.com/bhaumikmango/Keywords-Extraction-NLP)
* **Live Production Link:** [Vercel Application Instance](https://intelligentkeywordextractionenginen.vercel.app/)

#### Overview & Architecture

A high-velocity, modular Natural Language Processing web service designed to instantly mine, prioritize, and rank high-value phrase configurations from unformatted corporate document inputs. The platform serves as a backend microservice for content indexing pipelines, search engine optimization automation, and semantic summarizers.

#### Deep Technical Accomplishments

* **Hybrid Algorithmic Matrix:** Built a multi-tier extraction layout that synthesizes statistical relevance factors (TF-IDF Matrices), graph-based centrality indexes (TextRank implementations), and deep semantic spatial context models using transformer-based phrase embeddings.
* **MLflow MLOps Pipeline Integration:** Wired comprehensive experiment tracking and lifecycle versioning frameworks into the training architecture via Dagshub data bridges. This records evaluation parameters, vocabulary sizing metrics, and token boundaries for continuous model iteration.
* **Low-Latency Production Inferences:** Wrapped underlying models within optimized, concurrent web workers, driving average response times below 100ms on serverless production infrastructure.

#### Tech Stack

* Python, Flask, SpaCy, NLTK, LangChain, MLflow, Dagshub, Scikit-Learn, Vercel, Render.

---

### 06. Spam Detection & Sentiment Classifier

* **Role:** Backend Developer & Data Engineer
* **Target Core Architecture:** Intelligent Communications Filtering & Tone Adjudication Backend
* **GitHub Repository:** [SpamEmailDetection](https://github.com/bhaumikmango/SpamEmailDetection)
* **Live Production Link:** [Vercel Application Instance](https://spam-sentinel-rho.vercel.app/)

#### Overview & Architecture

An integrated communication filtering platform designed to evaluate incoming text messages for administrative safety and emotional tone. The system functions as a modular API layer that intercept incoming webhooks or user text submissions to dynamically block messaging threats while capturing contextual sentiment insights.

#### Deep Technical Accomplishments

* **Text Transformation Workflows:** Constructed clean textual data pipelines utilizing NLTK wrappers. The ingest flow runs regular-expression parsing, drops irrelevant noise characters, standardizes case features, tokenizes string records, filters out heavy stop-word arrays, and performs morphological lemmatization.
* **Naive Bayes Classification Pipeline:** Trained and fine-tuned a Multinomial Naive Bayes model tailored for high-accuracy text sorting across skewed spam datasets. This architecture minimizes false-positive misclassifications to protect legitimate communications.
* **Dual-Objective Routing API:** Integrated a complementary tone adjudication engine alongside the core spam validator. This setup evaluates and outputs multi-class emotional polarity distributions for every inbound string payload.

#### Tech Stack

* Python, Flask, Scikit-Learn, NLTK, Pandas, HTML5 Canvas Elements, Docker Engine, Vercel Core.

---

## 4. In-Depth Frontend Hydration Architecture

The platform uses a modular, configuration-driven JavaScript design pattern to manage UI rendering. This approach decouples layout structures from presentation content. Project records are mapped inside a centralized memory block, allowing the application to scale dynamically without bloating the DOM with repetitive code components.

```
   [ User Click Event ]
            │
            ▼
┌───────────────────────┐
│ openModal(projectId)  │
└───────────┬───────────┘
            │  (Lookup Key)
            ▼
┌───────────────────────┐
│ Projects State Map    │ ──> [ JSON Data Fields ]
└───────────┬───────────┘     │ - Title & Overview
            │                 │ - Feature Arrays
            │                 │ - Impact Metrics
            ▼                 │ - Repository Links
┌───────────────────────┐     │ - Tech Stack Tags
│ Dynamic DOM Injection │ <───┘
└───────────┬───────────┘
            │  (Hydrates Element Nodes)
            ▼
┌───────────────────────┐
│ Modal Interface Opens │
└───────────────────────┘

```

### Core Hydration Engine Implementation

The script engine processes project states using a structured state-mapping architecture, detailed below:

```javascript
// Global immutable data configuration structure driving layout viewports
const projects = {
  project1: {
    title: "Medical RCM - AI-Powered Claim Denial Analysis",
    icon: "fas fa-file-medical-alt",
    deployLink: "", // Left empty to dynamically suppress cloud launch controls
    githubLink: "https://github.com/bhaumikmango/Medical-RCM-Revenue_Cycle_Management-Pipeline",
    overview: "A production-grade pipeline for automated healthcare insurance claim denial analysis...",
    description: "Engineered a 5-Layer Hybrid Architecture to process 835 Remittance and 837 Claim data...",
    features: [
      "5-Layer Hybrid Model ensuring factual accuracy via deterministic pre-analysis",
      "Custom TurboStore vector search using 4-bit scalar quantization and memory-mapped indexing",
      "DeepSeek-R1:8B integration via Ollama for local, privacy-preserving reasoning"
    ],
    impact: [
      "Achieved 100% overall accuracy on evaluated datasets",
      "Eliminated per-claim cloud API operational expenditures entirely"
    ],
    techStack: ["Python", "FastAPI", "DeepSeek-R1", "Ollama", "SQLite", "NumPy"]
  },
  // Additional projects follow this schema exactly...
};

/**
 * Controller function to populate and display the modal view container
 * @param {string} id - The lookup key corresponding to the target project block
 */
function openModal(id) {
  const p = projects[id];
  if (!p) return;

  // Locate, clear, and hydrate DOM elements dynamically
  const modal = document.getElementById('projectModal');
  document.getElementById('modalTitle').textContent = p.title;
  document.getElementById('modalOverview').textContent = p.overview;
  
  // Conditionally process deployment controls based on link presence
  const launchBtn = document.getElementById('modalLaunchLink');
  if (p.deployLink === "") {
    launchBtn.style.display = 'none';
  } else {
    launchBtn.style.display = 'inline-flex';
    launchBtn.href = p.deployLink;
  }
  
  // Render technical arrays down to isolated lists smoothly
  hydrateListContainer('modalFeaturesList', p.features);
  hydrateListContainer('modalImpactList', p.impact);
  
  // Open structural overlays via layout class injections
  document.getElementById('modalOverlay').classList.add('open');
}

```

---

## 5. Repository Directory & System Mapping

This map details the workspace layout and structural breakdown of the portfolio codebase:

```
Portfolio_BY/
│
├── .github/
│   └── workflows/
│       └── deployment.yml       # CI/CD deployment runner definitions
│
├── assets/
│   ├── brand/
│   │   └── icon.svg             # Vector-scaled identity graphic
│   └── styles/
│       └── custom-engine.css    # Layout properties and component styles
│
├── data/
│   └── states/
│       └── project-matrix.js    # Decoupled JSON data mapping
│
├── index.html                   # Main semantic markup document
├── README.md                    # Comprehensive technical documentation
└── requirements.txt             # Dependency lists for automated builders

```

---

## 6. Local Development, Verification, & Deployment Framework

Follow these instructions to clone, audit, run, and scale this portfolio ecosystem locally:

### 1. Verification of Environmental Prerequisites

Ensure that a modern Git installation tool suite along with an active HTTP service rendering daemon (such as Python 3.x, Node.js tools, or Live Server runtimes) are available on the terminal path.

### 2. Code Acquisition and Execution Layout

Run the following commands to initialize the repository locally:

```bash
# Clone the target repository configuration smoothly
git clone https://github.com/bhaumikmango/Portfolio_BY.git

# Move execution context into the base directory
cd Portfolio_BY

# Fire up a localized server runner to review without cross-origin file issues
# For Python 3.x installations:
python -m http.server 8080 --bind 127.0.0.1

```

Once initialized, direct any standard web browser viewport toward the local host address: `http://127.0.0.1:8080`.

### 3. Dynamic Indian Standard Time (IST) Chronometer Configuration

To prevent hardcoded date strings from falling out of sync over time, the footer elements and document references utilize an automatic localized chronometer engine. This ensures the technical timeline remains synchronized with real-time calendars without manual updates.

```javascript
(function synchronizationChronometer() {
  document.addEventListener("DOMContentLoaded", () => {
    const timeSpan = document.getElementById("dynamic-year");
    if (timeSpan) {
      // Force calculation across explicit Indian Standard Time zone offsets
      const options = { timeZone: "Asia/Kolkata", year: "numeric" };
      const currentYearIST = new Intl.DateTimeFormat("en-US", options).format(new Date());
      timeSpan.textContent = currentYearIST;
    }
  });
})();

```

### 4. Production Release Code Verification Checklist

Before committing layout additions or code changes to the upstream master branch, execute the following audit routines:

* **Lighthouse Optimization Checks:** Verify that performance, accessibility, best practices, and SEO scores evaluate above the 95% threshold. Ensure structural media components carry native dimension definitions to prevent layout shifts.
* **Dynamic Links Audit:** Confirm all target buttons correctly handle context switching. Ensure that projects without deployment instances (e.g., Medical RCM, plAIntiff RAG, and Fire & Smoke Detection) are assigned empty strings (`""`) in the JavaScript state matrix to programmatically toggle interaction controls.
* **W3C Markup Validation:** Ensure `index.html` strictly adheres to HTML5 specifications, ensuring all structural elements are properly closed and tag topologies remain syntactically sound.
* **Cross-Browser Responsive Sizing Audits:** Validate flex layouts across standard target device breakpoints (320px mobile viewports up to 3840px 4K monitor screens) to guarantee the design system remains responsive and visually consistent.

---

## 7. License & Usage Permissions

This repository is distributed under the standard **MIT License**. Developers, students, and engineers are free to clone, fork, modify, and utilize this template architecture for personal or commercial portfolio showcases, provided proper attribution to the original author is maintained.

```
Copyright (c) 2026 Bhaumik Yadav

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

```