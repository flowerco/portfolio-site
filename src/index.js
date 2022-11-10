import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import { Sidebar } from './components/Sidebar';

const root = ReactDOM.createRoot(document.getElementById('root'));


export const SidebarContext = createContext({
  open: false,
  toggleOpen: () => {}
});

root.render(
  <React.StrictMode>
    <div className='h-full w-full antialiased bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400'>
      <SidebarContext.Provider value={false}>
        <Router>
          <App />
        </Router>
      </SidebarContext.Provider>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
