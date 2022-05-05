import React from 'react'
import "./index.scss"
const Animatetext = ({P}) => {
  return (
    <div className='text-animated'>{P.map((p)=>{
        return<span className='word'>{p}</span>
    })}</div>
  )
}

export default Animatetext