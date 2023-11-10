import { useCeunsusStore } from "./store/census"
import Card from "./components/Card"
import Loading from "./components/Loading"
import SearchBar from "./components/SearchBar"
function App() {

  const fetchCensus = useCeunsusStore (state => state.fetchCensus)
  const census = useCeunsusStore (state => state.census)
  const isLoading = useCeunsusStore (state => state.isLoading)
  const isFiltered = useCeunsusStore (state => state.isFiltered)
  const filteredByName = useCeunsusStore (state => state.filteredByName)
  fetchCensus()
return (
  <>  
  <div>
    <SearchBar/>
  { isLoading ? 
  census.map((item, index) => (
              <Card
                key={index}
                name={item.name}
                distrito={item.districte}
                seccion={item.seccion}
                numeroI={item.numberI}
                numeroF={item.numberF}
              />
            ))  :  <Loading/>}      
  </div>
  </>
  )
}

export default App
