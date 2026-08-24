import React from 'react';

// Yksittäisen kielen komponentti
function LanguageItem({ language, level }) {
  return (
    <li>{language} – {level}</li>
  );
}

// Kielitaito-osio
function Languages() {
  const languagesData = [
    { id: 1, language: 'Suomi', level: 'äidinkieli' },
    { id: 2, language: 'Englanti', level: 'erinomainen' },
    { id: 3, language: 'Ruotsi', level: 'välttävä' }
  ];

  return (
    <>
      <h2>Kielitaito</h2>
      <ul>
        {languagesData.map((item) => (
          <LanguageItem key={item.id} language={item.language} level={item.level} />
        ))}
      </ul>
    </>
  );
}

export default Languages;