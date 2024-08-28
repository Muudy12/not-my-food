import React from 'react'

function Preferences() {
  return (
    <main className='main-preferences'>
      <div className="dis-likes">
        <h2 className="dis-likes__title">Dislike</h2>
        {/* Need to map the data  */}
        <img className="dis-likes__img" />
      </div>
      <div className="likes">
        <h2 className="likes__title">Like</h2>
        <img className="likes__img" />
      </div>
    </main>
  )
}

export default Preferences
