import React, { useState } from 'react';
import useSaveLigthsMode from '../hooks/useSaveLigthsMode';
 export default function DarkModeToggle (){  
  const [darkMode, setDarkMode] = useState(localStorage.getItem("dark") === "activated");
  useSaveLigthsMode(darkMode)
  return (
      <button id='toggle'
        onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? <icon>🌕</icon> : <icon>🌑
        </icon>  }     
      </button>

  );
};