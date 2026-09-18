import "./App.css";

function App() {
  return (
    <div className="portfolio">

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">Golla Kiran Kumar

        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#education">Education</a>

          <a href="#projects">Projects</a>
          <a href="#certifications">Certifications</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section id="home" className="hero">
        <div className="hero-content">
<p className="hero-small">OPEN TO DATA ANALYST OPPORTUNITIES</p>
          <h1>Golla Kiran Kumar</h1>

         <h2>
  Data Analyst <span>|</span> Python • SQL • Power BI
</h2>

          <p className="hero-description">
            Computer Science graduate focused on transforming data into
            meaningful insights using Python, SQL, Excel, and Power BI.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn primary-btn">
              View Projects
            </a>

            <a href="/resume.pdf" className="btn secondary-btn" download>
              Download Resume
            </a>
          </div>

          <div className="social-links">
            <a
              href="https://github.com/kiranyadav18"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/kirankumargolla"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section">
        <p className="section-label">ABOUT ME</p>
        <h2 className="section-title">Turning Data Into Insights</h2>

        <div className="about-content">
          <p>
            I am a Computer Science and Data Science graduate with a strong
            interest in Data Analytics. I enjoy working with datasets,
            identifying patterns, and converting raw data into meaningful
            insights.
          </p>

          <p>
            I have hands-on experience with Python, SQL, Pandas, NumPy,
            Excel, Power BI, and MySQL through academic and personal projects.
            I am currently focused on building practical data analytics
            solutions and developing my skills as an entry-level Data Analyst.
          </p>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="section">
        <p className="section-label">MY SKILLS</p>
        <h2 className="section-title">Technical Skills</h2>

        <div className="skills-grid">

          <div className="skill-card">
            <h3>Programming</h3>
            <p>Python</p>
            <p>SQL</p>
            <p>Java</p>
          </div>

          <div className="skill-card">
            <h3>Data Analysis</h3>
            <p>Pandas</p>
            <p>NumPy</p>
            <p>Data Cleaning</p>
            <p>EDA</p>
          </div>

          <div className="skill-card">
            <h3>Visualization</h3>
            <p>Power BI</p>
            <p>Microsoft Excel</p>
            <p>Excel Charts</p>
          </div>

          <div className="skill-card">
            <h3>Statistics</h3>
            <p>Descriptive Statistics</p>
            <p>Probability</p>
            <p>Correlation Analysis</p>
            <p>Hypothesis Testing</p>
          </div>

          <div className="skill-card">
            <h3>Database</h3>
            <p>MySQL</p>
            <p>DBMS</p>
            <p>SQL Queries</p>
            <p>Aggregate Functions</p>
          </div>

          <div className="skill-card">
            <h3>Tools</h3>
            <p>Jupyter Notebook</p>
            <p>Git & GitHub</p>
            <p>VS Code</p>
            <p>MySQL Workbench</p>
          </div>

        </div>
      </section>

            {/* EDUCATION */}
      <section id="education" className="section">
        <p className="section-label">MY EDUCATION</p>
        <h2 className="section-title">Education</h2>

        <div className="education-container">

          {/* B.TECH */}
          <div className="education-card">
            <div className="education-year">
              2023 — 2026
            </div>

            <div className="education-details">
              <h3>B.Tech in Computer Science and Data Science</h3>

              <p className="education-institute">
                Vidya Jyothi Institute of Technology
              </p>

              <p className="education-grade">
                GPA: <strong>8.1 / 10.0</strong>
              </p>
            </div>
          </div>

          {/* DIPLOMA */}
          <div className="education-card">
            <div className="education-year">
              2020 — 2023
            </div>

            <div className="education-details">
              <h3>Diploma in Computer Science Engineering</h3>

              <p className="education-institute">
                St. Mary's Group Of Institutions
              </p>

              <p className="education-grade">
                GPA: <strong>7.0 / 10.0</strong>
              </p>
            </div>
          </div>

          {/* SCHOOL */}
          <div className="education-card">
            <div className="education-year">
              2019 — 2020
            </div>

            <div className="education-details">
              <h3>Secondary School</h3>

              <p className="education-institute">
                MJPTBCW Residential School
              </p>

              <p className="education-grade">
                GPA: <strong>10 / 10</strong>
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section">
        <p className="section-label">MY WORK</p>
        <h2 className="section-title">Projects</h2>

        <div className="projects-grid">

          {/* PROJECT 1 */}
          <div className="project-card featured-project">
            <div className="project-number">01</div>

            <h3>E-Commerce Data Analytics</h3>

            <p className="project-tools">
              Python • SQL • Excel • Power BI
            </p>

            <p>
              Analyzed e-commerce sales data to identify sales trends,
              customer behavior, product performance, and revenue patterns.
            </p>

            <ul>
              <li>Cleaned and transformed datasets using Python, Pandas and NumPy.</li>
              <li>Performed exploratory data analysis to identify trends and outliers.</li>
              <li>Used SQL joins, filtering and aggregations for analysis.</li>
              <li>Created interactive Power BI dashboards and KPI visualizations.</li>
            </ul>

            <a
              href="https://github.com/kiranyadav18"
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              View on GitHub →
            </a>
          </div>

          {/* PROJECT 2 */}
          <div className="project-card">
            <div className="project-number">02</div>

            <h3>Fake News Detection</h3>

            <p className="project-tools">
              Python • Machine Learning • NLP
            </p>

            <p>
              Developed a machine learning application for classifying news
              articles as real or fake using Natural Language Processing.
            </p>

            <ul>
              <li>Implemented TF-IDF vectorization.</li>
              <li>Used Logistic Regression for classification.</li>
              <li>Achieved 92% accuracy on the test dataset.</li>
              <li>Published research work in IJETMS, 2026.</li>
            </ul>

            <a
              href="https://github.com/kiranyadav18"
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              View on GitHub →
            </a>
          </div>

          {/* PROJECT 3 */}
          <div className="project-card">
            <div className="project-number">03</div>

            <h3>Job Tracker</h3>

            <p className="project-tools">
              Java • Spring Boot • React • MySQL
            </p>

            <p>
              Developed a full-stack web application to manage and track job
              applications using a REST-based backend and React frontend.
            </p>

            <ul>
              <li>Implemented RESTful APIs and CRUD operations.</li>
              <li>Integrated MySQL database using Spring Boot and JDBC.</li>
              <li>Added an AI-powered chatbot.</li>
              <li>Tested APIs using Postman.</li>
            </ul>

            <a
              href="https://github.com/kiranyadav18"
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              View on GitHub →
            </a>
          </div>

        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section id="certifications" className="section">
        <p className="section-label">CERTIFICATIONS</p>
        <h2 className="section-title">Certifications</h2>

        <div className="certifications">

          <div className="certificate">
            <h3>Data Analytics Essentials</h3>
            <p>Cisco Networking Academy</p>
          </div>

          <div className="certificate">
            <h3>Programming Essentials in Python</h3>
            <p>Cisco Networking Academy</p>
          </div>

          <div className="certificate">
            <h3>AWS Cloud Practitioner Essentials</h3>
            <p>Amazon Web Services</p>
          </div>

        </div>
      </section>
      

      {/* CONTACT */}
      <section id="contact" className="contact-section">
        <p className="section-label">GET IN TOUCH</p>

        <h2>Let's Connect</h2>

        <p>
          I am currently looking for entry-level opportunities in Data
          Analytics and Data Analysis.
        </p>

        <a
          href="mailto:kirangolla897@gmail.com"
          className="btn primary-btn"
        >
          Contact Me
        </a>

        <div className="contact-links">
          <a href="mailto:kirangolla897@gmail.com">
            kirangolla897@gmail.com
          </a>

          <a
            href="https://www.linkedin.com/in/kirankumargolla"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/kiranyadav18"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <p>© 2026 Golla Kiran Kumar. All rights reserved.</p>
      </footer>

    </div>
  );
}

export default App;