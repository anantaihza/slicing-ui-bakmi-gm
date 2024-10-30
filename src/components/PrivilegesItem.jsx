import React from 'react';

export default function PrivilegesItem({path, title, date}) {
  return (
    <button className="flex flex-col justify-between shadow-[0px_2px_4px_2px_rgba(0,_0,_0,_0.1)] rounded-lg">
      <div className="">
        <img src={path} className='rounded-t-lg' alt="" />
      </div>
      <div className="p-4 text-left">
        <h4 className="font-black text-lg">{title}</h4>
        <p className='mt-2 text-sm text-subText'>Exp. {date}</p>
      </div>
    </button>
  );
}
