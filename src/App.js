import React, { Suspense } from 'react';
import Pumpkin from "../src/Img/pumpkin.png";
import './App.css';
import Home from './pages/home';
import Routes from './pages/Routes/routes';
const Avater = React.lazy(() => import("./components/avater"));


  function App() {

  return (
    <div className="App">

      <Home />

      <Suspense fallback={<div>Loading...</div>}>
        <Avater  image = {Pumpkin} />
      </Suspense>

      <Routes />

    </div>
  );
}

export default App;
