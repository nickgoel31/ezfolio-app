import React from 'react'

const AITest = () => {
  const handleClick = () => {
    console.log('clicked')
  }
  return (
    <div onClick={handleClick}>AITest</div>
  )
}

export default AITest