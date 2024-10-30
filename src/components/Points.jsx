import React from 'react';

export default function Points() {
  return (
    <div className="mt-8 px-5 py-3 xl:px-10 rounded-sm shadow-[0px_2px_4px_2px_rgba(0,_0,_0,_0.1)] text-primaryText">
      <div className="flex justify-between items-center">
        <h5 className="font-black text-sm">Bakmi GM Points</h5>
        <h5 className="font-black text-sm uppercase">40</h5>
      </div>
      <p className="text-subText text-sm">
        <b>40</b> will expire on <b>22 Feb 2024</b>.{' '}
        <a className="font-bold text-linkText underline hover:text-secondaryText" href="">
          See Details
        </a>
      </p>
    </div>
  );
}
