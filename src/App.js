import React, { Suspense } from 'react';
// import Pumpkin from "../src/Img/pumpkin.png";
import './App.css';
import Layout from './components/layout';
import Home from './pages/home';
// import Routing from './pages/Routes/routing';
// const Avater = React.lazy(() => import("./components/avater"));


  function App() {

  return (
    <div className="App">

      <Layout />
      <Home />

      {/* <Suspense fallback={<div>Loading...</div>}>
        <Avater  image = {Pumpkin} />
      </Suspense> */}

      {/* <Routing /> */}

    </div>
  );
}

export default App;
