import { useCensusStore } from "../store/census";
export default function SelectModal(props) {
    const {list, property} = props;
    const {setFilter, applyFilters} = useCensusStore();
    function getAndApplyFilter (e, property){
      const res = e.target.value     
      setFilter(property, res)
      applyFilters()
     }
    return (
      <>
    <div className="flex bebas_font items-center w-3/6 text-lg border-2 dark:border-dark_white border-black p-4 rounded-lg t-bold ">
    <select
      onChange={(e) => getAndApplyFilter(e, property)}
      id="lang"
    className="flex-grow bg-transparent focus:outline-none rounded-none ">
      <option disabled selected>{property}</option>
      {list.map((y, index)=> {return(
          <option key={index} value={y}>{y}</option>
      )})}
    </select>
  
  </div>
      </>
    );
  }