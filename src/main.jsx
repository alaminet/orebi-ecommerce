import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Slick-slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
