import './App.css';
import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import News from './Components/News';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';
import Footer from './Components/Footer';
import ScrollToTopButton from './Components/ScrollToTopButton';

const App = ()=> {
  const articlesPerPage = 12;
  const country = 'us';

  const [progress, setProgress] = useState(0);

    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar 
          progress={progress} 
          height={3} 
          color='red'/>
          <Routes>
          <Route exact path='/' element={<News setProgress={setProgress} key='general' articlesPerPage={articlesPerPage} backgroundColor='#b107ff' country={country} /> } />
            <Route exact path='/business' element={<News setProgress={setProgress} key='business' articlesPerPage={articlesPerPage} backgroundColor='red' country={country} category='business' />} />
            <Route exact path='/entertainment' element={<News setProgress={setProgress} key='entertainment' articlesPerPage={articlesPerPage} backgroundColor='#00b6ff' country={country} category='entertainment' />} />
            <Route exact path='/general' element={<News setProgress={setProgress} key='general' articlesPerPage={articlesPerPage} backgroundColor='#b107ff' country={country} category='general' />} />
            <Route exact path='/health' element={<News setProgress={setProgress} key='health' articlesPerPage={articlesPerPage} backgroundColor='#ff9600' country={country} category='health' />} />
            <Route exact path='/science' element={<News setProgress={setProgress} key='science' articlesPerPage={articlesPerPage} backgroundColor='#488eff' country={country} category='science' />} />
            <Route exact path='/sports' element={<News setProgress={setProgress} key='sports' articlesPerPage={articlesPerPage} backgroundColor='#58d584' country={country} category='sports' />} />
            <Route exact path='/technology' element={<News setProgress={setProgress} key='technology' articlesPerPage={articlesPerPage} backgroundColor='#947abb' country={country} category='technology' />} />
          </Routes>
          <ScrollToTopButton/>
          <Footer/>
        </Router>
      </div>
    );
    }
    
export default App;