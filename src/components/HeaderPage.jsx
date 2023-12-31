import DarkModeToggle from '../components/DarkModeToggle'
export default function HeaderPage(){
    return(
        <section className='flex flex-row'>
            <div className='flex flex-row w-full items-center gap-4 justify-start ml-6 h-4'>
                <h1 className="text-5xl bebas_font">Arxiu <span className='text-yellow_logo dark:text-purple_logo'>search</span></h1>
                <DarkModeToggle/> 
            </div>
        </section>
    )
}