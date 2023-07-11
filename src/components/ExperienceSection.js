import React from 'react';

function ExperienceSection() {
  const experiences = [
    'Web Design Fundamentals',
    'HTML and CSS Basics',
    'JavaScript Fundamentals',
    'React Framework',
    'Responsive Web Design',
    'User Interface Design',
  ];

  return (
    <section className="experience-section">
      <div className="container">
        <h2>Experience</h2>
        <ul>
          {experiences.map((experience, index) => (
            <li key={index}>{experience}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default ExperienceSection;
