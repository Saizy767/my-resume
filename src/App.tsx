import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './component/Navbar/Navbar';
import Main from './pages/Main/Main';
const About = React.lazy(() => import('./pages/About/About'));
const Contacts = React.lazy(() => import('./pages/Contacts/Contacts'));
const Progects = React.lazy(() => import('./pages/Progects/Progects'));
const Skills = React.lazy(() => import('./pages/Skills/Skills'));
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
