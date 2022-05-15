import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import ErrorBoundary from './component/Error_Boundary/Error_Boundary.jsx';
import Main from './pages/Main/Main';
import About from './pages/About/About';
import Contacts from './pages/Contacts/Contacts';
import Progects from './pages/Progects/Progects';
import Skills from './pages/Skills/Skills';
import Navbar from "./component/Navbar/Navbar"
import {setupStore } from './store/store';

const App: FC = () => {
  const Store = setupStore()
  return (
      <Provider store={Store}>
          <ErrorBoundary>
          <BrowserRouter>
              <Navbar/>
              <Main/>
              <About/>
              <Skills/>
              <Progects/>
              <Contacts/>
          </BrowserRouter>
          </ErrorBoundary>
      </Provider>
  )
}

export default App;
