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
  const [likes, setLikes] = useState([]);
  const [disLikes, setDisLikes] = useState([]);

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
          <Route path='/' element={<Home setDisLikes={addToDislikes} setLikes={addToLikes}/>} />
          <Route path='/choices' element={<Navigate to="/" />} />
          <Route path='/preferences' element={<Preferences likes={likes} dislikes={disLikes}/>} />
          <Route path='/preferences/:id' element={<FoodDetails/>} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
