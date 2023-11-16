import {DISTRICTE_LIST} from '../constants/selector-data'
import { useCensusStore } from "../store/census";
export default function SelectModal(props) {
  const {setFilter, applyFilters} = useCensusStore();

  const handleChange = (e)=>{
    const res = e.target.value
    setFilter('districte', res)
    applyFilters()
  }
    return (
      <>
    <div className="flex bebas_font items-center w-3/6 text-lg border-2 dark:border-dark_white border-black p-4 rounded-lg t-bold ">
    <select
      onChange={handleChange}
      id="lang"
    className="flex-grow bg-transparent focus:outline-none rounded-none ">
      <option disabled selected>{props.header}</option>
      {DISTRICTE_LIST.map((y, index)=> {return(
          <option key={index} value={y}>{y}</option>
      )})}
    </select>
  
  </div>
      </>
    );
  }