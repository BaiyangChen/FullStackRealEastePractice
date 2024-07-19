import { useState } from 'react';
import { formatPrice } from '../../utils/Common';
import './FormRange.css'

const FormRange = ({ label, name }) => {

  const step = 1000;
  const maxPrice = 1000000;
  const [selectedPrice, setSelectedPrice] = useState(maxPrice);

  return (
    <div className=" mb-2 mb-md-0">
      <label htmlFor={name} className="form-label">
        <span className='fw-medium'>{label}</span>
      </label>
      <input
        type="range"
        name={name}
        id={name}
        min={0}
        max={maxPrice}
        value={selectedPrice}
        onChange={(e) => setSelectedPrice(e.target.value)}
        step={step}
        className="form-range custom-range"
      />
      <div className='col-12 d-flex justify-content-between text-xs px-2 mt-2'>
        <span className='font-bold text-md'>{formatPrice(0)}</span>
        <span className='font-bold text-md'>{formatPrice(selectedPrice)}</span>
      </div>
    </div >
  );
}

export default FormRange;