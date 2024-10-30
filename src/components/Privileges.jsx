import React from 'react';
import PrivilegesItem from './PrivilegesItem';
import imgPrivilege1 from './../assets/privileges/privilege1.png';
import imgPrivilege2 from './../assets/privileges/privilege2.png';
import imgPrivilege3 from './../assets/privileges/privilege3.png';
import imgPrivilege4 from './../assets/privileges/privilege4.png';
import imgPrivilege5 from './../assets/privileges/privilege5.png';
import imgPrivilege6 from './../assets/privileges/privilege6.png';
import imgPrivilege7 from './../assets/privileges/privilege7.png';

export default function Privileges() {
  const dataPrivileges = [
    {
      path: imgPrivilege1,
      title: 'PLATINUM Member',
      date: '31 Dec 2024',
    },
    {
      path: imgPrivilege2,
      title: 'GOLD Member',
      date: '31 Dec 2024',
    },
    {
      path: imgPrivilege3,
      title: 'Birthday Reward',
      date: '31 Dec 2024',
    },
    {
      path: imgPrivilege4,
      title: 'Redeem Point',
      date: '31 Dec 2024',
    },
    {
      path: imgPrivilege5,
      title: 'Sign Up Reward',
      date: '31 Dec 2024',
    },
    {
      path: imgPrivilege6,
      title: 'Benefit GMania',
      date: '31 Dec 2024',
    },
    {
      path: imgPrivilege7,
      title: 'FAQ MEMBER',
      date: '31 Mar 2024',
    },
  ];
  return (
    <div className="mt-10 text-primaryText">
      <div className="flex justify-between items-center">
        <div className="">
          <h1 className="font-black text-xl">Privileges</h1>
          <p className="text-sm">Keep discovering our promo and news</p>
        </div>
      </div>

      <div className="my-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {dataPrivileges.map((data, idx) => {
          return (
            <PrivilegesItem
              key={idx}
              path={data.path}
              title={data.title}
              date={data.date}
            />
          );
        })}
      </div>
    </div>
  );
}
