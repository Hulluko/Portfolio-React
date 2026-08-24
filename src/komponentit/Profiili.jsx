import React from 'react';

// Profiilikuva ja teksti
function Profile() {
  return (
    <>
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
    </>
  );
}

export default Profile;