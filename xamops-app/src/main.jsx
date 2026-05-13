import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App.jsx';

// Apply theme before first paint to avoid flash
const stored = localStorage.getItem('xamops-theme');
const preferLight = window.matchMedia('(prefers-color-scheme: light)').matches;
document.documentElement.setAttribute('data-theme', stored || (preferLight ? 'light' : 'dark'));

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
