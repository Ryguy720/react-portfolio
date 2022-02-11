import React from "react";
import Carousel from 'react-bootstrap/Carousel'

const Home = () => {
  return (<main className="home-container">
    <Carousel>
      <Carousel.Item>
        <img
          className="home-img"
          src="/images/MeNDom.png"
          alt="Wedding"
        />
        <Carousel.Caption>
          <h3>This is my wife Dom</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="home-img"
          src="/images/Telluride.jpg"
          alt="telluride"
        />

        <Carousel.Caption>
          <h3>This is us at the Blue Lakes!</h3>
      
        </Carousel.Caption>
      </Carousel.Item>
      {/* <Carousel.Item>
        <img
          className="home-img"
          src="holder.js/800x400?text=Third slide&bg=20232a"
          alt="Third slide" */}
        {/* /> */}

        {/* <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption> */}
      {/* </Carousel.Item> */}
    </Carousel>
    </main>)
};

export default Home;