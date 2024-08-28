import React, { useEffect, useState } from 'react'
import xIcon from '../../assets/x.svg'
import checkIcon from '../../assets/check.svg'
import './Home.scss'

function Home({foods, setLikes, setDisLikes}) {

  const min = 1;
  const max = 20;
  let randomNum = Math.floor(Math.random()*(max - min + 1));
  const [currentImg, setCurrentImg] = useState(null);

  useEffect(() => {
    const current = foods.find(f => f.id === `${randomNum}`);
    setCurrentImg(current);
  }, [foods,randomNum])

  const handleLikeChange = () => {
    setLikes(prevLikes => [...prevLikes, currentImg]);
    setCurrentImg(null); // Reset current image or load another
  };

  const handleDisLikeChange = () => {
    setDisLikes(prevDisLikes => [...prevDisLikes, currentImg]);
    setCurrentImg(null); // Reset current image or load another
  };

  return (
    <main className='main'>
      <div className='main__container-image'>
        <img className='main__image' alt='photo of food to like or dislike' src={currentImg}/>
      </div>

      <div className='main__container'>
        <button className='main__btn' onClick={handleDisLikeChange} >
          <img className='main__btn-img' src={xIcon} alt='image of x' />
        </button>

        <button className='main__btn' onClick={handleLikeChange} >
          <img src={checkIcon} alt='image of checkmark' />
        </button>
      </div>

    </main>
  )
}

export default Home
