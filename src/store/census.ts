import {create} from 'zustand'
import {Census} from './type'
interface State {
    census: Census []
    fetchCensus: ()=> Promise<void>
    filterByname: ()=>{}
    filteredByName: Census []
    isLoading: boolean
    isFiltered: boolean
 }
 export const useCeunsusStore= create<State>((set, get) => {
    return{
        isLoading: false,
        isFiltered:false,
        fetchCensus: async ()=> {
            const res = await fetch('http://localhost:5173/src/mocks/census.json')
            const json = await res.json()
            set({census: json})
            set({isLoading: true})
            },

        filterByname: (name: string)=>{
            const censusState = get().census
            const filteredData = censusState.filter((item) =>
            item.name.toLowerCase().includes(name.toLowerCase())
          );
          set({filteredByName:filteredData})
          set({isFiltered: true})
        }    
        
        }
    }   
)

