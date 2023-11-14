import { useCensusStore } from "./store/census"
import renderCard from '../src/constants/RenderCard'
import Loading from "./components/Loading"
import SelectModal from './components/SelectModal'
import SearchBar from "./components/SearchBar"
import HeaderPage from "./components/HeaderPage"
import { useEffect } from "react"
function App() {
  const fetchCensus = useCensusStore (state => state.fetchCensus)
  const census = useCensusStore (state => state.census)
  const isLoading = useCensusStore (state => state.isLoading)
  const isFiltered = useCensusStore (state => state.isFiltered)
  const filteredData = useCensusStore (state => state.filteredData)
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
                <SelectModal/>
                </div>
              </div>
            </div>
        </section>
        <section className='flex flex-col justify-center gap-4 bg-white p-4 w-4/6 rounded-md dark:bg-dark_secction'>
          {isLoading ? (<Loading/>) : ( isFiltered ? 
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
