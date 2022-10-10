
import React from "react";
import Offer from "../../images/offer.svg"
import Income from "../../images/income.svg"
import Walkthrough from "../../images/walkthrough.svg"
import Terms from "../../images/terms.svg"
import Door_step from "../../images/door_step.png"
import "./Content.css"
import "./Banner.css"
// import Link from "react-router-dom";

const Content = () => {

  return (
   <div className="container">
    <div className="how">
        <p className="bold_text">How it works</p>
        <p className="small_text">
        Ownerfi helps landlords sell their rentals but continue to earn rental income over time, here's how we do it. 
        </p>
        <div className="cards">
            <div className="card">
            <img src={Offer} 
         alt="" style={{ width:"72", height:"72"}}  />
         <p className="card_title">Receive an offer</p>
         <p className="card_text">Receive an offer within 24 hours of providing details on your rental property.</p>
            </div>
            <div className="card">
            <img src={Income} 
         alt="" style={{ width:"72", height:"72"}}   />
         <p className="card_title">Close and watch the income roll-in</p>
         <p className="card_text">Relax and get paid monthly without having to manage a rental property again. </p>
            </div>
            <div className="card">
            <img src={Walkthrough} 
         alt=""  style={{ width:"72", height:"72"}}  />
         <p className="card_title">Schedule a walkthrough</p>
         <p className="card_text">Our team will contact you to schedule a walkthrough of your rental property. </p>
            </div>
            <div className="card">
            <img src={Terms} 
         alt="" style={{ width:"72", height:"72"}}   />
         <p className="card_title">Agree on terms.</p>
         <p className="card_text">Come to an agreement on the offer price, desired monthly income  and duration.</p>
            </div>
        </div>
    </div>
    <div className="deliver">
    <img src={Door_step} width='286px' height='351px' 
         alt="" className="doorstep" />
         <div className="promise">
    <p className="bold_text">
    How do we deliver on our values and what we promise?
    </p>
    <div className="list">
        <ul>
            <li>By giving Landlords an offer they can depend on.</li>
            <li>A unique offer tailored to you timeline and suited to align with your goals.</li>
            <li>Never have to lose sleep over tenant and property management again.</li>
            <li>Seamless closing and timely monthly disbursement process</li>
        </ul>
    </div>
         </div>
    </div>
    <div className="customer">
    <p className="bold_text">What our customers say
 about us</p>
 <div className="cards">
    <div className="card">
                  <p className="small_text">I was at an age where managing my rental properties has become a major hassle. I wanted to sell but still liked the idea of receiving some type of income inretirement. Ownerfi did just that with the right offer that suited my needs.</p>
                  <p className="name">Charles McEwan</p>
                    <p className="state">Atlanta, GA</p>
              </div>
              <div className="card">
                  <p className="small_text">We have been getting low ball offers from various investors trying to buy our rentals, Ownerfi was able to meet us at a reasonable price and we are still able to make close to our previous rental income without having to deal with tenants again.</p>
                  <p className="name">Betty and Larry George</p>
                  <p className="state">Suwanee, GA</p>
              </div>
 </div>
              
    </div>
   </div> 
  );
};

export default Content;
