import React from 'react';
import OutletItem from './OutletItem';

export default function Outlet() {
  const dataOutlet = [
    {
      name: 'Citra Garden 6',
      address:
        'Food Junction Citra 6 Blok L2-A Citra Garden City, Jakarta Barat',
      range: 2.4,
    },
    {
      name: 'Emporium Mall',
      address:
        'Emporium Pluit Mall Lt.2 Jalan Pluit Selatan Raya, Jakarta Utara',
      range: 6.2,
    },
    {
      name: 'Puri Indah Mall',
      address:
        'Bakmi GM Puri Indah Mall, Mall Puri Indah Lt.I Unit 103 Jl. Puri Agung Kembangan, Jakarta Barat',
      range: 6.4,
    },
    {
      name: 'Lippo Mall Puri',
      address:
        'Bakmi GM Lippo Mall Puri, Food Avenue Unit FSC-07, Gedung St. Moritz Lippo Mall Puri Lantai I, Jl. Puri Indah Boulevard Blok UI, Jakarta Barat',
      range: 6.6,
    },
    {
      name: 'Terminal 3 Ultimate',
      address:
        'Bandara Soekarno Hatta Terminal 3 Ultimate Domestic Landside, Lantai 2 Ultimate Food Terminal, Tanggerang',
      range: 7.7,
    },
  ];
  return (
    <div className="my-12 text-primaryText">
      <div className="flex justify-between items-center">
        <div className="">
          <h1 className="font-black text-xl">Outlet Location</h1>
          <p className="text-sm">Explore your options</p>
        </div>
      </div>

      <div className="my-4 grid grid-cols-1 md:grid-cols-2 md:gap-x-10">
        {dataOutlet.map((data, idx) => {
          return (
            <OutletItem
              key={idx}
              name={data.name}
              address={data.address}
              range={data.range}
            />
          );
        })}
      </div>

      <div className="my-10">
        <a
          href=""
          className="font-black text-sm text-secondaryText hover:text-linkText uppercase mx-2 tracking-widest"
        >
          See All
        </a>
      </div>
    </div>
  );
}
