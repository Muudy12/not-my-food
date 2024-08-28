import './App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Preferences from './components/Preferences/Preferences';
import FoodDetails from './components/FoodDetails/FoodDetails';
import NotFound from './components/NotFound/NotFound';

function App() {

  return (
    <>
    <h1>Not My Food</h1>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/fooder' element={<Preferences/>} />
          <Route path='/fooder/:id' element={<FoodDetails/>} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  )
}

export default App
