import React, { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';

import ErrorBoundary from './component/Error_Boundary/Error_Boundary.jsx';
const Main = React.lazy(()=>import('./pages/Main/Main'));
import About from './pages/About/About';
import Contacts from './pages/Contacts/Contacts';
import Progects from './pages/Progects/Progects';
import Skills from './pages/Skills/Skills';
import Navbar from "./component/Navbar/Navbar"
import Loader from './pages/Loader/Loader'
import { useTypedSelector } from './hooks/useTypedSelector';

const App: FC = () => {
  const {Loaded} = useTypedSelector((state)=> state.imageLoaderSlice)
  return (
          <ErrorBoundary>
            <BrowserRouter>
                {!Loaded ? <Loader/>: <>
                    <Navbar/>
                    <Main/>
                    <About/>
                    <Skills/>
                    <Progects/>
                    <Contacts/>
                </>}
            </BrowserRouter>
          </ErrorBoundary>
  )
}

export default App;
