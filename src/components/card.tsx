import React from "react";
import Image, { StaticImageData } from "next/image";

function PortfolioCards({src,alt}:{src:string|StaticImageData,alt:string}) {
  return (
    <div className="basis-1/5 relative ">
        <Image fill className="absolute object-cover border-2 border-white" src={src} alt={alt}/>
    </div>
  );
}

export default PortfolioCards;
