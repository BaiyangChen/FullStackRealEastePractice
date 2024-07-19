import { useState } from 'react';
import SquareItem from '../SquareItem/SquareItem';
import Filters from '../Filters/Filters';
import Pagination from '../Pagination/Pagination';

const DataListingPage = ({ data, title }) => {

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10;

  const totalPage = Math.ceil(data.length / itemsPerPage);
  const offset = currentPage * itemsPerPage;
  const currentPageData = data.slice(offset, offset + itemsPerPage);

  const handlePageChange = (selected) => {
    setCurrentPage(selected);
  }

  return (
    <div className="page-container">
      <div className="container">
        <div className='content-box'>
          <h1 className='title'>{title}</h1>
          <div className='break-line' />
          <Filters />
          <div className="data-list">
            {currentPageData.map((item) => (
              <SquareItem key={item.id} item={item} />
            ))}
          </div>
          <div className='break-line' />
          <Pagination currentPage={currentPage} totalPage={totalPage} handlePageChange={handlePageChange} />
        </div>
      </div>
    </div>
  );
};

export default DataListingPage;