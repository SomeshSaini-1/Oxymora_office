import React from "react";
import ProjectCard from "./ProjectCard";
import "../css/ProjectList.css";

const ProjectList = () => {
  const projectData = [
    {
      image: "https://via.placeholder.com/800x450?text=AI+Dashboard",
      title: "AI Dashboard",
      description: "An advanced dashboard powered by AI for analytics, visualizations and smart insights.",
    },
    {
      image: "https://via.placeholder.com/800x450?text=E-commerce+App",
      title: "E-commerce App",
      description: "A modern online store with cart, payments, and inventory management.",
    },
    {
      image: "https://via.placeholder.com/800x450?text=Portfolio+Website",
      title: "Portfolio Website",
      description: "A responsive portfolio to showcase projects and skills, built with performance in mind.",
    },
    {
      image: "https://via.placeholder.com/800x450?text=Blog+Platform",
      title: "Blog Platform",
      description: "A content-rich blogging platform with comments, tags and SEO optimizations.",
    },
  ];

  return (
    <div className="projects-page">
      <h1 className="projects-heading">My Projects</h1>
      <div className="projects-grid">
        {projectData.map((p, i) => (
          <ProjectCard
            key={i}
            image={p.image}
            title={p.title}
            description={p.description}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
