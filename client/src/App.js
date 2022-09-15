import React, {useState, useEffect} from 'react';
import Axios from 'axios'
import "./App.css";

function App(){

  const [movieName, setMovieName] = useState('');  
  const [review, setReview] = useState('');  
  const[movieReviewList, setMovieList] = useState([]);
  const [newReview, setNewReview] = useState ("")

  useEffect(() =>{
    Axios.get('http://localhost:3001/api/get').then((response)=>{
        setMovieList(response.data)
    });
  }, []);

  const submitReview = () => {
    Axios.post('http://localhost:3001/api/insert', {
      movieName: movieName, 
      movieReview: review,
    });
      
    setMovieList([
      ...movieReviewList, 
      {movieName: movieName, movieReview: review},
    ]);
    };

    const deleteReview = (movie) =>{
      Axios.delete(`http://localhost:3001/api/delete/${movie}`);
    };


    const updateReview = (movie) =>{
      Axios.delete("http://localhost:3001/api/update", {
        movieName: movie, 
        movieReview: newReview,
      });
      setNewReview("")
    };

    

  return (
  
  )
}

export default App;