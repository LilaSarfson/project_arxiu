export default function WarningMsg (props)
{
    return (
    <div className={`${props.filteredData === undefined || props.filteredData.length !=0  ? 'hidden' : 'block'} bg-red-100 border-t border-b text-center border-red-500 text-red-700 px-4 py-3`} role="alert">
      <p className="font-bold">Ups! It doesn't exist</p>
      <p className="text-sm">Try again with another entry</p>
   </div>
)

}

