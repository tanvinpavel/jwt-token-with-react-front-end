import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import ContextAPI from './context/ContextAPI';


ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
      <ContextAPI>
        <Routes>
          <Route path='/*' element={<App />} />
        </Routes>
        </ContextAPI>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
