import React, { useContext, useState } from 'react'
import { useEffect } from 'react';
import { countryContext } from '../App';
import search from "../images/search.png"
import globe from "../images/globe.png"
import CountryChild from './CountryChild';
import { Link } from 'react-router-dom';

export default function CountryParent() {
//Importer l'API avec axios:
const {data, setData} = useContext(countryContext)
const {darkmode, setDarkMode} = useContext(countryContext)
console.log(data)
//Barre de recherche:
const [inputSearch, setInputSearch] = useState("")

const [selectedRegion,setSelectedRegion] = useState("All")
const [filterRegion, setFilterRegion]= useState(data)

// useEffect(() => {
//     let filter = data.filter((element) => {
//         element.region)
    
//     setFilterRegion(data)

// }, [selectedRegion]);

const handleAdd=(e)=>{
    setSelectedRegion(e.target.value)
}
  return (
    <div className={`${!darkmode ? "bg-black" : "bg-[white]"} transition-colors duration-700 flex flex-col w-screen`}> 
        <button onClick={()=> darkmode == false? setDarkMode(true): setDarkMode(false)} className={`${!darkmode? "bg-black text-white border border-[white]":"bg-white text-black border border-black"} absolute top-[10px] right-[30px] rounded-[40px] w-[100px] h-[30px] font-[Country] mt-[10px] ms-[10px]`}>Dark Mode</button>
    
        <div className='flex flex-col justify-center gap-[20px] p-[10px]'>
        <div className='flex flex-col justify-center items-center'>
        <h1 className={`text-[40px] font-[Barlow] tracking-[2px] text-center ${!darkmode? " text-white": "text-black"} pt-[70px]`}>Where country do you want to visit ?</h1>
        <img src={globe} className='w-[85px] h-[85px]' alt="" />
        </div>

        {/* Searchbar */}
        <div className='flex justify-center items-center gap-[20px] ps-[20px]'>
        <div className="self-center flex justify-center items-center relative">
            <div className='flex bg-white w-[170px] h-[40px] p-[5px] border border-b-slate-400 rounded-[20px] text-center'>
                <img src={search} className='w-[25px] h-[25px]' alt="" />
                <input 
                    type="text" 
                    placeholder='Search for a country' 
                    className='w-[80%] bg-transparent border-none text-center text-[12px] focus:outline-0'
                    value={inputSearch}
                    onChange={(e) => setInputSearch(e.target.value)}
                />
                {/* Drop down des pays: */}
                <div className={`absolute w-[100%] h-[106px] top-[50px] left-[5px] overflow-x-scroll`}>
                    {data && data.map((element, key) => {
                        return(
                            <Link to={`/country/${key}`}>
                            {
                                element.name.common.toLowerCase().includes(inputSearch.toLowerCase())?
                                <p className={`font-[Country] tracking-[3px] text-center border border-black ${!darkmode? "bg-white hover:bg-[#f3eae3]":"backdrop-blur-md hover:bg-[#f3eae3]"} `}>{element.name.common}</p>
                                : " "
                            }
                            </Link>
                        )
                    })}
                </div>
            </div>
        </div>
        <div>
        <select className="select select-bordered w-[full] max-w-xs" onChange={(e) => handleAdd(e)} value={selectedRegion}>
            <option disabled selected value="All" >Filter by Region</option>
            <option value="Africa" >Africa</option>
            <option value="America" >America</option>
            <option value="Asia" >Asia</option>
            <option value="Europe" >Europe</option>
            <option  value="Oceania" >Oceania</option> 
        <div>
        {/* {data && data.map((element, key) => {
            return(
                element.continents.toLowerCase().includes(selectedRegion.toLowerCase())?
                <p>{element.name}</p>
                : " "  
                )    
        })} */}
        </div>
        
        </select>
        </div>
        <div>
           
        </div>
        
        </div>
        {/* Countries */}
        <div className='flex flex-wrap justify-center items-center gap-4'>
            {
            data && data.map((element, key) => {
                return(
                <Link to={`/country/${key}`}>
                <button 
                    key={key} 
                    className={`flex flex-col flex-wrap w-[250px] h-[300px] justify-center items-center rounded-lg gap-[10px] duration-[0.3s] hover:-translate-y-3 hover:border-[5px] hover:border-[#709fdb] shadow-xl
                    ${!darkmode? "bg-black text-white border border-[white]":"bg-white text-black border border-black "} items-end m-[5px]`}
                    >
                    <img className='w-[130px] h-[100px]' src={element.flags.png} alt="" />
                        <h1 className='font-[Country] tracking-[5px] font-bold text-[20px]'>{element.name.common}</h1>
                    <div className='flex justify-start gap-[10px]'>
                        <div>
                            <h3 className='font-[Country] text-[15px] underline tracking-[1px]'>Population 
                            </h3>
                            <p className='font-[Country] text-[13px] tracking-[1px]'>{element.population}</p>
                        </div>
                        <div>
                            <h3 className='font-[Country] text-[15px] underline tracking-[1px]'>Region</h3>
                            <p className='font-[Country] text-[13px] tracking-[1px]'>{element.region}</p>
                        </div>
                        <div>
                            <h3 className='font-[Country] text-[15px] underline tracking-[1px]'>Capital</h3>
                            <p className='font-[Country] text-[13px] tracking-[1px]'>{element.capital}</p>
                        </div>
                    </div>
                </button>
                </Link>
                )   
            })
            }
        </div>
    </div>
   </div>
  )
}