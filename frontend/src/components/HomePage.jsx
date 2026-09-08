import React from 'react'
import SideBar from './SideBar'
import MessageContainer from './MessageContainer'

const HomePage = () => {
  return (
    <div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-white-600 text-white bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
      <SideBar/>
      <MessageContainer/>
    </div>
  )
}

export default HomePage
