import React from 'react';

export default function OutletItem({name, address, range}) {
  return (
    <button className='border-b-2 py-3 text-left w-full'>
      <h4 className="text-lg font-medium">{name}</h4>
      <p className='text-sm text-subText'>{address}</p>
      <div className="flex gap-4 items-center mt-1 text-subText">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
          />
        </svg>
        <p className='text-sm'>{range} km</p>
      </div>
      
    </button>
  );
}
