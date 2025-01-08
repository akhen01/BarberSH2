import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import Menu from "../../assets/menu-bar-2.png"
import Logo from "../../assets/Logo.png"
function Header() {

    const [isOpen, setIsOpen] = useState(false)

    const navItems = [
        {
            name: "Home",
            slug: "#intro",
        },
        {
            name: "Team",
            slug: "#about",
        },
        {
            name: "Our Service",
            slug: "#ourService",
        },
    ]
   return (
    <header className='fixed top-0 w-full border-bgCutsom z-50 px-4 text-gray-500'>
        
            <nav className='flex'>
                <div className='mr-4'>
                  <img className="hidden sm:block w-10 h-10 ml-2" src={Logo} alt="Logo" />
                </div>
                <ul className='hidden ml-auto sm:flex space-x-8'>
                    {
                        navItems.map((navItem) => (
                                <li key={navItem.name}>
                                  
                                  <NavLink
                                  className="inline-block px-6 py-2 relative font-semibold text-lg sm:hover:text-gray-900 transition duration-300 group"
                                  to={navItem.slug}>
                                    {navItem.name}
                                </NavLink>
                               
                                </li>
                            
                        ))
                    }
                </ul>
                <ul className='flex w-full items-center justify-between sm:hidden'>
                    <li>
                      <img className="w-12 h-12 opacity-100" src={Logo} alt="" />
                    </li>
                    <li> 
                      <button onClick={()=>setIsOpen(true)}>
                      <img className="bg-white rounded-lg border border-e-8 shadow w-8 h-8 mr-3" src={Menu} alt="" />
                      </button>
                      
                    </li>
                </ul>
                {isOpen && (
              <div className="fixed inset-2 bg-bgCutsom bg-opacity-90 flex flex-col items-center justify-center z-40 overflow-hidden h-svh">
                <button onClick={()=>setIsOpen(false)} className='text-black text-2xl absolute right-5 top-5'>X</button>
                {
                        navItems.map((navItem) => (
                                <li className="list-none" key={navItem.name}>
                                  <button onClick={()=>setIsOpen(false)}>
                                    <NavLink
                                      className="inline-block py-6 relative text-gray-600 font-semibold text-3xl sm:hover:text-gray-900 transition duration-300 group"
                                      to={navItem.slug}>
                                        {navItem.name}
                                    </NavLink>
                                  </button>
                                </li>
                            
                        ))
                    }

              </div>
      )}
            </nav>
    </header>
  )
}

export default Header


