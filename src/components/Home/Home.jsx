import React, { useState } from 'react'
import xIcon from '../../assets/x.svg'
import checkIcon from '../../assets/check.svg'
import './Home.scss'

function Home({foods}) {

  const min = 1;
  const max = 20;
  let randomNum = Math.floor(Math.random()*(max - min + 1));

  const [currentImg, setCurrentImg] = useState(foods.find((food) => food.id === randomNum ));



  return (
    <main className='main'>
      <div className='main__container-image'>
        <img className='main__image' alt='photo of food to like or dislike' src={foods}img/>
      </div>

      <div className='main__container'>
        <button className='main__btn'>
          <img className='main__btn-img' src={xIcon} alt='image of x' />
        </button>

        <button className='main__btn'>
          <img src={checkIcon} alt='image of x' />
        </button>
      </div>

    </main>
  )
}

export default Home
