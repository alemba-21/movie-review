import React from 'react'
import Clip3 from '../images/clip3.mp4';
import img1 from '../images/1.jpeg';
import img2 from '../images/2.jpeg';
import img3 from '../images/3.jpeg'
import img4 from '../images/4.jpeg'
import img5 from '../images/5.jpeg'

const LandingPage = () => {
  return (
    <div className='main'>
      <div className="overlay"></div>
        <div className='background'>
          <video src={Clip3} autoPlay loop muted></video>
        </div>
        <div className="content">
          <h2>Top 10 #1 in TV Shows Today</h2>
          <p>An ordinary miss felt lost and lonely. She visits an acient home town in Kinshasa for retrival.Based on true events.</p>
        </div>
        <div className="content1">
            <h1>Top 5 Movies in Kenya</h1>
          <div className="containerZ">
              <div className="box"><img className='u1' src={img1} alt="img1" /></div>
              <div className="box"><img className='u2' src={img2} alt="img2" /></div>
              <div className="box"><img className='u3' src={img3} alt="img3" /></div>
              <div className="box"><img className='u4' src={img4} alt="img4" /></div>
              <div className="box"><img className='u5' src={img5} alt="img5" /></div>
          </div>
          <div className="reviewz">
              <h2>Reviews</h2>
              <p>How sufficient is our services. Give us your Review on the Button below</p>
            </div>
            <div className="feedback">
              {/* output section of reviews */}
            </div>
            </div>
        </div>
  );
};

export default LandingPage