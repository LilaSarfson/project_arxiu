import { useCensusStore } from '../store/census'
export default function SearchBar() {
  const {setFilter, applyFilters } = useCensusStore();
  function handleChange(e){
    const name = e.target.value
    setFilter('name', name)
    applyFilters()
  }
    return (
      <div>
        <div className=" dark:border-white dark:text-black rounded-md flex w-full items-center border border-2 border-black p-2">
          <svg className="text-gray-400 w-6 mr-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.5 14H14.71L14.43 13.73C15.61 12.54 16.25 11.04 16.25 9.5C16.25 5.91015 13.0899 3.125 9.5 3.125C5.91015 3.125 2.875 6.16015 2.875 9.75C2.875 13.3399 5.91015 16.375 9.5 16.375C11.04 16.375 12.54 15.7501 13.73 14.56L14 14.29V15.08L19.25 20.3301L20.6602 18.9199L15.41 13.6701L15.5 14ZM9.5 14.5C6.41987 14.5 4 12.0801 4 9C4 5.91987 6.41987 3.5 9.5 3.5C12.5801 3.5 15 5.91987 15 9C15 12.0801 12.5801 14.5 9.5 14.5Z" fill="currentColor"/>
          </svg> 
          <input onChange={handleChange}type="text" className="p-2 flex-grow bg-white dark:bg-dark_white focus:outline-none" placeholder="What adress?"></input>
        </div>
  
      </div>
    );
  }
  