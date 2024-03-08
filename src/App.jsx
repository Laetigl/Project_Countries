import { useState, useEffect, useContext, createContext } from 'react'
import './App.css'
import CountryParent from './components/CountryParent'
import CountryChild from './components/CountryChild'
import {  RouterProvider, createBrowserRouter } from "react-router-dom"
export const countryContext = createContext(null)
import axios from 'axios'

function App() {
  const[data, setData] = useState([])
  const[darkmode,setDarkMode] = useState(true)

  useEffect(() => {
      axios.get('https://restcountries.com/v3.1/all')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  
    },[]);

  const router = createBrowserRouter([
    {
      path:'/Project_Countries/', 
      element:(
        <countryContext.Provider value={{data, setData, darkmode,setDarkMode}}>
          <CountryParent></CountryParent>
        </countryContext.Provider>
        ),
    },
    {
    path:'/country/:id', 
      element:(
      <countryContext.Provider value={{data, setData,darkmode,setDarkMode}}>
        <CountryChild></CountryChild>
      </countryContext.Provider>
      ),
    },
  ])

  return (
   <div>
    <RouterProvider router={router}></RouterProvider>
    {/* <CountryParent></CountryParent> */}
   </div>
  )
}
export default App
