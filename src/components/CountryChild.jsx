import React, { useEffect } from 'react'
import { useContext } from 'react'
import { countryContext } from '../App'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import arrow from "../images/arrow.png"
import arrowblack from "../images/arrowblack.png"

export default function CountryChild() {
    const {data, setData} = useContext(countryContext)
    const {id} = useParams()
    const dataCountry = data[id]
    const {darkmode, setDarkMode} = useContext(countryContext)


  return (
    <div className={`w-screen flex flex-col gap-[20px] justify-center items-center p-[20px] h-screen ${!darkmode ? "bg-black" : "bg-[white]"} transition-colors duration-700 flex flex-col w-screen`}>
        <button onClick={()=> darkmode == false? setDarkMode(true): setDarkMode(false)} className={`${!darkmode? "bg-black text-white border border-[white]":"bg-white text-black border border-black"} absolute top-[10px] right-[30px] rounded-[40px] w-[100px] h-[30px] font-[Country] mt-[10px] ms-[10px]`}>Dark Mode</button>
        <div className='flex justify-center items-center'>
        <Link to={`/`}>
            <button className={`font-[Barlow] justify-start rounded-lg flex items-center gap-[5px] pt-[90px] ${!darkmode?"text-white":"text-black"}`}>
            <img className= {`w-[30px]`} src={arrow} alt="" />
            Back to countries</button>
        </Link>
        </div>
        <div className='flex flex-col justify-center items-center w-[95%] gap-[20px]'>
            <div className='flex justify-center w-[50%]'>
                <img className='w-[100%] h-[150px] lg:h-[280px] rounded-lg border border-black' src={dataCountry.flags.png} alt=""/>
            </div>
            <div className={`flex flex-col justify-center items-center gap-[15px] w-[95%] text-center`}>
                <div className='font-[Barlow] tracking-[5px] text-[40px] text-center justify-center items-center'>
                    <h1 className={`w-[70%] text-center justify-center items-center ${!darkmode?"text-white":"text-black"}`}>{dataCountry.name.common}</h1>
                </div>
                <div className={`flex flex-col p-[10px] gap-[5px] w-[90%] justify-center  shadow-md ${!darkmode? "bg-black text-white border border-[white]":"bg-white text-black border border-black "} items-start m-[5px]`}>
                    <div className='flex'>
                        <p className='font-[Country]'>Official name : </p>
                        <p className='text-gray-500 font-sans ps-[5px]'>{Object.values(dataCountry.name.nativeName)[0].official}</p>
                        
                    </div>
                    <div className='flex'>
                        <p className='font-[Country] '>Population : </p>
                        <p className='text-gray-500 font-sans ps-[5px]'>{dataCountry.population} people</p>
                      
                    </div>
                    <div className='flex'>
                        <p className='font-[Country]'>Region : </p>
                        <p className='text-gray-500 font-sans ps-[5px]'>{dataCountry.region}</p>
                    </div>
                    <div className='flex'>
                        <p className='font-[Country]'>Sub Region : </p>
                        <p className='text-gray-500 font-sans ps-[5px]'>{dataCountry.subregion}</p>
                    </div>
                    <div className='flex'>
                        <p className='font-[Country]'>Capital : </p>
                        <p className='text-gray-500 font-sans ps-[5px]'>{dataCountry.capital}</p>
                    </div>
                    <div className='flex'>
                        <p className='font-[Country]'>Top Level Domain : </p>
                        <p className='text-gray-500 font-sans ps-[5px]'>{dataCountry.tld}</p>
                    </div>
                    <div className='flex'>
                        <p className='font-[Country]'>Currencies: </p>
                        <p className='text-gray-500 font-sans ps-[5px]'>{Object.values(dataCountry.currencies)[0].name}</p>  
                    </div>
                    <div className='flex'>
                        <p className='font-[Country]'>Languages: </p>
                        <p className='text-gray-500 font-sans ps-[5px]'>{Object.values(dataCountry.languages)[0]}</p>  
                    </div>
                </div>
            </div>
        </div>
        <div>
            <h1 className='font-[Barlow]'>Border Countries: </h1>
        </div>
    </div>
  )
}