import { useEffect } from "react"

const useSaveLigthsMode= (darkMode) => {
    useEffect(() => {
        document.body.classList.toggle('dark', !darkMode);
        localStorage.setItem("dark", darkMode ? "activated" : "desactivated");
      }, [darkMode]);
}
export default useSaveLigthsMode;
