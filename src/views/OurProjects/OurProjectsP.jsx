import React from "react";
import styles from "./OurProjects.module.css";

import uno from '../../multimedia-source/projects/1.jpg'
import dos from '../../multimedia-source/projects/2.jpg'
import tres from '../../multimedia-source/projects/3.jpg'
import cuatro from '../../multimedia-source/projects/4.jpg'
import cinco from '../../multimedia-source/projects/5.jpg'
import seis from '../../multimedia-source/projects/6.jpg'

function OurProjectsP() {
  const projects = [
    {
      id: 1,
      title: "Luxury Condos in Downtown",
      description: "Experience the epitome of urban living with our luxurious condos located in the heart of downtown. These elegant and spacious units offer breathtaking views, high-end amenities, and a vibrant lifestyle.",
      image: uno
    },
    {
      id: 2,
      title: "Seaside Villas with Private Beach",
      description: "Indulge in the tranquility of coastal living with our exquisite seaside villas. Nestled along the pristine shoreline, these exclusive properties boast stunning architecture, private pools, and direct access to a secluded beach.",
      image: dos
    },
    {
      id: 3,
      title: "Family-Friendly Suburban Homes",
      description: "Discover the perfect home for your family in our family-friendly suburban community. These spacious homes offer modern comforts, safe neighborhoods, and access to top-rated schools and recreational facilities.",
      image: tres
    },
    {
      id: 4,
      title: "Golf Course Residences",
      description: "Embrace the golfing lifestyle with our premier golf course residences. These elegant homes combine luxurious living spaces with stunning views of manicured fairways, creating a haven for golf enthusiasts.",
      image: cuatro
    },
    {
      id: 5,
      title: "Urban Loft Apartments",
      description: "Experience loft living at its finest in our stylish urban loft apartments. Featuring open floor plans, industrial aesthetics, and contemporary finishes, these apartments offer a trendy and cosmopolitan living experience.",
      image: cinco
    },
    {
      id: 6,
      title: "Modern City Center Apartment",
      description: "Discover the epitome of modern city living in our stunning city center apartment. With sleek design, panoramic city views, and proximity to urban attractions, this apartment offers a luxurious and convenient lifestyle.",
      image: seis
    }
  ];

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Our Projects</h2>
      <div className={styles.projects}>
        {projects.map(project => (
          <div key={project.id} className={styles.project}>
            <img src={project.image} alt={project.title} className={styles.image} />
            <h3 className={styles.projectTitle}>{project.title}</h3>
            <p className={styles.projectDescription}>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurProjectsP;
