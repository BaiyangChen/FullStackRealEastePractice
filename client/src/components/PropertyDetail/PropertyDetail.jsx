import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import data from '../../utils/slider.json';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import 'swiper/css';
import './PropertyDetail.css';

// SwiperCore.use([Autoplay]);

export const PropertyDetail = () => {

    const {id} = useParams();
    const property = data.find((p)=>p.id === parseInt(id));
    const [currentBatchIndex, setCurrentBatchIndex] = useState(0);

    if(!property){
        return (
        <div className="container mt-5">
        <h2>roperty Not Found</h2>
        </div>);
    }

    const batches = [];
    const images = property.images || [];

    for(let i = 0; i < images.length; i +=4){
        batches.push(images.slice(i, i+4));
    }


    const handleSlideChange = (swiper) =>{
        setCurrentBatchIndex(swiper.realIndex % batches.length);
    }

    useEffect(()=>{
      console.log('images:', images);
        console.log('property:', property);
        console.log('Batches:', batches);
    }, [property, batches]);


        
  return (
    <div className="property-detail-page">
        <Header />
        <div className="property-detail-container">
            {/* 第一块，大图片 */}
            <div className="property-main-image">
                <img src={batches[currentBatchIndex]?.[0]} alt="Property" />
            </div>
            {/* 第二块，Swiper */}
            {batches.length >0 && (
            <div className="property-swiper">
                <Swiper
                spaceBetween={10}
                slidesPerView={1}
                autoplay={{delay:2000}}
                onSlideChange={handleSlideChange}
                loop = {batches.length>1}
                modules={[Autoplay]}
                >
                    {batches.map((card,i)=>(
                    <SwiperSlide key ={i}>
                      <div className="swiper-batch">
                        {card.map((image,idx)=>(
                          <img key ={idx} src={image} alt="home" />
                        ))}
                      </div>
                    </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            )}


            {/*第三块： property介绍 */}
            <div className="property-description">
                <h2>Property Description</h2>
                <p>{property.detail}</p>
            </div>
            {/* 第四块： property Overview */}
            <div className="property-overview">
                <h2>Proerty Overview</h2>
                <div className="overvew-items">
                    <div className="overview-item">
                        <i className="fa fa-bed"></i>
                        <span>{property.bedrooms} Bedrooms</span>
                    </div>
                    <div className="overview-item">
                        <i className="fa fa-bath"></i>
                        <span>{property.bathrooms} bathrooms</span>
                    </div>
                    <div className="overview-item">
                        <i className="fa fa-building"></i>
                        <span>{property.elevator ? 'Elevator' : 'No Elevator'}</span>
                    </div>
                    {/* add more as need */}
                </div>
            </div>

            

            {/* 第五块：Feature & Amenities */}
            <div className="property-amenities">
                <h2>Feature & Amenities</h2>
                <div className="amenities-items">
                    {property.amenities.map((amenity,index)=>(
                        <div key={index} className="amenities-item">
                            <i className="fa fa-check"></i>
                            <span>{amenity}</span>
                        </div>
                    ))}
                </div>
            </div>
            {/* 第六块：地图 */}
            <div className="property-map">
                <h2>Location</h2>
                <iframe src={`https://www.google.ca/maps?q=${property.location}&output=embed`} 
                width="100%"
                height="400%"
                style={{border:0}}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
                >
                </iframe>
            </div>
        </div>
        <Footer/>
    </div>
    
  );
};

export default PropertyDetail;
