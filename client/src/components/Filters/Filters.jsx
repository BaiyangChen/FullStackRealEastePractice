import { Form } from 'react-router-dom';
import FormSelect from '../FormSelect/FormSelect';
import FormRange from '../FormRange/FormRange';
import './Filters.css'

const Filters = () => {
  return (
    <div className='container'>
      <div className='row justify-content-center'>
        <Form className='col-12 filters-container mb-3 row align-items-start justify-content-between'>
          <div className='col-12 col-md-3 mb-2 mb-md-0'>
            <FormSelect
              label='SORT BY TYPE:'
              name='type'
              list={['House', 'Condo', 'Loft', 'Plex', 'Lot']}
            />
          </div>
          <div className='col-12 col-md-3 mb-2 mb-md-0'>
            <FormSelect
              label='NEIGHBORHOOD:'
              name='neighborhood'
              list={['Montréal', 'Laval', 'Verdun', 'Brossard', 'Ville-Marie', 'Longueuil', 'Mont-Royal']}
            />
          </div>
          <div className='col-12 col-md-3 mb-2 mb-md-0'>
            <FormRange
              label='PRICE:'
              name='price'
            />
          </div>
          <div className='col-12 col-md-1 mb-2 mb-md-0 d-flex justify-content-center align-self-center'>
            <button type='submit' className="btn btn-dark btn-block">Search</button>
          </div>
        </Form>
      </div >
    </div >
  );
};
export default Filters;