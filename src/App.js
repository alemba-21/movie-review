import { useEffect, useState } from 'react';
import './App.css';
import LandingPage from './components/LandingPage';
import Review from './components/Review';




function App() {

  const [reviews, setReviews] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/reviews")
    .then((res) => res.json())
    .then((reviews) => {
      setReviews(reviews)
    })
  }, [])

  function onAddReview(review) {
    setReviews([...reviews, review])
  }

  function onDeleteReview(id) {
    const updatedReviews = reviews.filter((review) => review.id !== id);
    setReviews(updatedReviews);
  }


  return <div>
           <LandingPage reviews={reviews} onDeleteReview={onDeleteReview}/>
           <Review reviews={reviews} onAddReview={onAddReview} />
        </div>
}

export default App;
