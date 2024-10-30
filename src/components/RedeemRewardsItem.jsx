import React from 'react';

export default function RedeemRewardsItem({title, points, image}) {
  return (
    <button className="shrink-0 flex flex-col justify-between gap-4 mr-5">
      <img
        src={image}
        className="w-44 rounded-lg shadow-[0px_2px_4px_2px_rgba(0,_0,_0,_0.1)]"
        alt=""
        draggable="false"
      />
      <div className="px-2 text-left">
        <h5 className="font-black text-sm capitalize">{title}</h5>
        <h5 className="font-black text-sm text-secondaryText capitalize">{points} Pts</h5>
      </div>
    </button>
  );
}
