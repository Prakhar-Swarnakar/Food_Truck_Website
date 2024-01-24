// components/Home.js

import React from 'react';
import { Link } from 'react-router-dom';
import MenuTab from '../Components/MenuTabs';
import PhotoGallery from '../Components/HomePage/PhotoGallery';
import { Container } from 'react-bootstrap';

export function Home() {
  return (
  <div>
    <section id="header" style={{ border: '1px solid #000' }}>
      <div className="home-container">
        <div className="hero-image">
          <img 
                src = {"/Imgs/car.jpg"}
                alt = "Rasoi - The Indian Kitchen"
                height = "175px"
                width = "175px" 
                style = {{objectFit : "cover"}}/>  
              {/* <img src={imageSrc} alt="Rasoi - The Indian Kitchen" /> */}
        <div className="overlay">
          <div className="text">
            <h1>Rasoi - The Indian Kitchen</h1>
            <p>Authenticate indian food</p>
            <Link to="/order">
                <button>Order Now</button>
              </Link>
          </div>
        </div>
      </div>
      </div>
    </section>
    <hr/>
    <section id = "menuTab" style={{ border: '1px solid #000' }}>
    <MenuTab/>
    </section>
    
<hr/>
      <section id ="extra" style={{ border: '1px solid #000' }}>
        <PhotoGallery />
      </section>
      <hr/>
    <section id="about" style={{ border: '1px solid #000' }}>
      <h2>About Us</h2>
      {/* Add about page content */}
      <p>
        We are a family owned business that has been serving the greater
        Boston area for over 20 years. We started our food truck to bring
        our passion for food and our love for our culture to the streets
        of Boston. We hope you enjoy our food as much as we enjoy serving
        you!
      </p>
      </section>
      <hr/>
      <section id="find-us" style={{ border: '1px solid #000' }}>
      <h2>Find Us</h2>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
    <div style={{ flex: '0 0 50%' }} >
      {/* Replace with your map component */}
      <p >Map will go here</p>
    </div>
    <div style={{ flex: '0 0 50%' }}>
      <p>
        <strong>Address:</strong> 123 Main St, Boston, MA 02108
      </p>
      <p>
        <strong>Phone:</strong> (123) 456-7890
      </p>
    </div>
  </div>
      </section>
<hr/>
  </div>
  );
};

export default Home;
