import React from 'react'
import './PropertyGrid.css'
import PropTypes from 'prop-types'
import {useNavigate} from 'react-router-dom';

const PropertyGrid=({properties, title})=>{

const navigate = useNavigate();

const handleCardClick = (id) =>{
    navigate(`/property/${id}`);
};

    return (
        
        <div className="property-grid-wrapper">

            <div className="r-head flexColStart">
                <span className="orangeText">{title}</span>
            </div>

        <div className="r-grid">
            {properties.map((card,i)=>(
                <div className="flexColStart r-card" key={i} onClick={()=> handleCardClick(card.id)}>
                    <img src={card.image} alt="home" />
                    <span className="secondaryText r-price">
                        <span style={{color:"orange"}}>$</span>
                        <span>{card.price}</span>
                    </span>
                    <span className="primaryText">{card.name}</span>
                    <span className="secondaryText">{card.detail}</span>
                </div>
            ))}
        </div>
        
        <div className="view-more-container">
            <button className="view-more-button">View More</button>
        </div>
        </div>
    );
};

PropertyGrid.prototype={
    properties:PropTypes.arrayOf(
        PropTypes.shape({
            id:PropTypes.number.isRequired,
            image: PropTypes.string,
            price: PropTypes.string,
            name: PropTypes.string,
            detail: PropTypes.string,
        })
    ).isRequired,
    title: PropTypes.string.isRequired,
};

export default PropertyGrid;