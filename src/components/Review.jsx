import React, { useState } from 'react'



const Review = ({onAddReview}) => {

  const [movieTitle, setMovieTitle] = useState("")
  const [newReview, setNewReview] = useState("")

  function handleMovieChange(e){
    setMovieTitle(e.target.value)
  }

  function handleReviewChange(e){
    setNewReview(e.target.value)
  }

  function addReview(e) {
    e.preventDefault();

    fetch("http://localhost:9292/reviews",  {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ movie_title: movieTitle, body: newReview }),
    })
    .then(res => res.json())
    .then((review) => {
      onAddReview(review);
      setMovieTitle("")
      setNewReview("");
    })
  }

  return (
    <div className='mwili'>
      <form onSubmit={addReview} className="container2">
        <div className="movie-title">
        <h5>Movie Title</h5>
        <input type="text" value={movieTitle} onChange={handleMovieChange} placeholder='Type movie title'/>
        </div>
        <div className="comments">
          <h5>Review</h5>
          <textarea type="text" value={newReview} onChange={handleReviewChange} placeholder='whats your feedback?' />
        </div>
        <button id='submit' >Submit</button>
      </form>
    </div>
  )
}

export default Review