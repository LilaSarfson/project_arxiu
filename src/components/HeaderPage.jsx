// import logo from '../../assets/logo.png'
import DarkModeToggle from '../components/DarkModeToggle'
export default function HeaderPage(props){
    return(
        <div className='flex flex-row w-full items-center gap-4 justify-start ml-6 h-4'>
            {/* <img className='w-12' src={logo}></img> */}
            <h1 className="text-5xl bebas_font">Arxiu <span className='text-yellow_logo dark:text-purple_logo'>search</span></h1>
            <DarkModeToggle/> 
        </div>
    )
}