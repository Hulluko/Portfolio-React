import React from 'react';

function App() {
  return (
    <div className="container">

      {/* Vasemmanpuoleinen osio */}
      <div className="left-section">
        <img 
          src="Profiilikuva.jpeg" 
          alt="Profiilikuva Martista" 
          className="profile-pic" 
        />

        <h2>Esittely</h2>
        <p>
          Hei! Olen Martti, 40-vuotias opiskelija Oulusta. Harrastuksiini ja mielenkiinnon kohteisiini kuuluvat
          muun muassa tietokoneet ja tietotekniikka, videopelit, elokuvat ja sarjat, ruoanlaitto sekä kävely ja pyöräily.
        </p>
        <p>
          Olen rento, huumorintajuinen ja helposti lähestyttävä, ja tulen erittäin hyvin toimeen ihmisten kanssa.
          Työssä ja elämässä olen itsenäinen, oma-aloitteinen, tarkka ja huolellinen, mutta osaan olla myös joustava
          ja käyttää aikani tehokkaasti.
        </p>

        <h2>Yhteystiedot</h2>
        <div className="info">
          <p><strong>Sähköposti:</strong> marttimust@gmail.com</p>
        </div>

        <h2>Koulutus</h2>
        <ul>
          <li>
            <strong>Ammattiopisto OSAO</strong><br />
            Ohjelmistokehittäjän ammattitutkinto<br />
            2024 –
          </li>
          <li>
            <strong>Ammattiopisto Luovi</strong><br />
            Virastomestarin ammattitutkinto<br />
            2014 – 2015
          </li>
        </ul>

        <h2>Työt ja projektit</h2>
        <div className="info">
          <a 
            href="https://github.com/Hulluko" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            GitHub-profiilini
          </a>
          <a 
            href="https://hulluko.github.io/Selainohjelmointi/#etusivu" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Ensimmäinen nettisivuni
          </a>
        </div>
      </div>

      {/* Oikeanpuoleinen osio */}
      <div className="right-section">
        <h2>Työkokemus</h2>
        <ul>
          <li>
            <strong>Tuki ry</strong><br />
            Vihertyöntekijä<br />
            05/2013 – 08/2013
            <p>Pihakivetysten asentaminen ja kukkapenkkien rakentaminen.</p>
          </li>

          <li>
            <strong>Tietomaa</strong><br />
            Huoltomies<br />
            01/2012 – 04/2012
            <p>ATK-tehtävät, laitehuolto ja kerrosvalvonta.</p>
          </li>

          <li>
            <strong>Nuorisoasiainkeskus Willamiina</strong><br />
            Toimistotyöntekijä<br />
            01/2010 – 04/2010
            <p>Avustavat toimistotyöt ja asiakkaiden tietokoneiden huolto.</p>
          </li>
        </ul>

        <h2>Osaaminen</h2>
        <ul>
          <li>
            <strong>Tietotekniikka</strong>
            <p>
              Olen harrastanut tietotekniikkaa koko elämäni ja koonnut omat tietokoneeni sekä useita perheenjäsenten ja kavereiden koneita. 
              Eri laitteiden käyttö on minulle tuttua, ja opin nopeasti uusia asioita. 
              Erilaisten ohjelmien käyttö ja ongelmanratkaisu kuuluvat arkipäivääni. 
              Tätä osaamista vahvisti myös virastomestarin koulutus, ja pidän osaamistani jatkuvasti yllä.
            </p>
          </li>

          <li>
            <strong>AV-laitteet</strong>
            <p>
              AV-laitteet ovat minulle tuttuja sekä harrastuksen että virastomestarin koulutuksen kautta. 
              Minulla on kokemusta muun muassa kotiteattereiden, videotykkien, soundbarien, televisioiden ja kokouslaitteiden liittämisestä ja käytöstä.
            </p>
          </li>

          <li>
            <strong>Asiakaspalvelu</strong>
            <p>
              Asiakaspalvelu on yksi vahvimmista osaamisalueistani. Tulen hyvin toimeen erilaisten ihmisten kanssa,
              ja virastomestarin koulutukseen hakeuduin ammatinvalintapsykologin suosituksesta, koska sovellun hyvin
              asiakaspalvelukeskeiseen työhön.
            </p>
          </li>

          <li>
            <strong>Ohjelmointi</strong>
            <p>
              Olen ohjelmoinnissa vielä opiskelijatasolla, mutta HTML ja CSS ovat erityisen mieluisia visuaalisuutensa
              vuoksi. C#, SQL ja JavaScript ovat myös tuttuja kieliä. PHP ja Python ovat vielä uudempi alue,
              mutta opiskelen niitä innokkaasti. Uusimpana asiana on react ja react nativen oppiminen ja käyttö.
            </p>
          </li>

          <li>
            <strong>Office 365</strong>
            <p>
              Word, Excel ja PowerPoint ovat minulle hyvin tuttuja sekä aiemmista että nykyisistä opinnoista.
            </p>
          </li>

          <li>
            <strong>Photoshop</strong>
            <p>
              Photoshop on kohtalaisen tuttu ohjelma, ja pidän sen käytöstä erityisesti visuaalisen työskentelyn vuoksi.
            </p>
          </li>
        </ul>

        <h2>Kielitaito</h2>
        <ul>
          <li>Suomi – äidinkieli</li>
          <li>Englanti – erinomainen</li>
          <li>Ruotsi – välttävä</li>
        </ul>
      </div>

    </div>
  );
}

export default App;
