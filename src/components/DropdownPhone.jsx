import { React, useEffect, useState } from "react";
import axios from "axios";
const DropdownPhone = () => {
  let [country, setCountry] = useState();
  const countryData = []; 
  useEffect(()=>{
     api()
  },[])

  const api =async()=>{
   const data = await fetch('../../file.json'); 
   const dataJSON = await data.json()
   setCountry(await dataJSON)

  }
  const select = ()=>{
    console.log(country[0].phone_code)
    const select = document.getElementById('select')
    const paises = country.map((pais) =>
         `<option value${pais.iso3} >${pais.iso3} +${pais.phone_code} </option>`
    )
    
      
    const final = paises.map(option => option.replace(/"/g, ''));
    final.sort(); 

    select.innerHTML = final
    
  }
  return(
    <>
    <div className="flex" >
    <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="" id="select" onFocus={select} >
      <option value="">código</option>
    </select>
    <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-3/4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  type="text" />
    </div>
    </>
  )
 
  
};

export default DropdownPhone;
