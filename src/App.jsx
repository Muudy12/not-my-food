import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Preferences from './components/Preferences/Preferences';
import FoodDetails from './components/FoodDetails/FoodDetails';
import NotFound from './components/NotFound/NotFound';
import axios from 'axios';

function App() {
  const baseUrl = "https://not-my-food-api.onrender.com";
  const [foods, setFoods] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);
  const [likes, setLikes] = useState([]);
  const [disLikes, setDisLikes] = useState([]);

  useEffect(() => {
    const getFoods = async () => {
      const response = await axios.get(`${baseUrl}/foods`);

      setFoods(response.data);
      setDataLoaded(true);
    }

    getFoods();
  }, [])

  function addToLikes(newFood){
    setLikes([...likes, newFood]);
  }

  function addToDislikes(newFood){
    setDisLikes([...disLikes, newFood]);
  }

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={dataLoaded && <Home setDisLikes={addToDislikes} setLikes={addToLikes} foods={foods}/>} />
          <Route path='/preferences' element={dataLoaded && <Preferences likes={likes} dislikes={disLikes}/>} />
          <Route path='/preferences/:id' element={ dataLoaded && <FoodDetails foods={foods}/>} />
          <Route path='/choices' element={<Navigate to="/" />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  )
}

export default App
