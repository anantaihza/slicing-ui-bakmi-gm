import React from 'react';

export default function Banner() {
  return (
    <div
      className="rounded-lg bg-blue-500 px-5 py-7 xl:px-10 flex justify-between bg-cover bg-center md:min-h-56 lg:min-h-72"
      style={{ backgroundImage: `url("/banner-refer.png")` }}
    >
      <div className="w-1/3 md:w-2/4 lg:w-3/5"></div>
      <div className="text-right w-2/3 md:w-2/4 lg:w-2/5 lg:my-auto">
        <h4 className="font-bold text-lg lg:text-2xl text-white">
          Dapatkan 5 Point dengan mengajak teman kamu
        </h4>
        <button className="uppercase bg-white rounded-md text-referText text-sm font-black py-4 px-5 mt-6 shadow-[0px_2px_4px_2px_rgba(0,_0,_0,_0.1)] hover:shadow-none">
          Refer Now
        </button>
      </div>
    </div>
  );
}
