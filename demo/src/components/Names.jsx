import React from 'react'

const Names = ({name,nickname}) => {
  return (
    <div className='bg-success'>
        <h2 >{name}</h2>
        <h4>Nickname:{nickname}</h4>
    </div>
  )
}

export default Names