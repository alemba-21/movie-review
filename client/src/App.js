import React, {useState, useEffect} from 'react';
import Axios from 'axios'
import "./App.css";

function App(){

  const [movieName, setMovieName] = useState('');  
  const [review, setReview] = useState('');  

  const submitReview = () => {
    Axios.post('http://localhost:3001/', {movieName: movieName, movieReview: mo})
  }

  return (
    <div className='App'>
      <h1>Movie Review</h1>
      <div className='form'>
      <label>Movie Name:</label>
      <input type="text" name='movieName' onChange={(e)=>{
        setMovieName(e.target.value)
      }} />
      <label>Review:</label>
      <input type="text" name='review' onChange={(e)=> {
        setReview(e.target.value)
      }}/>

      <button onClick={submitReview}>Submit</button>
      </div>
    </div>
  )
}

export default App;