import React from 'react';
import Coverpage from './component/Coverpage'; 
import AboutMe from './component/AboutMe';
import './App.css';

const App = () => {  
    return (
          <div className="Cover-page">
            <Coverpage />
            <AboutMe />
        </div>
    );
};
export default App;