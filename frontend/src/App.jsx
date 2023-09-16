import React from 'react';
import { Routes, Route } from 'react-router-dom';
// from file
import { useResponsiveHook } from './theme/useResponsiveHook';
import { color } from './theme/styleDeclaration';
import ScrollToTheTopBtn from './components/ScrollToTheTopBtn';
// import redux
import configureStore from '../redux/configureStore';
import { Provider } from 'react-redux';
// import scenes
import Navbar from './components/Navbar';
import Home from './scenes/Home';
import Literatures from './scenes/Literatures';
import Maps from './scenes/Resources';
import Foreword from './scenes/Foreword';
// chapters
import Chapter_01 from './scenes/Chapter_01';
import Chapter_02 from './scenes/Chapter_02';
import Chapter_03 from './scenes/Chapter_03';
import Chapter_04 from './scenes/Chapter_04';
import Chapter_05 from './scenes/Chapter_05';


// create context
export const ResponsiveContext = React.createContext();
export const TypographyContext = React.createContext();

// App.jsx
function App() {

  // responsive design
  const screenWidth = useResponsiveHook();

  return (
    <Provider store={ configureStore }>
      <ResponsiveContext.Provider value={ screenWidth }>
        <nav>
          <Navbar />
        </nav>

        <main style={ { backgroundColor: color.bg_coal } }>
          <Routes>
            <Route path='/' element={ <Home /> } />
            <Route path='/literatures' element={ <Literatures /> } />
            <Route path='/maps' element={ <Maps /> } />

            <Route path='/chapter-foreword' element={ <Foreword /> } />
            <Route path='/chapter-01' element={ <Chapter_01 /> } />
            <Route path='/chapter-02' element={ <Chapter_02 /> } />
            <Route path='/chapter-03' element={ <Chapter_03 /> } />
            <Route path='/chapter-04' element={ <Chapter_04 /> } />
            <Route path='/chapter-05' element={ <Chapter_05 /> } />
          </Routes>
          <ScrollToTheTopBtn />
        </main>


      </ResponsiveContext.Provider>
    </Provider>
  );
}

export default App;
