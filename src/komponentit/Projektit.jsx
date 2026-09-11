import React from 'react';

// Töiden ja projektien linkit
function Projects() {
  return (
    <>
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
        <a 
          href="https://kempeleenkierratyskeskus.com/" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          Mukana sivun kehityksessä
        </a>
      </div>
    </>
  );
}

export default Projects;
