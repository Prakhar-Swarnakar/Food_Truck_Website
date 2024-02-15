// components/Home.js

import React from 'react';
import { Link } from 'react-router-dom';
import MenuTab from '../Components/MenuTabs';
import PhotoGallery from '../Components/HomePage/PhotoGallery';
import { Container } from 'react-bootstrap';
import { url } from 'inspector';
import Images from '../Data/Images';


export function Home() {
  return (
  <div>
    <section id="header" style={{ border: '1px solid #000' }}>
    <div
            style={{
              backgroundImage: `url(${Images.banana})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: "cover"
            }}
          >
                <div className="text">
                  <h1>Rasoi - The Indian Kitchen</h1>
                  <p>Authenticate indian food</p>
                  <button>Order Now</button>
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
        <img 
                src = {Images.Location}
                alt = "Rasoi - The Indian Kitchen"
                height = "375px"/>  
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
