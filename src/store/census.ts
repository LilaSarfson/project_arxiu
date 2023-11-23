import {create} from 'zustand'
import {Census} from './type'
import {includesFunction, filterFunction} from '../utils/utils'
interface State {
    census: Census []
    filteredData: Census []
    fetchCensus: ()=> Promise<void>
    applyFilters: ()=>{}
    setFilter: ()=>{}
    refreshPage: ()=>{}
    isLoading: boolean
    filters: {
        districte: null,
        name: null,
        year: null,
        }
 }
 export const useCensusStore= create<State>((set, get) => {
    const URL = 'http://localhost:5173/src/mocks/census.json'
    return{
        isLoading: true,
        
        fetchCensus: async ()=> {
            const res = await fetch(URL)
            const json = await res.json()
            set({census: json})
            set({isLoading: false})
            },

        setFilter: (filterType: string, value: string) => {
            set((state) => ({
            filters: {
            ...state.filters,
            [filterType]: value !== undefined ? value : null,
                     },
                })
            );
        },    

        applyFilters: () => {
            const { districte, name, year } = get().filters;
            let filteredData= [...get().census]          
            if(districte){
                filteredData = filterFunction(filteredData, 'districte', districte)
            }
            if(name){
                filteredData = includesFunction(filteredData, 'name', name)
            }
            if(year){
                filteredData = filterFunction(filteredData, 'year', year)
            }
            set({filteredData:filteredData})
          }
        }
    }   
)

