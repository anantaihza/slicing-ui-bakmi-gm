import React from 'react'

export default function FeaturesItem({img, title, bg}) {
  return (
    <button className='flex flex-col justify-center items-center'>
      <div className={`w-16 h-16 rounded-full ${bg} flex justify-center items-center`}>
        <img className='w-10' src={img} alt={title} />
      </div>
      <h6 className='mt-2 text-xs text-primaryText'>{title}</h6>
    </button>
  )
}
