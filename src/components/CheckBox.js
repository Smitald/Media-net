import React, { useState, Fragment } from 'react';


const CheckBox = ({ setValue, placeholder}) => {
  const [query, setQuery] = useState('');
 
  const typeArray=[
    {id:1,type:"Small"},
    {id:2,type:"Medium"},
    {id:3,type:"Large"},
    {id:4,type:"Heliport"},
    {id:5,type:"Closed"}
  ]
  
  const handleFilterChange = e => {
  
  if(e.target.checked){
    setValue(e.target.value)

  }
    else
    setValue(query)

  }
  return (
    typeArray.map(filter=>(
      <Fragment>
      <input type="checkbox"
      id={filter.id}
        value={filter.type}
        placeholder={placeholder}
        onClick={handleFilterChange}
      
      />
    <label htmlFor={filter.id}>{filter.type}</label>

   
    </Fragment>
    ))
 
  );
}

export default CheckBox;
