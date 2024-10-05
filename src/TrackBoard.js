import React from 'react'
import Card from './Components/Card'
const TrackBoard = () => {
  return (
     <div className='basis-11/12 bg-white grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 place-items-center'>
        <Card />
        <Card />
        <Card />
        <Card />
      </div> 
  )
}

export default TrackBoard
