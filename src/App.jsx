import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Preferences from './components/Preferences/Preferences';
import FoodDetails from './components/FoodDetails/FoodDetails';
import NotFound from './components/NotFound/NotFound';
import axios from 'axios';

function App() {
  const baseUrl = "http://localhost:5050";
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

  return (
    <>
     <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={dataLoaded && <Home setDisLikes={setDisLikes} setLikes={setLikes} foods={foods}/>} />
          <Route path='/fooder' element={dataLoaded && <Preferences likes={likes} disLikes={disLikes}/>} />
          <Route path='/fooder/:id' element={ dataLoaded && <FoodDetails foods={foods}/>} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  )
}

export default App
