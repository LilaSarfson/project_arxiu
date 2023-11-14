// import logo from '../../assets/logo.png'
// import DarkModeToggle from '../smarts/DarkModeToggle'
export default function HeaderPage(props){
    return(
        <div className='flex flex-row w-full items-center gap-4 justify-start ml-6 h-4'>
            {/* <img className='w-12' src={logo}></img> */}
            <h1 className="text-5xl">Arxiu <span className='text-azul_logo'>search</span></h1>
            {/* <DarkModeToggle/> */}
        </div>
    )
}