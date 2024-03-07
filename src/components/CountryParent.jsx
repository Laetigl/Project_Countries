import React, { useContext } from 'react'
import axios from 'axios'
import { useEffect } from 'react';
import { countryContext } from '../App';

export default function CountryParent() {
const {data, setData} = useContext(countryContext)
    useEffect(() => {
        axios.get('https://restcountries.com/v3.1/all')
        .then(response => {
          setData(response.data)
        })
        .catch(error => {
          console.error(error);
        });
    
      },[]);
    
  return (
    <div className='flex justify-center p-[20px]'>
    <div>
      <h1>Where in the world ?</h1>
    </div>
      <div className='flex flex-wrap justify-center items-center gap-4'>
        {
          data && data.map((element, key) => {
            {console.log(element)}
            return(
              
              <div>
                <h1 key={key}>{element.name.common}</h1>
              </div>
            )
            
          })
        }
      </div>
   </div>
  )
}
