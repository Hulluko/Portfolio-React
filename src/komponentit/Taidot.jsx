import React from 'react';

// Yksittäisen taidon komponentti
function SkillItem({ title, description }) {
  return (
    <li>
      <strong>{title}</strong>
      <p>{description}</p>
    </li>
  );
}

// Osaamisosio
function Skills() {
  const skillsData = [
    {
      id: 1,
      title: 'Tietotekniikka',
      description: 'Olen harrastanut tietotekniikkaa koko elämäni ja koonnut omat tietokoneeni sekä useita perheenjäsenten ja kavereiden koneita. Eri laitteiden käyttö on minulle tuttua, ja opin nopeasti uusia asioita. Erilaisten ohjelmien käyttö ja ongelmanratkaisu kuuluvat arkipäivääni. Tätä osaamista vahvisti myös virastomestarin koulutus, ja pidän osaamistani jatkuvasti yllä.'
    },
    {
      id: 2,
      title: 'AV-laitteet',
      description: 'AV-laitteet ovat minulle tuttuja sekä harrastuksen että virastomestarin koulutuksen kautta. Minulla on kokemusta muun muassa kotiteattereiden, videotykkien, soundbarien, televisioiden ja kokouslaitteiden liittämisestä ja käytöstä.'
    },
    {
      id: 3,
      title: 'Asiakaspalvelu',
      description: 'Asiakaspalvelu on yksi vahvimmista osaamisalueistani. Tulen hyvin toimeen erilaisten ihmisten kanssa, ja virastomestarin koulutukseen hakeuduin ammatinvalintapsykologin suosituksesta, koska sovellun hyvin asiakaspalvelukeskeiseen työhön.'
    },
    {
      id: 4,
      title: 'Ohjelmointi',
      description: 'Olen ohjelmoinnissa vielä opiskelijatasolla, mutta HTML ja CSS ovat erityisen mieluisia visuaalisuutensa vuoksi. C#, SQL ja PHP ovat jokseenkin tuttuja asioita. JavaScript, React ja React Native ovat minulle uusin asia, mutta ne vaikuttavat mielenkiintoisilta. Python on minulle vielä tällä hetkellä melko vieras kieli.'
    },
    {
      id: 5,
      title: 'Office 365',
      description: 'Word, Excel ja PowerPoint ovat minulle hyvin tuttuja sekä aiemmista että nykyisistä opinnoista.'
    },
    {
      id: 6,
      title: 'Photoshop',
      description: 'Photoshop on kohtalaisen tuttu ohjelma, ja pidän sen käytöstä erityisesti visuaalisen työskentelyn vuoksi.'
    }
  ];

  return (
    <>
      <h2>Osaaminen</h2>
      <ul>
        {skillsData.map((skill) => (
          <SkillItem 
            key={skill.id} 
            title={skill.title} 
            description={skill.description} 
          />
        ))}
      </ul>
    </>
  );
}

export default Skills;
