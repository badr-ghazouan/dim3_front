import React, { useState, useEffect } from 'react'
import { useQuery } from 'react-query';
import data from '../Patients.json';
import axios from 'axios';
import {getPatients} from '../actions'
import { Link } from "react-router-dom";



function Patients() {

  const PAGE_SIZE = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const endIndex = startIndex + PAGE_SIZE;
  const maxPage = Math.ceil(data.length / PAGE_SIZE);

  let currentItems =  data.slice(startIndex, endIndex)

  const fetchData = async (key, page = 1) => {
    const start = (page - 1) * PAGE_SIZE;
    const end = page * PAGE_SIZE;
    return {
      data: data.slice(start, end),
      hasMore: end < data.length,
    };
  };

  const { data: items, status, isError } = useQuery(
    'data',
    fetchData
  );

 

  useEffect(() => {
      getPatients()
      .then((res) => currentItems = res.data?.content)
      .catch(err => {
       console.log('error : ', err.message)
  }).finally(()=> {
    currentItems = data.slice(startIndex, endIndex)
  })
  }, []);

  if (status === 'loading') return <div>Loading...</div>;
  if (status === 'error') return <div>Error fetching data</div>;


 
  const handlePreviousPage = () => {

    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < maxPage) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  


  return (
    <div>
      <p> patients </p>


      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Id
              </th>
              <th scope="col" className="px-6 py-3">
                firstName
              </th>
              <th scope="col" className="px-6 py-3">
                lastName
              </th>
            </tr>
          </thead>
          <tbody>
            {currentItems?.map((item, index) => (

              <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">

                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <Link  to={`../details/${item.id}`} relative={item.id}>{item.id}</Link>

                  
                </th>
                <td className="px-6 py-4">
                  {item.firstName}
                </td>
                <td className="px-6 py-4">
                  {item.lastName}
                </td>
              </tr>
            ))}

          </tbody>

        </table>

        <button  onClick={() => handlePreviousPage() } disabled={currentPage === 1}>
          Previous
        </button>
        <button onClick={() => handleNextPage() }  disabled={currentPage === maxPage} >
          Next
        </button>
      </div>

    </div>
  )
}

export default Patients