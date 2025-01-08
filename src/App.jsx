import './App.css'
import Header from "./components/Heafoo/Header"
import Footer from "./components/Heafoo/Footer"
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <div className="flex flex-wrap content-between">
        <div className="w-full block h-dvh">
            <Header />
            <main className=''>
                <Outlet />
            </main>
        </div>
    </div>
  )
}

export default App
