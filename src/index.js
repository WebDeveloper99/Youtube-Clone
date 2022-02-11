

import React from 'react';
import ReactDOM from 'react-dom';
import Slider from './Components/Carusel';
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import App from './App';
import { YoutubeContextProvider } from './Context/YouTubeContext';

ReactDOM.render(
  <React.StrictMode>
    <YoutubeContextProvider>
      <Router>
        <App />

        {/* <Slider/> */}

      </Router>
    </YoutubeContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

