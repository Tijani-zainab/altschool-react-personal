import React, { Suspense } from 'react';
import Pumpkin from './Assets/pumpkin.png';
import './App.css';
import { Layout } from './Components';
import { Routing } from './Routes';
const Home = React.lazy(() => import('./Pages/Home'));
const Avater = React.lazy(() => import('./Components/Avater'));


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
      
      <Routing 
        image = {Pumpkin}
      />

    </div>
  );
}

export default App;
