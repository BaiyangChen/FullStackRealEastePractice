const Pagination = ({ currentPage, totalPage, handlePageChange }) => {
  const renderPagination = () => {
    const pages = [];
    if (totalPage <= 3) {
      for (let i = 0; i < totalPage; i++) {
        pages.push(
          <button
            className={i === currentPage ? 'active' : ''}
            key={i}
            onClick={() => handlePageChange(i)}
          >
            {i + 1}
          </button>
        );
      }
    } else {
      if (currentPage < 2) {
        for (let i = 0; i < 3; i++) {
          pages.push(
            <button
              className={i === currentPage ? 'active' : ''}
              key={i}
              onClick={() => handlePageChange(i)}
            >
              {i + 1}
            </button>
          );
        }
        pages.push(<button className='ellipsis' key='ellipsis-right'>...</button>);
      } else if (currentPage >= 2 && currentPage < totalPage - 2) {
        pages.push(<button className='ellipsis' key='ellipsis-left'>...</button>);
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(
            <button
              className={i === currentPage ? 'active' : ''}
              key={i}
              onClick={() => handlePageChange(i)}
            >
              {i + 1}
            </button>
          );
        }
        pages.push(<button className='ellipsis' key='ellipsis-right'>...</button>);
      } else {
        pages.push(<button className='ellipsis' key='ellipsis-left'>...</button>);
        for (let i = totalPage - 3; i < totalPage; i++) {
          pages.push(
            <button
              className={i === currentPage ? 'active' : ''}
              key={i}
              onClick={() => handlePageChange(i)}
            >
              {i + 1}
            </button>
          );
        }
      }
    }
    return pages
  };

  return (
    <div className='pagination-container'>
      <button className='prev'
        onClick={() => { handlePageChange(currentPage - 1) }}
        disabled={currentPage === 0}
      >
        prev
      </button>
      {renderPagination()}
      <button className='next'
        onClick={() => { handlePageChange(currentPage + 1) }}
        disabled={currentPage === totalPage - 1}
      >
        next
      </button>
    </div>
  );
}

export default Pagination;