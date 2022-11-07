import React from 'react'
import MiddleSeccion from './MiddleSeccion'
import TechnologySection from './TechnologySection'
import TopSection from './TopSection'
import Works from './Works'


const Layout = () => {
  return (
    <div className='layout'>
        <TopSection/>
        <MiddleSeccion/>
        <TechnologySection/>
        <Works/>
    </div>
  )
}

export default Layout