import React from 'react'
import { SideBar } from '../components/common/SideBar'

const Home = () => {
  return (
    <div className="flex">
      <SideBar />
      <div className="w-full bg-gray-200">
        <h1>Hola mundo!</h1>
      </div>
    </div>
  )
}

export default Home
