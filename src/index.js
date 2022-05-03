import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { HashRouter, Routes, Route} from 'react-router-dom';
import Vaccination from './routes/vaccination';
import About from './routes/about';
import Certification from './routes/certification';

ReactDOM.render(
  <HashRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/vaccination' element={<Vaccination />} />
      <Route path='/about' element={<About />} />
      <Route path='/certification' element={<Certification />} />
    </Routes>
  </HashRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
