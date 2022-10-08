import React, { Suspense } from 'react';
import Pumpkin from "../src/Img/pumpkin.png";
import './App.css';
import Layout from './components/layout';
import Routing from './pages/Routes/routing';
// import ErrorPage from './pages/errorPage';
const Home = React.lazy(() => import('./pages/home'));
const Avater = React.lazy(() => import("./components/avater"));


  function App() {

  return (
    <div className="App">

      <Layout />

      <Suspense fallback={<div>Loading...</div>}>
        <Avater  image = {Pumpkin} />
      </Suspense> 

      <Suspense fallback={<div>Loading...</div>}>
        <Home />
      </Suspense>

      {/* <ErrorPage /> */}
      
      <Routing />

    </div>
  );
}

export default App;
