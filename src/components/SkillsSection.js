import React from 'react';

function SkillsSection() {
  const skills = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Node.js',
    'Express.js',
    'MongoDB',
    'SQL',
  ];

  return (
    <section className="skills-section">
      <div className="container">
        <h2>Skills Possessed as a Web Developer</h2>
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default SkillsSection;
