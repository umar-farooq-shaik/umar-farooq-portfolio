import React from "react";

const Portfolio = ({ data }) => {
  const projects = data?.projects || [];

  // Image styles for uniform size and visibility
  const imageStyle = {
    width: "100%",
    height: "200px",
    objectFit: "contain",
    backgroundColor: "#f0f0f0", // Light gray background only for images
  };

  // Grid container style (3 items per row on large screens)
  const gridContainerStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "40px", // Increased spacing between projects
    padding: "20px", // Padding around grid
  };

  // Individual project card style without background color
  const projectCardStyle = {
    padding: "15px", // Spacing inside the project card
    borderRadius: "10px", // Rounded corners for a modern look
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Subtle shadow effect
  };

  return (
    <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Works.</h1>

          <div id="portfolio-wrapper" style={gridContainerStyle}>
            {projects.map((project) => {
              const projectImage = `/images/${project.image}`;

              return (
                <div key={project.title} className="portfolio-item" style={projectCardStyle}>
                  <div className="item-wrap">
                    <a href={project.url} title={project.title}>
                      <img alt={project.title} src={projectImage} style={imageStyle} />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>{project.title}</h5>
                          <p>{project.category}</p>
                        </div>
                      </div>
                      <div className="link-icon">
                        <i className="fa fa-link"></i>
                      </div>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
