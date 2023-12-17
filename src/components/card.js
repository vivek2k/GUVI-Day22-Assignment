import { before } from "lodash";
import "./style.css"

import React from 'react';

const CardPricingCard = ({ name, price, features, features1 }) => (
  <div className="card">

    <p style={{fontSize: "1.5vh"}}>{name}</p>
    <strong><h2>{price}</h2></strong>
    <hr style={{opacity : "50%"}}></hr>
    
    <ul className="yes-features">
      {features.map((feature, index) => (
        <li key={index} >{feature}</li>
      ))}

    </ul>
    <ul className="no-features" style={{marginTop : "-40px"}}>

      {features1.map((feature1, index) => (
        <li key={index} style={{opacity: "50%"}}>{feature1}</li>
      ))}
    </ul>

    <button>Buy Now</button>
  </div>
);

const pricingSystem = () => {
  const cards = [
    { name: 'FREE', price: "$0/Month", features: ['Single Users', '50 GB Storage', 'Unlimted Public Projects', 'Community Access'], features1: ['Unlimited Private Projects', 'Dedicated Phone Support', 'Free Subdomain', 'Monthly Status Reports'] },
    { name: 'PLUS', price: "$9/Month", features: ['5 Users', '50 GB Storage', 'Unlimted Public Projects', 'Community Access', 'Unlimited Private Projects', 'Dedicated Phone Support', 'Free Subdomain'], features1: ['Monthly Status Reports']},
    { name: 'PRO', price: "$49/Month", features: ['Unlimted Users', '50 GB Storage', 'Unlimted Public Projects', 'Community Access', 'Unlimited Private Projects', 'Dedicated Phone Support', 'Free Subdomain', 'Monthly Status Reports'], features1: []},
  ];

  return (
    <div className="card-pricing-system">
      {cards.map((car, index) => (
        <CardPricingCard key={index} {...car} />
      ))}
    </div>
  );
};

export default pricingSystem;
