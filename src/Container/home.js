import { useState } from 'react';
import '../css/home.css';
import GetLocationByAddress from './GetLocationByAddress';
import GetLocationByIp from './GetLocationByIP';
import GetLocationByLatLong from './GetLocationByLatLong';


function Home() {

    const [showAddressPopup, setShowAddressPopup] = useState(false); 
    const [showIpPopup, setShowIpPopup] = useState(false); 
    const [showLatLongPopup, setShowLatLongPopup] = useState(false); 


    const cancel = () => {
        setShowAddressPopup(false);
        setShowIpPopup(false);
        setShowLatLongPopup(false);
    }


  return (
    <div className='main-container'>
        {showAddressPopup && <GetLocationByAddress cancel={cancel}/>}
        {showIpPopup && <GetLocationByIp cancel={cancel}/>}
        {showLatLongPopup && <GetLocationByLatLong cancel={cancel}/>}
            

      <header>

        <nav id="menu">
          <ul>
            {/* <li><a href="">Home</a></li>
            <li><a href="">About Us</a></li>
            <li><a href="">Contact Us</a></li> */}
          </ul>
        </nav>

        <div id="logo">
          <a href="">Location Tracker</a>
        </div>

        <nav id="social-links">
          <ul>
            {/* <li><a href=""><i class="fa fa-cloud-upload"></i></a></li>
            <li><a href=""><i class="fa fa fa-comment"></i></a></li>
            <li><a href=""><i class="fa fa fa-envelope"></i></a></li> */}
          </ul>
        </nav>
      </header>

      <div id="main">
        {/* <aside className=''>
          <ul>
            <li> <a href=''>Some Link</a> </li>
            <li> <a href=''>Some Link</a> </li>
            <li> <a href=''>Some Link</a> </li>
            <li> <a href=''>Some Link</a> </li>
            <li> <a href=''>Some Link</a> </li>
            <li> <a href=''>Some Link</a> </li>
          </ul>
        </aside> */}

        <article className=''>
          <h2>Welcome to location tracking system</h2>
          <p>You can use this portal to track location on the basis of Address, IP address, Latitude & Longitude </p>

          <h2>Our Services</h2>
          <div className='services-container'>
          
            <div onClick={()=>{setShowAddressPopup(true)}} className='service-box'>
              <div className='service-img'>
                <img src="https://images.ctfassets.net/pdf29us7flmy/gPTgDo9D25B3gjl4w3hWW/8b44b0c2a25c7c10bdabc6e75f7b842b/Screen_Shot_2022-07-07_at_2.40.02_PM.png" alt=""></img>
              </div>
              <div className='service-title'>
                <h3>By Address</h3>
              </div>
              <div className='service-desc'>
                {/* <h3>Web Designing is best</h3> */}
              </div>
              <div className='call-to-action'>
                <a >Get location</a>
              </div>
            </div>

            <div onClick={()=>{setShowIpPopup(true)}} className='service-box'>
              <div className='service-img'>
                <img src="https://www.elegantthemes.com/blog/wp-content/uploads/2020/03/what-is-an-ip-address-featured-image.jpg" alt=""></img>
              </div>
              <div className='service-title'>
                <h3>By IP Address</h3>
              </div>
              <div className='service-desc'>
                {/* <h3>Web Designing is best</h3> */}
              </div>
              <div className='call-to-action'>
              <a  >Get Location</a>
              </div>
            </div>

            <div onClick={()=>{setShowLatLongPopup(true)}} className='service-box'>
              <div className='service-img'>
                <img src="https://i.ytimg.com/vi/MSA88mmFuyE/hqdefault.jpg" alt=""></img>
              </div>
              <div className='service-title'>
                <h3>By Longitude & Latitude</h3>
              </div>
              <div className='service-desc'>
                {/* <h3></h3> */}
              </div>
              <div className='call-to-action'>
              <a  >Get Location</a>
            </div>
            </div>


          </div>
        </article>
      </div>
      <footer>Powered by One97 Communications Ltd.</footer>
    </div>
  );
}

export default Home;
