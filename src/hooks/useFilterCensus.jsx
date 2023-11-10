// import { useState } from 'react';
// // import { useGetData } from './useGetData';
// import Census from '../mocks/census.json'
// import { useEffect } from 'react';
// export function useFilterCensus(filterParam){
//   const [data, getData]= useState(Census)
//     // const {dataState} = useGetData(Census)
//     const [filteredData, setFilteredData] = useState([]);
//      useEffect(() => {
//        if (data) {
//          const filteredResults = data.filter(item =>
//            item.name.toLowerCase().includes(filterParam.toLowerCase())
//          );
//          setFilteredData(filteredResults);
//        }
//        else{
//         console.log('algo falla')
//        }
//      }, [filterParam]);
   
//      return filteredData;

 
// }