import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './component/Navbar/Navbar';
import About from './pages/About/About';
import Contacts from './pages/Contacts/Contacts';
import Main from './pages/Main/Main';
import Progects from './pages/Progects/Progects';
import Skills from './pages/Skills/Skills';
import {setupStore } from './store/store';

const App: FC = () => {
  const Store = setupStore()
  return (
    <Provider store={Store}>
      <BrowserRouter>
        <Navbar/>
        <Main/>
        <About/>
        <Skills/>
        <Progects/>
        <Contacts/>
      </BrowserRouter>
    </Provider>
  )
}

export default App;
