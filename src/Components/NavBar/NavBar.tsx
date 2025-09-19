import { useState } from "react"
import logo from "../../assets/logo.png"
import { LINKS } from "../../Constants"
import { FaTimes } from "react-icons/fa"
import { FaBars } from "react-icons/fa6"

const NavBar = () => {

    const [isMoblieMenuOpen, setIsMoblieMenuOpen] = useState<boolean>(false)

    const toggleMobileMenu = () => {
        setIsMoblieMenuOpen(!isMoblieMenuOpen)
    }

    const handleScroll = (event: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        event.preventDefault()
        const targetElement = document.getElementById(targetId)
        if (targetElement){
            const offsetTop = targetElement.offsetTop - 80  
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            })
        }

        setIsMoblieMenuOpen(false)
    }

    return (
        <nav className="fixed top-4 z-50 flex flex-col items-center justify-center w-full ">

            <div className="flex items-center justify-between w-full overflow-y-hidden p-4 backdrop-blur-lg lg:w-[50rem] lg:rounded-full lg:shadow-lg ">
                <img src={logo} alt="logo restaurant" width={80} height={22} />

                <div className="hidden space-x-6 md:flex lg:flex">
                    {LINKS.map((link, index) => (
                        <a
                            key={index}
                            href={`#${link.targetId}`}
                            className={`text-sm ${index != 0 ? "border-l-2 border-neutral-300/20 pl-2" : ""} hover:opacity-50`}
                            onClick={(event) => handleScroll(event, link.targetId)}
                        >
                            {link.text}
                        </a>
                    ))}
                </div>

                <div className="lg:hidden md:hidden">
                    <button className="cursor-pointer" onClick={toggleMobileMenu}>
                        {isMoblieMenuOpen ?  <FaTimes /> :<FaBars />}
                    </button>
                </div>
            </div>

            {isMoblieMenuOpen && (
                <div className="lg:hidden md:hidden w-full backdrop-blur-lg">
                    {LINKS.map((link, index) => (
                        <a
                            key={index}
                            href={`#${link.targetId}`}
                            className="uppercase block p-4 tracking-tighter"
                            onClick={(event) => handleScroll(event, link.targetId)}
                        >
                            {link.text}
                        </a>
                    ))}
                </div> 
            )}
        </nav>
    )
}

export default NavBar
