import React from 'react'
import { Audio } from  'react-loader-spinner'

export const Loading = () => (
  <div className="flex justify-center items-center ">
    <Audio   height="100"
    width="100"
    color='grey'
    ariaLabel='loading' />
  </div>
);