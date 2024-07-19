import React from 'react'
import './Residencies.css'
import PropertyGrid from '../PropertyGrid/PropertyGrid'
import useProperty from '../../Hook/useProperty'
import {PuffLoader} from 'react-spinners';

export const Risidencies = () => {

  const {data, isError, isLoading} = useProperty();

  if(isError){
    return <div className='wrapper'><span>Error loading Properties</span></div>;
  }

  if(isLoading){
    return(<div className="wrapper flexCenter" style={{height: "60vh"}}>
      <PuffLoader
      height="80"
      width = "80"
      radius={1}
      color="#4066ff"
      aria-label="puff-loading"
      />
    </div>)
  }

    const chunkSize=8;
    const numberOfChunk = 3;
    const propertyChunks = [];
    const title = ["Residential", "Commercial", "Franchise"];
    
    //将数据分块，每4块房屋信息为一行
    const limitedData = data.slice(0, chunkSize*numberOfChunk);
    for(let i =0;i<limitedData.length; i+= chunkSize){
        propertyChunks.push(limitedData.slice(i, i+chunkSize));
    }
  return (
    <section className="r-wrapper">
            {propertyChunks.map((chunk, index) => (
              <div key={index} className= {index === 1 ? 'full-width-background':'property-section'}>
                <div className="paddings innerwidth r-container">
                <PropertyGrid  properties={chunk} title={title[index % title.length]}/>
                </div>
              </div>
        ))}
        
    </section>
  );
};


export default Risidencies;
