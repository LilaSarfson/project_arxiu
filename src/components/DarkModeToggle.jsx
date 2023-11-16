import React, { useState } from 'react';
// import sun from '../../assets/sun.png'
// import moon from '../../assets/moon.png'

 export default function DarkModeToggle (){  
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
      setDarkMode(!darkMode);
      document.documentElement.classList.toggle('dark', !darkMode);
    };
  return (
      <button id='toggle'
        onClick={toggleDarkMode}>
        {darkMode ? <icon>🌑</icon> : <icon>🌕
        </icon>  }     
         {/* // <img className='w-5' src={sun}/> : <img className='w-5' src={moon}/>} */}
      </button>

  );
};