import { useEffect, useState } from 'react'
import {
  About,
  Features,
  Footer,
  Hero,
  Navbar,
  Sidebar,
  Testimoni,
} from './components'

function App() {
  const [showSidebar, setShowSidebar] = useState(false)
  const toggleSidebar = () => setShowSidebar(!showSidebar)
  const [scrollNav, setScrollNav] = useState(false)
  const changeNav = () => {
    if (window.scrollY >= 250) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, [])
  return (
    <>
      <Navbar
        toggleSidebar={toggleSidebar}
        showSidebar={showSidebar}
        scrollNav={scrollNav}
      />
      <div className='container mx-auto lg:px-20 px-10'>
        {showSidebar && <Sidebar toggleSidebar={toggleSidebar} />}

        <Hero />
        <About />
        <Features />
      </div>
      <Testimoni />
      <Footer />
    </>
  )
}

export default App
