import React from 'react'

const LoadingDashboard = () => {
  return (
    <div className='w-full h-[100vh] '>
        <InfinitySpin
  visible={true}
  width="200"
  color="#4fa94d"
  ariaLabel="infinity-spin-loading"
  />
    </div>
  )
}

export default LoadingDashboard