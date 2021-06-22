import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import TablePagination from './TablePagination';
import CheckBox from './CheckBox';



const Table = ({ renderRow, entries, header, placeholder = '', textfilterOptions = [], pageLimit }) => {
  const [filter, setFilter] = useState([]);
  const [page, setPage] = useState(0);
  
 

  const doesIncludeEntry = entry => {
    
    return filter.length > 0 ? textfilterOptions.filter(option => entry[option].toString().toLowerCase().includes(filter.toLowerCase())).length > 0 : true;
  };

  const getPaginatedEntries = entries => {
  
    const offset = page * pageLimit;
    return entries.slice(offset, offset + pageLimit);
  }

  const getFilteredEntries = () => {
    return entries.filter(entry => doesIncludeEntry(entry));
  }



  const renderEntries = () => {
    
    return getPaginatedEntries(getFilteredEntries());
  }

  return (
    <div>
         <h1>Filter <span class="grey">airports</span> </h1>

      <table class="filter-container">
      <tr>
        <th>Type</th>
        <th>Filter By Search</th>
      </tr>
      <tr>
      <td>  <CheckBox
      setValue={setFilter}
     /></td>
     <td>  <SearchBar 
        setValue={setFilter}
        placeholder={placeholder}
      /></td>
      </tr>
      </table>
      <table >
        {header}
        {renderEntries().map(entry => renderRow(entry))}
      </table>
      <TablePagination 
        pageLimit={pageLimit}
        pages={getFilteredEntries().length}
        currentPage={page}
        setPage={setPage}
      />
    </div>
  )
}

export default Table;