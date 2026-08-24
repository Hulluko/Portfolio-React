import React from 'react';
// Tuodaan sivun osioiden komponentit
import Profile from './komponentit/Profiili';
import ContactInfo from './komponentit/Yhteystiedot';
import Education from './komponentit/Koulutus';
import Projects from './komponentit/Projektit';
import Experience from './komponentit/Kokemus';
import Skills from './komponentit/Taidot';
import Languages from './komponentit/Kielet';

function App() {
  return (
    <div className="container">
      {/* Vasemmanpuoleinen osio */}
      <div className="left-section">
        <Profile />
        <ContactInfo />
        <Education />
        <Projects />
      </div>

      {/* Oikeanpuoleinen osio */}
      <div className="right-section">
        <Experience />
        <Skills />
        <Languages />
      </div>
    </div>
  );
}

export default App;
