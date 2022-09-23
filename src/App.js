import React from 'react';
import { useState, useEffect, Suspense } from 'react';
// import Pumpkin from "../src/Img/pumpkin.png";
// import {Routes, Route} from 'react-router-dom';
// import Avater from './components/Avater/avater';
import './App.css';


function App() {
  const [loading, setLoading] = useState(true);
  const [currentItem, setCurrentItem] = useState(0);
  const [items, setItems] = useState(null);
  const [listItems, setListItems] = useState([]);

  useEffect(() => {

    const dataItems = [
      {
        id: 1,
        title: "BBC News",
        url: "https://www.bbc.co.uk/news",
        description: "The latest UK and World news, from Mirror Online. Find the best stories, opinion, pictures and video on the day's events.",
      },
      {
        id: 2,
        title: "CNN",
        url: "https://edition.cnn.com/",
        description: "View the latest news and breaking news today for U.S., world, weather, entertainment, politics and health at CNN.com.",
      }, 
      {
        id: 3,
        title: "The Guardian",
        url: "https://www.theguardian.com/uk",
        description: "Latest news, sport, business, comment, analysis and reviews from the Guardian, the world's leading",
      },
      {
        id: 4,
        title: "The Telegraph",
        url: "https://www.telegraph.co.uk/",
        description: "Latest news, business, sport, comment, lifestyle and culture from the Daily Telegraph and Sunday Telegraph newspapers and video from Telegraph TV.",
      },
      {
        id: 5,
        title: "The Times",
        url: "https://www.thetimes.co.uk/",
        description: "Latest news, business, sport, comment, lifestyle and culture from the Daily Telegraph and Sunday Telegraph newspapers and video from Telegraph TV.",
      }
    ];

    const item = dataItems[currentItem];
    setListItems(dataItems);
    setItems(item);
    setLoading(false);
  }, [currentItem]);


  // const dataLists = dataItems.map((dataItem) => {
  //   return <div >
       
  //   </div>
  // });


  const handleNext = () => {
    if(currentItem < listItems.length - 1) {
      setCurrentItem(currentItem + 1);
    } else {
      setCurrentItem(0);
    }
  }

  const handlePrev = () => {
    if(currentItem > 0) {
      setCurrentItem(currentItem - 1);
    } else {
      setCurrentItem(listItems.length - 1);
    }
  }

  // const Avater = React.lazy(() => import(".components/avater"));
   


  return (
    <div className="App">
      <div className="items"> 
        {/* {dataLists}  */}
        {loading ? (<div>Loading...</div>) : (
           <div className="news-item">
            <h1>{items.title}</h1>
            <p>{items.description}</p>
            <a className="item--url" href={items.url}>Visit {items.title}</a>
         </div>
        )}
       
      </div>
      <button className="btn" onClick={handlePrev}>Prev</button>
      <button className="btn" onClick={handleNext}>Next</button>

      {/* <Suspense fallback={<div>Loading...</div>}>
        <Avater  image = {Pumpkin} />
      </Suspense>

      <Avater  image = {Pumpkin} />

      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/avater" element={<Avater />} />
      </Routes> */}
    </div>
  );
}

export default App;
