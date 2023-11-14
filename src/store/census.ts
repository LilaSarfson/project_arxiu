import {create} from 'zustand'
import {Census} from './type'
import {includesFunction, filterFunction} from '../utils/utils'
interface State {
    census: Census []
    fetchCensus: ()=> Promise<void>
    filterByname: ()=>{}
    filterByPick: ()=>{}
    filteredData: Census []
    isLoading: boolean
    isFiltered: boolean
    isFilteredName: boolean
    isFilteredDistricte: boolean
    nameState: string
    districteState: string
 }
 export const useCensusStore= create<State>((set, get) => {
    return{
        isLoading: true,
        isFiltered: false,
        isFilteredName:false,
        isFilteredDistricte: false, 

        fetchCensus: async ()=> {
            const res = await fetch('http://localhost:5173/src/mocks/census.json')
            const json = await res.json()
            set({census: json})
            set({isLoading: false})
            },

        filterByProperty: (property: string, name: string)=>{
            set({nameState: name})
            const censusState = get().census
            const filteredStatus = get().isFilteredDistricte
            const filteredDataState = get().filteredData
            {filteredStatus ? 
            set({filteredData:includesFunction(filteredDataState, property, name)}) : 
            set({filteredData:includesFunction(censusState, property, name)})
            set({isFilteredName: true})}
            set({isFiltered:true})
            },

        filterByPick: (property: string, parameter:string)=> {
            set({districteState:parameter })
            const censusState = get().census
            const isFilteredName = get().isFilteredName
            const filteredDataState = get().filteredData
            {isFilteredName  ?
                set({filteredData:filterFunction(filteredDataState, property, parameter)}) : 
                set({filteredData:filterFunction(censusState, property, parameter)})
                set({isFiltered:true})
                set({isFilteredDistricte: true})}
                }  
        }
    }   
)

