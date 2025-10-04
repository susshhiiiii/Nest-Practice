import React from "react";
import Image from "next/image";
import facebook from '../../public/1.png'
import instagram from '../../public/2.png'
import twitter from '../../public/3.png'


function Footer() {
  return <div className="p-3 flex items-center justify-between">
    <div>
      ©copyright Lamania. All Rights reserved
    </div>
    <div className="flex gap-2">
      <Image className='cursor-pointer opacity-60' src={facebook} height={15}  width={15} alt={"Facebook"}></Image>
      <Image className='cursor-pointer opacity-60' src={instagram} height={15}  width={15} alt={"Instagram"}></Image>
      <Image className='cursor-pointer opacity-60' src={twitter} height={15}  width={15} alt={"Twitter"}></Image>
    </div>
  </div>;
}

export default Footer;
