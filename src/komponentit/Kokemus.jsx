import React from 'react';

// Yksittäisen työpaikan komponentti
function ExperienceItem({ workplace, title, period, description }) {
  return (
    <li>
      <strong>{workplace}</strong><br />
      {title}<br />
      {period}
      <p>{description}</p>
    </li>
  );
}

// Työkokemusosio
function Experience() {
  const experiences = [
    {
      id: 1,
      workplace: 'Tuki ry',
      title: 'Vihertyöntekijä',
      period: '05/2013 – 08/2013',
      description: 'Pihakivetysten asentaminen ja kukkapenkkien rakentaminen.'
    },
    {
      id: 2,
      workplace: 'Tietomaa',
      title: 'Huoltomies',
      period: '01/2012 – 04/2012',
      description: 'ATK-tehtävät, laitehuolto ja kerrosvalvonta.'
    },
    {
      id: 3,
      workplace: 'Nuorisoasiainkeskus Willamiina',
      title: 'Toimistotyöntekijä',
      period: '01/2010 – 04/2010',
      description: 'Avustavat toimistotyöt ja asiakkaiden tietokoneiden huolto.'
    }
  ];

  return (
    <>
      <h2>Työkokemus</h2>
      <ul>
        {experiences.map((exp) => (
          <ExperienceItem 
            key={exp.id} 
            workplace={exp.workplace} 
            title={exp.title} 
            period={exp.period} 
            description={exp.description} 
          />
        ))}
      </ul>
    </>
  );
}

export default Experience;