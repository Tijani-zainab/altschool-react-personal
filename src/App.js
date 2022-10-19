import React, { Suspense } from 'react';
import './App.css';
import Pumpkin from "./Assets/pumpkin.png";
import { UserProfile, Layout } from './Components';
import { Routing } from './Routes';
// const Home = React.lazy(() => import('./Pages/Home'));
// const Avater = React.lazy(() => import('./Components/Avater'));


  function App() {

  return (
    <div className="App">

      <Layout />
      {/* <UserProfile image={Pumpkin}/> */}

      {/* <Suspense fallback={<div>Loading...</div>}>
        <Avater  image = {Pumpkin} />
      </Suspense>  */}

      {/* <Suspense fallback={<div>Loading...</div>}>
        <Home />
      </Suspense> */}

      {/* <ErrorPage /> */}
      
      <Routing />

    </div>
  );
}

export default App;
