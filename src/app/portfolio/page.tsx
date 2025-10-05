import React from "react";
import PortfolioCards from "@/components/card";
import Illustrations from "../../../public/illustration.png";
import Websites from "../../../public/websites.jpg"
import Applications from "../../../public/apps.jpg"

const images=[
  {id:1,src:Illustrations,alt:"Illustrations"},
  {id:2,src:Websites,alt:"Websites"},
  {id:3,src:Applications,alt:"Applications"},
]

function PortfolioPage() {
  return (
    <div>
      <h1 className="text-6xl mb-5 font-bold">Our Works</h1>
      <h1 className="font-bold mb-4 text-2xl">Choose a gallery</h1>
      <div className="flex flex-col md:flex-row w-full gap-8 h-[400px]">
        {images.map((image)=>(<PortfolioCards key={image.id} src={image.src} alt={image.alt}/>))}
      </div>
    </div>
  );
}

export default PortfolioPage;
