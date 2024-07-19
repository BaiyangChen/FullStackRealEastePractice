import React, {useState, useEffect} from 'react'
import './Hero.css'

const images = ['/r1.png', '/r2.png', '/r3.png'];


const Hero = () => {
    const [currentIndex, setCurrentImageIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(()=>{
          setCurrentImageIndex((prevIndex)=> 
          prevIndex === images.length-1?0:prevIndex+1
        );
        }, 2000);


        return() => clearInterval(interval)
    },[])




  return (
    <div className="hero">
            <div className="hero-slider" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {images.map((image,index)=>(
                  <div className="hero-image-container" key={index}>
                    <img src={image} alt={`Slide ${index}`} className='hero-image'/>
                    </div>
                ))}
            </div>  
    </div>
  )
}

export default Hero


