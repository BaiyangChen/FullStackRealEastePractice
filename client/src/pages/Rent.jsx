import DataListingPage from '../components/DataListingPage/DataListingPage';
import data from '../utils/moreData.json'

const Rent = () => {

  return (
    <DataListingPage title="Rent Listings" data={data} />
  );
};

export default Rent;