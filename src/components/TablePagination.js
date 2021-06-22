import React, { Fragment } from 'react';



const TablePagination = ({ currentPage, pages, setPage, pageLimit }) => {
  const numPages = Math.ceil(pages / pageLimit);

  const getPaginationNumbers = () => {
    const blocks = [];
    for (let i = 0; i < numPages; i++) {
      blocks.push(i);
    }
    return blocks;
  };
  
  const renderPageBlocks = () => {
    const getPageNumbers = getPaginationNumbers();
    
    return getPageNumbers.map(pageNum =>
      <a 
        key={pageNum} 

        onClick={() => setPage(pageNum)}
       
      >
      {pageNum === currentPage ? (pageNum+1)  : ""}
      </a>
    );
  };

  const goToPrevPage = () => {
    if (currentPage > 0) {
      setPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < numPages - 1) {
      setPage(currentPage + 1);
    }
  };

  const renderPrevPageBlocks = () => {
    return (
      <Fragment>
        <a key="prev-page" onClick={goToPrevPage}>&#8592;</a>
      </Fragment>
    )
  };

  const renderNextPageBlocks = () => {
    return (
      <Fragment>
        <a key="next-page" onClick={goToNextPage}>&rarr;</a>
      </Fragment>
    )
  };

  return (
    <div class="pagination" >
    <span class="prev"> {renderPrevPageBlocks()}</span> 
 Showing <span class="pagenum">{renderPageBlocks()} </span>of<span class="pagenum"> {numPages}</span> results
     <span class="next"> {renderNextPageBlocks()}</span> 
    </div>
  );
}

export default TablePagination;