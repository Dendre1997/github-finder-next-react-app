// import React from 'react'
// import Lottie from 'lottie-react'
// import RocketLoading from './assets/RocketLoading.json'
export default function Spinner() {
  return (
      <div className="w-100 mt-20">
      <img width={180} className='text-center mx-auto' src='/assets/spinner.gif' alt="Loading Spinner" />
      {/* <Lottie animationData={RocketLoading} /> */}
    </div>
  )
}
