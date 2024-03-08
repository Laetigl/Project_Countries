import React, { useEffect } from 'react'
import { useContext } from 'react'
import { countryContext } from '../App'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

export default function CountryChild() {
    const {data, setData} = useContext(countryContext)
    const {id} = useParams()
    
    // useEffect(()=>{
    //     setData(countryContext)
    // }, [])
    const dataCountry = data[id]
    // console.log('salut',data);

  return (
    <div className='w-screen flex flex-col gap-[20px] justify-center items-center p-[20px]'>
        <div className='flex justify-center items-center'>
        <Link to={`/`}>
            <button className='border border-black font-[Barlow] bg-slate-300 p-[20px] justify-start items-start'>Back to countries</button>
        </Link>
        </div>
        <div className='flex flex-col w-[90%] justify-center items-center'>
            <div className='flex justify-center w-[50%]'>
                <img className='w-[130px] h-[100px] rounded-lg border border-black' src={dataCountry.flags.png} alt=""/>
            </div>
            <div className='flex flex-col justify-center items-center gap-[10px]'>
                <h1 className='w-[70%] text-[30px] text-center'>{dataCountry.name.common}</h1>
                
                <div className='flex flex-col border border-black p-[30px] gap-[5px]'>
                    <p>Official name: {dataCountry.name.official}</p>
                    <p>Population : {dataCountry.population}</p> 
                    <p>Region : {dataCountry.region}</p>
                    <p>Sub Region : {dataCountry.subregion}</p>
                    <p>Capital : {dataCountry.capital}</p>
                    <p>Top Level Domain : {dataCountry.tld}</p>
                    <p>Currencies: </p>
                    <p></p>
                    {/* {Object.keys(dataCountry.currencies).map((key, index)=>(
                        <li>{dataCountry.currencies[key]}</li>
                    ))} */}
                    
                    {/* <p>Languages:</p>
                    {Object.values(dataCountry.languages).map((key, index)=>(
                        <li key={index}>{dataCountry.languages[key]}</li>
                    ))} */}
                </div>
            </div>
        </div>
        <div>
            <h1>Border Countries: </h1>
        </div>
    </div>
  )
}