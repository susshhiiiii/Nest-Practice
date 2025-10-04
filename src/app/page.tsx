import Image from "next/image";
import Hero from '../../public/hero.png'

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row items-center">
      <div className="md:basis-1/2 mb-10 md:mb-0">
        <h1 className="text-5xl font-bold bg-gradient-to-br from-green-900 to-white bg-clip-text text-transparent">
          Better design for your digital products.
        </h1>
        <p className="text-lg">
          Turning your idea into Reality. We bring together the teams from
          global tech industry
        </p>
        <button className="mt-4 bg-green-600 rounded-lg p-2">Save Our Works</button>
      </div>
      <div className="md:basis-1/2">
        <Image src={Hero} alt={""}></Image>
      </div>
    </div>
  );
}
