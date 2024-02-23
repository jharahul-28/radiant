import React from 'react';
import img from './download3.png';
import '../scss/section.css'
import { IoTrophyOutline } from "react-icons/io5";
import { IoDiamondOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa"

const highlightProductName = (productDescription) => {
  const highlightedDescription = productDescription.replace(
    /WixPro 72-Inch Responsive Website Builder|SiteCraft 68-Inch Ultimate Web Design Studio/g,
    match => `<strong>${match}</strong>`
  );
  return <span dangerouslySetInnerHTML={{ __html: highlightedDescription }} />;
};

const renderBestValue = (icon,bestValue) => {
  if (bestValue) {
    return (
      <div  className='rl1'>
      {icon}
      <p>{bestValue}</p>
      </div>
    );
  }
  return null;
};

const renderRating = (rating) => {
  const numStars = Math.round(rating / 2);
  const stars = [];
  for (let i = 0; i < numStars; i++) {
    stars.push(<FaStar key={i} />);
  }
  return (
    <div className="ratings">
      <p>{rating}</p>
      {stars}
    </div>
  );
};

const ValueItem = ({ values }) => {
  const { icon,bestValue, productDescription, features, rating, ratingDescription } = values;

  return (
    <div className='catalogue'>
      <div className='rowL'>
        {renderBestValue(icon,bestValue)}
        <div className='rlContainer'>
          <p className='rl2'>{values.key}</p>
          <img src={img} alt='computer'/>
        </div>
      </div>
      <div className='rowC'>
        <p className='pDesc'>{highlightProductName(productDescription)}</p>
        <div className='mainHighlight'>
          <strong>Main Highlights</strong>
          <p className='pFeat'>{features}</p>
          <p className='showMore'>Show More</p>
        </div>
      </div>
      <div className='rowR'>
        <div className='ratingDesc'>
          {renderRating(rating)}
          <p className='prDesc'>{ratingDescription}</p>
        </div>
        <button>View</button>
      </div>
    </div>
  );
}

const ValueMap = ({ valuesArray }) => {
  return (
    <div className='section2'>
      {valuesArray.map((values, index) => (
        <ValueItem key={values.key} values={values} />
      ))}
    </div>
  );
}

function Section2() {
  const valuesArray = [
    {
      key: 1,
      icon: <IoTrophyOutline />,
      bestValue: "Best Choice",
      productDescription: "WixPro 72-Inch Responsive Website Builder- Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",
      rating: 9.8,
      features: '[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.',
      ratingDescription: "excellent",
    },
    {
      key: 2,
      icon: <IoDiamondOutline />,
      bestValue: "Best Value",
      productDescription: "SiteCraft 68-Inch Ultimate Web Design Studio- Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)",
      features: "[What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations.",
      rating: 9.5,
      ratingDescription: "excellent"
    },
    {
      key: 3,
      bestValue: "",
      productDescription: "WixPro 72-Inch Responsive Website Builder- Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",
      features: "[What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations.",
      rating: 9.3,
      ratingDescription: "exceptional"
    },
    {
      key: 4,
      bestValue: "",
      productDescription: "SiteCraft 68-Inch Ultimate Web Design Studio- Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)",
      features: "[What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations.",
      rating: 9.1,
      ratingDescription: "exceptional"
    }
  ];
  return (
    <ValueMap valuesArray={valuesArray} />
  );
}

export default Section2;
