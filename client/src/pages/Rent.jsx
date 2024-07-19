import DataListingPage from '../components/DataListingPage/DataListingPage';
import useProperty from '../Hook/useProperty'
import {PuffLoader} from 'react-spinners';

const Rent = () => {

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

  return (
    <DataListingPage title="Rent Listings" data={data} />
  );
};

export default Rent;