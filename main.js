
    const projects = {
      project1: {
        title: "Medical RCM - AI-Powered Claim Denial Analysis",
        icon: "fas fa-file-medical-alt",
        deployLink: "",
        githubLink: "https://github.com/bhaumikmango/Medical-RCM-Revenue_Cycle_Management-Pipeline",
        overview: "A production-grade pipeline for automated healthcare insurance claim denial analysis. Combines a deterministic rule engine with locally hosted DeepSeek-R1:8B reasoning to identify denial root causes, assess recoverability, and surface batch-level recovery opportunities.",
        description: "Engineered a 5-Layer Hybrid Architecture to process 835 Remittance and 837 Claim data. The system utilizes a deterministic rule engine for factual checks (date math, modifiers) and routes complex cases to a CPU-pinned 4-bit quantized vector store (TurboStore) for historical pattern matching. DeepSeek-R1 handles the final interpretative reasoning, achieving 100% classification accuracy on evaluated datasets.",
        features: [
          "5-Layer Hybrid Model ensuring factual accuracy via deterministic pre-analysis before LLM evaluation",
          "Custom TurboStore vector search using 4-bit scalar quantization and memory-mapped indexing (np.memmap)",
          "DeepSeek-R1:8B integration via Ollama for local, privacy-preserving chain-of-thought reasoning",
          "KMeans clustering on denied claim feature vectors to surface systemic batch recovery opportunities",
          "FastAPI web dashboard and CLI for seamless processing and trend reporting"
        ],
        impact: [
          "Achieved 100% overall accuracy and 100% deterministic rule accuracy on ground-truth labeled claims",
          "Eliminated per-claim API costs and maintained strict PHI data privacy by hosting the LLM entirely locally",
          "Estimated throughput of ~246 claims/hour on consumer hardware, sufficient for a mid-size billing team's daily volume"
        ],
        techStack: ["Python", "FastAPI", "DeepSeek-R1", "Ollama", "SQLite", "NumPy", "Scikit-learn"]
      },
      project2: {
        title: "Quantized Legal Retrieval System (plAIntiff)",
        icon: "fas fa-scale-balanced",
        deployLink: "",
        githubLink: "https://github.com/bhaumikmango/plAIntiff-RAG",
        overview: "Privacy-preserving AI system for legal document intelligence — featuring custom 4-bit quantization (TurboQuant) reducing memory footprint by ~75%, with siloed multi-tenant architecture ensuring 100% data isolation.",
        description: "Engineered a production-grade legal document retrieval system combining quantization research, memory-mapped indexing, and retrieval-augmented generation (RAG). TurboQuant — a custom 4-bit quantization layer — reduces vector store memory by ~75%, while memory-mapped indexing enables search on datasets that exceed available RAM. Async concurrency control prevents GPU out-of-memory errors, and siloed multi-tenant architecture guarantees complete data isolation per client.",
        features: [
          "TurboQuant: custom 4-bit quantization reducing memory footprint by ~75%",
          "Memory-Mapped Indexing (np.memmap) enabling vector search on datasets exceeding RAM limits",
          "Async concurrency control on FastAPI endpoints preventing GPU OOM errors",
          "Siloed multi-tenant architecture ensuring 100% data isolation between clients",
          "RAG pipeline powered by Ollama (Llama 3) with Supabase vector storage"
        ],
        impact: [
          "~75% reduction in memory footprint via TurboQuant 4-bit quantization",
          "100% data isolation across tenants — production-ready privacy-preserving architecture",
          "Enabled search on legal corpora exceeding available RAM through memory-mapped indexing"
        ],
        techStack: ["Python", "FastAPI", "NumPy", "Ollama (Llama 3)", "Supabase", "CUDA"]
      },
      project3: {
        title: "Fire & Smoke Detection API",
        icon: "fas fa-fire",
        deployLink: "",
        githubLink: "https://github.com/bhaumikmango/Fire-Smoke-Detection-Using-Yolov8",
        overview: "Production-ready Computer Vision API for real-time Fire & Smoke Detection using YOLOv8, FastAPI, and NVIDIA CUDA acceleration — achieving ~92% detection accuracy with ~40% lower inference latency.",
        description: "Engineered a scalable, low-latency ML service for detecting fire and smoke in real-time video streams. Fine-tuned YOLOv8 models with curated datasets, optimized inference using ONNX and TensorRT FP16 quantization, and deployed a GPU-accelerated backend via multi-stage Docker architecture for production reliability.",
        features: [
          "Fine-tuned YOLOv8 with advanced augmentations (mosaic, mixup) — achieving ~92% detection accuracy",
          "GPU Acceleration via TensorRT FP16 quantization reducing inference latency by ~40%",
          "RESTful FastAPI endpoints for /predict and /health routes",
          "NVIDIA CUDA-enabled multi-stage Docker build for production deployment"
        ],
        impact: [
          "~92% detection accuracy in real-time fire and smoke monitoring scenarios",
          "~40% reduction in inference latency via GPU acceleration — enabling edge and cloud deployment",
          "Demonstrated full MLOps pipeline from data preprocessing to GPU-optimized inference"
        ],
        techStack: ["Python", "YOLOv8", "FastAPI", "PyTorch", "TensorRT", "ONNX", "CUDA", "Docker"]
      },
      project4: {
        title: "HR Attrition Prediction Platform",
        icon: "fas fa-chart-bar",
        deployLink: "https://hr-attrition-project-git-main-bhaumiks-projects-006c20ba.vercel.app/",
        githubLink: "https://github.com/bhaumikmango/HR-Attrition-Prediction",
        overview: "Enterprise-level full-stack ML application integrating predictive analytics, interactive dashboards, and real-time API-driven insights — improving executive decision visibility by ~30%.",
        description: "End-to-end HR analytics platform with a Flask backend and Random Forest model for employee attrition prediction. Includes EDA pipelines on 10K+ employee records, automated feature selection, GridSearchCV tuning, and Power BI dashboards. Deployed on Vercel with CI/CD for versioned deployment.",
        features: [
          "Full ML lifecycle: EDA on 10K+ records → Training → API Deployment → Dashboard Visualization",
          "GridSearchCV hyperparameter tuning for Random Forest Classifier",
          "Interactive Power BI dashboards improving executive decision visibility by ~30%",
          "Vercel deployment with CI/CD for versioned, production-ready hosting"
        ],
        impact: [
          "Interactive dashboard integration improving decision visibility for HR leadership by ~30%",
          "Enabled data-driven attrition risk identification and talent retention strategies"
        ],
        techStack: ["Python", "Flask", "Scikit-learn", "Pandas", "Power BI", "Vercel"]
      },
      project5: {
        title: "Intelligent Keyword Extraction Engine",
        icon: "fas fa-lightbulb",
        deployLink: "https://intelligentkeywordextractionenginen.vercel.app/",
        githubLink: "https://github.com/bhaumikmango/Keywords-Extraction-NLP",
        overview: "NLP-powered text mining system for automated keyword extraction and contextual phrase ranking — with REST API deployment achieving under 100ms inference latency.",
        description: "NLP pipeline utilizing TF-IDF, TextRank, and Transformer-based embeddings to extract high-value keywords from unstructured text. Integrated MLflow-based model versioning via Dagshub, deployed via Flask REST API with under 100ms inference latency, and hosted on Vercel and Render.",
        features: [
          "Keyword extraction via TF-IDF, TextRank, and Transformer-based embeddings",
          "MLflow-based model versioning tracked through Dagshub for experiment management",
          "REST API deployment achieving <100ms inference latency",
          "Deployed on Vercel and Render for scalable, production-grade availability"
        ],
        impact: [
          "REST API inference latency under 100ms — suitable for real-time content pipelines",
          "Improved information retrieval efficiency and SEO-driven content tagging"
        ],
        techStack: ["Python", "Scikit-learn", "NLTK", "MLflow", "Flask", "Vercel", "Render"]
      },
      project6: {
        title: "Spam Detection & Sentiment Classifier",
        icon: "fas fa-envelope-open-text",
        deployLink: "https://spam-sentinel-rho.vercel.app/",
        githubLink: "https://github.com/bhaumikmango/SpamEmailDetection",
        overview: "Email intelligence system integrating spam detection and sentiment analysis through ML pipelines, deployed via Flask API with a live web interface.",
        description: "Modular email classification pipeline powered by Naive Bayes spam detection and sentiment analysis modules. Detects spam, classifies message tone, and provides sentiment scores. Deployed through a lightweight Flask API and modern web UI, with containerization support via Docker.",
        features: [
          "Naive Bayes algorithm for accurate spam classification",
          "Sentiment analysis module for email tone and polarity detection",
          "Fast and responsive front-end UI for live testing and demonstration",
          "Deployed on Vercel with backend containerization support via Docker"
        ],
        impact: [
          "Increased email management efficiency by automating spam identification",
          "Demonstrated practical NLP pipeline integration in real-world communication systems"
        ],
        techStack: ["Python", "Scikit-learn", "NLTK", "Flask", "Pandas", "Docker", "Vercel"]
      }
    };

    /* ── Dynamic IST Year Logic ── */
    const yearSpan = document.getElementById('dynamic-year');
    if (yearSpan) {
      const istDate = new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata', year: 'numeric' });
      yearSpan.textContent = istDate;
    }

    /* ── Safe DOM builder helpers ── */
    function el(tag, className) {
      const e = document.createElement(tag);
      if (className) e.className = className;
      return e;
    }
    function textEl(tag, text, className) {
      const e = el(tag, className);
      e.textContent = text;
      return e;
    }
    function makeList(items) {
      const ul = el('ul');
      items.forEach(item => ul.appendChild(textEl('li', item)));
      return ul;
    }
    function safeLink(href, label, iconClass, extraClass) {
      const a = el('a', extraClass);
      /* Only allow http/https URLs to prevent javascript: injection */
      try {
        const url = new URL(href);
        if (url.protocol !== 'https:' && url.protocol !== 'http:') throw new Error('bad protocol');
        a.href = url.href;
      } catch (_) {
        a.removeAttribute('href');
      }
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      const icon = el('i', iconClass);
      a.appendChild(icon);
      a.appendChild(document.createTextNode(' ' + label));
      return a;
    }
    function modalSection(heading, content) {
      const section = el('div', 'modal-section');
      section.appendChild(textEl('h3', heading));
      section.appendChild(content);
      return section;
    }

    function openModal(id) {
      const p = projects[id];
      if (!p) return;                         /* guard against unknown ids */
      const overlay = document.getElementById('modalOverlay');
      const body = document.getElementById('modalBody');
      const titleBar = document.getElementById('modalTitleBar');

      titleBar.textContent = id + '.md';

      /* Clear previous content safely */
      body.textContent = '';

      /* Icon */
      const iconDiv = el('div', 'modal-proj-icon');
      const iconI = el('i', p.icon);           /* class from hardcoded data only */
      iconDiv.appendChild(iconI);
      body.appendChild(iconDiv);

      /* Title */
      body.appendChild(textEl('h2', p.title));

      /* Links */
      const linksDiv = el('div', 'modal-links');
      if (p.deployLink) {
        linksDiv.appendChild(safeLink(p.deployLink, 'Live Demo', 'fas fa-external-link-alt', 'modal-link'));
      }
      linksDiv.appendChild(safeLink(p.githubLink, 'Repository', 'fab fa-github', 'modal-link'));
      body.appendChild(linksDiv);

      /* Sections — all text set via textContent, never innerHTML */
      body.appendChild(modalSection('Overview',     textEl('p', p.overview)));
      body.appendChild(modalSection('Description',  textEl('p', p.description)));
      body.appendChild(modalSection('Key Features', makeList(p.features)));
      body.appendChild(modalSection('Impact',       makeList(p.impact)));

      /* Tech stack tags */
      const tagsDiv = el('div', 'modal-tags');
      p.techStack.forEach(t => tagsDiv.appendChild(textEl('span', t, 'modal-tag')));
      body.appendChild(modalSection('Tech Stack', tagsDiv));

      overlay.classList.add('open');
    }

    function closeModal() {
      document.getElementById('modalOverlay').classList.remove('open');
    }

    function closeModalOutside(e) {
      if (e.target === document.getElementById('modalOverlay')) {
        closeModal();
      }
    }

    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') closeModal();
    });

    /* ── Active nav highlight on scroll ── */
    const sections = document.querySelectorAll('section[id], div[id]');
    const navLinks = document.querySelectorAll('nav ul a');

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navLinks.forEach(link => {
            link.classList.toggle(
              'active',
              link.getAttribute('href') === '#' + entry.target.id
            );
          });
        }
      });
    }, { threshold: 0.3 });

    sections.forEach(s => observer.observe(s));
