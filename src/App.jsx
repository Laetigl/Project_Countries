import { useState, useEffect, useContext, createContext } from 'react'
import './App.css'
import CountryParent from './components/CountryParent'
// import {  Route,  RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
export const countryContext = createContext()

function App() {
  const[data, setData] = useState([])

  return (
   <div>
    <countryContext.Provider value={{data, setData}}>
      <CountryParent></CountryParent>
    </countryContext.Provider>

   </div>
  )
}

export default App
