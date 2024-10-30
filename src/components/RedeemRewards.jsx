import React, { useRef } from 'react';
import RedeemRewardsItem from './RedeemRewardsItem';
import { useDraggable } from 'react-use-draggable-scroll';

export default function RedeemRewards() {
  const ref = useRef();
  const { events } = useDraggable(ref);
  const dataReward = [
    {
      title: 'Es Teh Manis',
      points: 40,
      img: 'https://www.bakmigm.com/cfind/source/thumb/images/menu/cover_w480_h480_es-teh-manis.jpg',
    },
    {
      title: 'Lemon Es Teh',
      points: 45,
      img: 'https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/6577de6c-d93e-440c-a34f-84acb30cd414_menu-item-image_1695957903851.jpg',
    },
    {
      title: 'Paw Patrol Keychain',
      points: 155,
      img: 'https://ae01.alicdn.com/kf/S8f240924e1c849a184a6adee89c0bf70x.jpg_960x960.jpg',
    },
  ];

  return (
    <div className="container mx-auto xl:px-36 mt-20 text-primaryText">
      <div className="flex justify-between items-center px-5 xl:px-0">
        <div className="">
          <h1 className="font-black text-xl">Redeem Your Rewards</h1>
          <p className="text-sm">Earn more to get your rewards</p>
        </div>
        <a
          href=""
          className="font-black text-sm text-secondaryText hover:text-linkText uppercase tracking-widest"
        >
          See All
        </a>
      </div>

      <div
        className="mt-5 pl-5 xl:pl-0 flex flex-nowrap overflow-auto no-scrollbar"
        {...events}
        ref={ref}
      >
        {dataReward.map((data, idx) => {
          return (
            <RedeemRewardsItem
              key={idx}
              title={data.title}
              points={data.points}
              image={data.img}
            />
          );
        })}
      </div>
    </div>
  );
}
