import React from "react";
import uno from '../../multimedia-source/projects/1.jpg';
import dos from '../../multimedia-source/projects/2.jpg';
import tres from '../../multimedia-source/projects/3.jpg';
import cuatro from '../../multimedia-source/projects/4.jpg';
import cinco from '../../multimedia-source/projects/5.jpg';
import seis from '../../multimedia-source/projects/6.jpg';

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
    <div className="max-w-800px mx-auto p-20">
      <h2 className="text-24px font-bold mb-20">Our Projects</h2>
      <div className="grid grid-cols-2 gap-20">
        {projects.map(project => (
          <div key={project.id} className="bg-f5f5f5 p-20 rounded">
            <img src={project.image} alt={project.title} className="w-full h-auto rounded mb-10" />
            <h3 className="text-18px font-bold mb-10">{project.title}</h3>
            <p className="text-14px leading-1.5 text-justify">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurProjectsP;
