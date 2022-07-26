import './App.css';
import Home from './Container/home';
import React, { Suspense, lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        {
          <Routes>
            <Route path={"locationportal/home"} element={<Home/>}>
            </Route>
          </Routes>
        }
      </div>
    );
  }
}

export default App;
