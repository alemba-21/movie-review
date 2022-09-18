import React from 'react'
import feedback from './feedback';


const Review = () => {
  return (
    <div className='mwili'>
      <div className="container2">
        <div className="movie-title">
        <h5>Movie Title</h5>
        <input type="text" placeholder='Type movie title'/>
        </div>
        <div className="comments">
          <h5>Review</h5>
          <textarea type="text" placeholder='whats your feedback?' />
        </div>
        <a href={feedback} ><button id='submit'>Submit</button></a>
      </div>
    </div>
  )
}

export default Review