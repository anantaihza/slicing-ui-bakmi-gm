import React from 'react';
import FeaturesItem from './FeaturesItem';
import imgOrder from "./../assets/features/order.png"
import imgRedeem from "./../assets/features/redeem.png"
import imgVoucher from "./../assets/features/voucher.png"
import imgPrivilege from "./../assets/features/privilege.png"
import imgHistory from "./../assets/features/history.png"
import imgContact from "./../assets/features/contact.png"

export default function Features() {
  const dataFeature = [
    {
      img: imgOrder,
      title: 'Order',
      bg: 'bg-[#E7F7FE]',
    },
    {
      img: imgRedeem,
      title: 'Redeem',
      bg: 'bg-[#FAEAE9]',
    },
    {
      img: imgVoucher,
      title: 'My Vouchers',
      bg: 'bg-[#FBEBF6]',
    },
    {
      img: imgPrivilege,
      title: 'Privilege',
      bg: 'bg-[#DADFF6]',
    },
    {
      img: imgHistory,
      title: 'History',
      bg: 'bg-[#F9F0FE]',
    },
    {
      img: imgContact,
      title: 'Contact Us',
      bg: 'bg-[#E6F3D8]',
    },
  ];
  return (
    <div className="my-8 grid grid-cols-3 gap-8">
      {dataFeature.map((data, idx) => {
        return (
          <FeaturesItem
            key={idx}
            img={data.img}
            title={data.title}
            bg={data.bg}
          />
        );
      })}
    </div>
  );
}
