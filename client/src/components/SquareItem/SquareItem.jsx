import React from 'react'
import './SquareItem.css';
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom';

const SquareItem = ({ item }) => {
  const navigate = useNavigate();

  const handleClick=()=>{
    navigate(`/property/${item.id}`);
  };


  return (
    <div className="rent-item r-card" onClick={handleClick}>
      <img src={item.image} alt="property" />
      <div className="secondaryText r-price price-line">
        <p className='dollar'>$</p>
        <p className="rent-price">{item.price}</p>
      </div>
      <p className="rent-name">{item.name}</p>
      <p className="secondaryText">{item.detail}</p>
    </div>
  );
};

SquareItem.proptype={
      item:PropTypes.shape({
          id:PropTypes.number.isRequired,
          image: PropTypes.string.isRequired,
          price: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
          detail: PropTypes.string.isRequired,
      }).isRequired,
};

export default SquareItem;
