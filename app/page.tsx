
const projects = [
  {
    number: "01",
    title: "Recommendation System Using FFM",
    category: "MACHINE LEARNING",
    type: "Internship Project",
    description:
      "A personalized recommendation system trained on approximately 2 million user click-log records, comparing Field-Aware Factorization Machines with traditional Factorization Machines.",
    image: "/project_1.jpg",
    imageAlt: "Machine learning recommendation system project",
    link: "",
    technologies: [
      "Python",
      "Field-Aware Factorization Machine",
      "Factorization Machine",
      "Optuna",
      "MLflow",
    ],
    highlights: [
      "Trained an FFM model on approximately 2 million user click-log records for personalized item recommendations.",
      "Achieved a test AUC of 0.96 through hyperparameter optimization with Optuna.",
      "Compared FFM and FM models, evaluating precision, recall, and inference latency.",
      "Engineered region- and time-aware features and tracked experiments using MLflow.",
      "Contributed evaluation metrics and analysis to inform production model selection.",
    ],
    impact:
      "Provided comparative model performance insights to support recommendation architecture decisions.",
  },

  {
    number: "02",
    title: "Categorical Data Analytics Platform",
    category: "DATA SCIENCE / FULL-STACK",
    type: "Internship Project",
    description:
      "An end-to-end analytics platform using Multiple Correspondence Analysis (MCA) to uncover patterns and relationships in large-scale categorical data.",
    image: "/project_1.jpg",
    imageAlt: "Categorical data analytics and visualization platform",
    link: "",
    technologies: [
      "Python",
      "Multiple Correspondence Analysis",
      "FastAPI",
      "Svelte",
      "Docker Compose",
      "Nginx",
    ],
    highlights: [
      "Developed an analytics pipeline for approximately 2 million rows and 5 categorical variables collected over one month.",
      "Applied MCA to identify relationships among nominal variables and increased variance explained from 33% to 50% through enriched data experiments.",
      "Generated 7 bar charts and 1 interactive MCA scatterplot to communicate operational trends.",
      "Integrated analytical outputs with a Svelte frontend through FastAPI.",
      "Containerized and deployed the application using Docker Compose and Nginx.",
    ],
    impact:
      "Enabled stakeholders to explore categorical data visually and make more informed operational decisions.",
  },

  {
    number: "03",
    title: "AI-Powered Document Extraction",
    category: "GENERATIVE AI / BACKEND",
    type: "AI Engineering Project",
    description:
      "An intelligent document processing pipeline that transforms unstructured PDF content into structured JSON using Google's Gemini AI.",
    image: "/project_1.jpg",
    imageAlt: "AI-powered document processing and extraction project",
    link: "https://github.com/dhakalasim/DataExtraction",
    technologies: [
      "Python",
      "Google Gemini 1.5 Flash",
      "PyMuPDF",
      "Flask",
      "MongoDB",
      "REST APIs",
    ],
    highlights: [
      "Built a PDF processing pipeline to extract text from documents using PyMuPDF.",
      "Used the Gemini 1.5 Flash API to transform unstructured document text into structured JSON.",
      "Stored extracted JSON locally and in MongoDB for retrieval and further analysis.",
      "Developed Flask APIs to serve original PDF files and their corresponding structured data.",
    ],
    impact:
      "Streamlined document data extraction and made structured information accessible to downstream applications.",
  },

  {
    number: "04",
    title: "Emotion-Aware AI Coach",
    category: "MULTIMODAL AI / HEALTHCARE",
    type: "Final Year Project",
    description:
      "A multimodal healthcare guidance system combining physiological indicators, lifestyle data, and emotion detection to personalize fitness and nutrition recommendations.",
    image: "/project_1.jpg",
    imageAlt: "Emotion-aware AI coach for personalized health and fitness",
    link: "",
    technologies: [
      "Python",
      "Hugging Face",
      "Emotion Detection",
      "FER2013",
      "GoLang Dataset",
      "Recommendation Systems",
      "Data Visualization",
    ],
    highlights: [
      "Designed a multimodal system integrating physiological data, lifestyle metrics, and emotional state.",
      "Evaluated pretrained Hugging Face emotion detection models using FER2013 and GoLang datasets.",
      "Developed rule-based recommendation logic to generate personalized workout and diet plans.",
      "Used emotion as a contextual factor alongside physiological indicators to adapt recommendations.",
      "Generated analytical reports and visualizations to support healthcare-related decisions.",
    ],
    impact:
      "Combined emotional context and physiological information to support more personalized wellness recommendations.",
  },
];


export default function Home() {
  return (
    <main className="container">
      <header className="hero">
        <div className="hero-top">
          <a className="hero-logo" href="#" aria-label="Home">
            PORTFOLIO<span>®</span>
          </a>
          <span className="hero-index">
            INDEPENDENT CREATIVE — 2026
          </span>
        </div>

        <div className="hero-content">
          <p className="eyebrow">
            <span className="status-dot" />
            SOFTWARE ENGINEEER AND FULL STACK
          </p>

          <h1 className="hero-title">
            <span className="hero-title-line">Hi, I’m</span>
            <span className="hero-title-outline">
              Ayam Sharma Dhakal<span className="hero-period">.</span>
            </span>
          </h1>

          <div className="hero-bottom">
            <p className="intro">
              I create thoughtful digital experiences
              <br className="desktop-break" />
              where design meets functionality.
            </p>

            <a className="button" href="mailto:ayamdhakal@gmail.com">
              Let’s work together <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <div className="hero-footer">
          <span>CREATIVE DEVELOPMENT / DIGITAL DESIGN</span>
          <a href="#projects-heading">
            SCROLL TO EXPLORE <span aria-hidden="true">↓</span>
          </a>
        </div>
      </header>

      {/* Selected Projects */}
      <section
        className="projects-section"
        aria-labelledby="projects-heading"
      >
        <div className="projects-inner">
          <div className="projects-header">
            <div>
              <p className="projects-eyebrow">
                <span className="status-dot" />
                A SELECTION OF MY WORK
              </p>

              <h2 id="projects-heading" className="projects-title">
                My
                <br />
                <span>Projects.</span>
              </h2>
            </div>

            <p className="projects-description">
              A collection of digital experiences built with
              thoughtful design, purposeful details, and clean code.
            </p>
          </div>


          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-card-content">
                  <div className="project-card-top">
                    <span className="project-number">
                      PROJECT / {project.number}
                    </span>

                    <span className="project-type">
                      {project.type}
                    </span>
                  </div>

                  <div className="project-card-heading">
                    <div>
                      <p className="project-category">
                        {project.category}
                      </p>

                      <h3>{project.title}</h3>
                    </div>

                    {project.link ? (
                      <a
                        className="project-arrow"
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.title} repository`}
                      >
                        ↗
                      </a>
                    ) : (
                      <span
                        className="project-arrow project-arrow-disabled"
                        aria-hidden="true"
                      >
                        ↗
                      </span>
                    )}
                  </div>

                  <p className="project-description">
                    {project.description}
                  </p>

                  <div className="project-tags">
                    {project.technologies.slice(0, 3).map((technology) => (
                      <span className="project-tag" key={technology}>
                        {technology}
                      </span>
                    ))}

                    {project.technologies.length > 3 && (
                      <span className="project-tag project-tag-more">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  {project.link && (
                    <a
                      className="project-text-link"
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      VIEW PROJECT <span aria-hidden="true">↗</span>
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>



          <div className="projects-bottom">
            <span>DESIGN WITH INTENTION. BUILD WITH PURPOSE.</span>
            <a href="mailto:ayamdhakal@gmail.com">
              HAVE A PROJECT IN MIND? <span>LET’S TALK ↗</span>
            </a>
          </div>
        </div>
      </section>


      {/* About */}
      <section className="about-section" aria-labelledby="about-heading">
        <div className="about-inner">
          <div className="about-topline">
            <p className="about-eyebrow">
              <span className="about-dot" />
              A LITTLE ABOUT ME
            </p>
            <span className="about-index">01 — WHO I AM</span>
          </div>

          <div className="about-layout">
            <div className="about-heading-wrap">
              <h2 id="about-heading" className="about-title">
                Beyond
                <br />
                the <span>code.</span>
              </h2>

              <p className="about-side-note">
                CURIOUS MIND.
                <br />
                CREATIVE THINKING.
                <br />
                PURPOSEFUL BUILDING.
              </p>
            </div>

            <div className="about-content">
              <p className="about-lead">
                Hey, I’m Ayam — a developer with a passion for turning
                complex problems into thoughtful digital experiences.
              </p>

              <p className="about-description">
                I enjoy working at the intersection of software engineering,
                machine learning, and data-driven problem solving. From
                building intelligent systems to creating useful web
                applications, I care about making technology practical,
                accessible, and meaningful.
              </p>

              <p className="about-description">
                I’m always exploring new tools, learning new ideas, and
                looking for opportunities to build something that makes
                a difference.
              </p>

            </div>
          </div>

          <div className="about-divider" />

          <div className="about-details">
            <div className="about-detail-intro">
              <p className="about-detail-label">02 / MY TOOLKIT</p>
              <h3>
                Things I
                <br />
                work with.
              </h3>
            </div>

            <div className="skills-panel">
              <div className="skill-group">
                <span className="skill-number">01</span>
                <div>
                  <h4>Programming</h4>
                  <p>Python · JavaScript · TypeScript · SQL</p>
                </div>
              </div>

              <div className="skill-group">
                <span className="skill-number">02</span>
                <div>
                  <h4>AI & Data</h4>
                  <p>
                    Machine Learning · NLP · Data Analysis ·
                    Recommendation Systems
                  </p>
                </div>
              </div>

              <div className="skill-group">
                <span className="skill-number">03</span>
                <div>
                  <h4>Web Development</h4>
                  <p>React · Next.js · FastAPI · Flask · REST APIs</p>
                </div>
              </div>

              <div className="skill-group">
                <span className="skill-number">04</span>
                <div>
                  <h4>Tools & Infrastructure</h4>
                  <p>Git · Docker · MongoDB · MLflow · Linux</p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-bottom-note">
            <span>ALWAYS LEARNING, ALWAYS BUILDING.</span>
          </div>
        </div>
      </section>



      <footer>
        <a href="https://github.com/YamaSD">GitHub</a>
        <span>·</span>
        <a href="https://www.linkedin.com/in/ayam-s-786875367">LinkedIn</a>
        <span>·</span>
        <a href="mailto:ayamdhakal@gmail.com">Email</a>
      </footer>
    </main>
  );
}
