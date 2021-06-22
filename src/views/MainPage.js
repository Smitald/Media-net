import React, { useEffect, useState } from 'react';
import { getAirports } from '../apis/airports';
import Table from '../components/Table';


const MainPage = () => {
 
  const [airports, setAirports] = useState([]);
  const [getFilteredAirports, setFilteredAirports] = useState([]);
 
  useEffect(() => {
    getAirports().then(data => {
      const sortData = data.sort((a, b) => (a.name > b.name) ? 1 : -1)
      setAirports(sortData);
      setFilteredAirports(sortData);
    });
  }, []);

 
  const headerOptions = [
    {
      id: "name",
      accessor:"Name"
    },
    {
      id: "icao",
      accessor:"ICAO"
    },
    {
      id: "iata",
      accessor:"IATA"
    },
    {
      id: "elevation",
      accessor:"Elev."
    },
    {
      id: "latitude",
      accessor:"Lat."
    },
    {
      id: "longitude",
      accessor:"Long."
    },
    {
      id: "type",
      accessor:"Type"
    }];


       

  const generateRow = row => {
    return (
      <tr key={row.id}>
        {headerOptions.map(field => (
          <td >
            {row[field.id]}
          </td>
        ))}
      </tr>
    )
  };

  const header = (
    <tr>
      {headerOptions.map(header => (
        <th >
          {header.accessor}
          {header.filterOptions && (
            <div>
              {header.filterOptions()}
            </div>
          )}
        </th>
      ))}
    </tr>
  );

  return (
  
      <Table
        renderRow={row => generateRow(row)}
        entries={getFilteredAirports}
        header={header}
        placeholder="Search"
        textfilterOptions={['name','icao','iata','elevation','latitude','longitude','type']}
        pageLimit={4}
      />
   
  )
}

export default MainPage;