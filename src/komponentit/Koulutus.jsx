import React from 'react';

// Yksittäisen koulutuksen komponentti
function EducationItem({ school, degree, period }) {
  return (
    <li>
      <strong>{school}</strong><br />
      {degree}<br />
      {period}
    </li>
  );
}

// Koulutusosio
function Education() {
  const educationData = [
    {
      id: 1,
      school: 'Ammattiopisto OSAO',
      degree: 'Ohjelmistokehittäjän ammattitutkinto',
      period: '2024 –'
    },
    {
      id: 2,
      school: 'Ammattiopisto Luovi',
      degree: 'Virastomestarin ammattitutkinto',
      period: '2014 – 2015'
    }
  ];

  return (
    <>
      <h2>Koulutus</h2>
      <ul>
        {educationData.map((edu) => (
          <EducationItem 
            key={edu.id} 
            school={edu.school} 
            degree={edu.degree} 
            period={edu.period} 
          />
        ))}
      </ul>
    </>
  );
}

export default Education;