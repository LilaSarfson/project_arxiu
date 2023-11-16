export default function CardHeader (props){
    const {name, dist, seccion, number} = props
    return(
    <ul className="grid grid-cols-10 justify-end gap-2 font-bold wix_font">
        <li className="col-span-7">{name}</li>
        <li className="col-span-1">{dist}</li>
        <li className="col-span-1">{seccion}</li>
        <li className="col-span-1">{number}</li>
    </ul>

)}