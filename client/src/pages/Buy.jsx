import DataListingPage from '../components/DataListingPage/DataListingPage';
import data from '../utils/slider.json'

const Buy = () => {

  return (
    <DataListingPage title="Buy Listings" data={data} />
  );
};

export default Buy;