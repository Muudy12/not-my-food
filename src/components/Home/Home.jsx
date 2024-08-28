import React from 'react'
import xIcon from '../../assets/x.svg'
import checkIcon from '../../assets/check.svg'
import './Home.scss'

function Home() {
  return (
    <main className='main'>
      {/* //TODO: add axios image here */}
      <div className='main__container-image'>
        <img className='main__image' alt='photo of food to like or dislike' />
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
