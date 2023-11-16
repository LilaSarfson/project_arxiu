import { useCensusStore } from "./store/census"
import renderCard from '../src/constants/render-card'
import Loading from "./components/Loading"
import SelectModal from './components/SelectModal'
import SearchBar from "./components/SearchBar"
import HeaderPage from "./components/HeaderPage"
import CardHeader from './components/CarHeader'
import {DISTRICTE_LIST, YEARS_LIST, FILTERS_LIST} from '../src/constants/selector-data'
import {refreshPage} from '../src/utils/utils'
import { useEffect} from "react"
function App() {
  const {filteredData, isLoading, census, fetchCensus} = useCensusStore();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchCensus();
      } catch (error) {
        console.log('vaya hay un error en el fecth')
      }
    };
    fetchData();
  }, []); 

  return (
  <>  
  <div className='min-h-screen relative m-auto flex flex-col gap-6 items-center bg-fondo dark:bg-dark_bg dark:text-dark_white'>
     <section className=' w-full flex flex-col gap-4'>
            <div className='w-4/6 m-auto flex flex-col gap-8'>
              <header className='w-full mt-8'>
              <HeaderPage
                />
              </header>
              <div className='flex flex-col justify-center bg-white p-4 rounded-md mb-6 w-full dark:bg-dark_secction'>
                <SearchBar/>
                <div className='flex flex-row gap-4 p-4 justify-center'>
                <SelectModal property={FILTERS_LIST[0]} list={DISTRICTE_LIST}/>
                <SelectModal property={FILTERS_LIST[2]} list={YEARS_LIST}/>
                <button onClick={refreshPage} className="border-2 border-black p-4 w-4/6 rounded-md">Clear all</button>
                </div>
              </div>
            </div>
      </section>
        <p className={`${filteredData === undefined || filteredData.length !=0  ? 'hidden' : 'block'}`}>Vaya no se encontro nada </p>
      <section className='flex flex-col justify-center gap-4 bg-white p-4 w-4/6 rounded-md dark:bg-dark_secction'>
        <CardHeader name={FILTERS_LIST[1]} dist={FILTERS_LIST[0]} seccion={FILTERS_LIST[3]} number={FILTERS_LIST[4]}/>
          {isLoading ? (<Loading/>) : ( filteredData != undefined ? 
          renderCard(filteredData)
          :
          renderCard(census))
          }
       </section>
  </div>
  </>
  )
}

export default App
