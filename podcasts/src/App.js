import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/header/header';
import Main from './views/main';
import PodcastDetails from './views/details';
import Episode from './components/episode';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Header loading={true}></Header>
        <Routes>
          <Route path='/' element={<Main></Main>}></Route>
          <Route
            path="/podcast/:id"
            element={<PodcastDetails />}
          >
            <Route path="episode/:episodeId" element={<Episode />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
