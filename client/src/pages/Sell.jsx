import DataListingPage from '../components/DataListingPage/DataListingPage';
import data from '../utils/slider.json'

const Sell = () => {

  return (
    <DataListingPage title="Sell Listings" data={data} />
  );
};

export default Sell;