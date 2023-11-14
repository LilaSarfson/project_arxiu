import { useState } from "react";
import { useCensusStore } from "../store/census";
export default function SelectModal(props) {
  const districteList = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII"];
  const filterByPick = useCensusStore (state => state.filterByPick)
  const handleChange = (e)=>{
    const res = e.target.value
    filterByPick('districte', res)
  }
    return (
      <>
    <div className="flex bebas_font items-center w-3/6 text-lg border border-2 dark:border-dark_white border-black p-4 rounded-lg t-bold ">
    <select
      onChange={handleChange}
      id="lang"
    className="flex-grow bg-transparent focus:outline-none rounded-none ">
      <option disabled selected>{props.header}</option>
      {districteList.map((y, index)=> {return(
          <option key={index} value={y}>{y}</option>
      )})}
    </select>
  
  </div>
      </>
    );
  }