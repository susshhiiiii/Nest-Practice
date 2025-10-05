import React from "react";
import Image from "next/image";

function AboutPage() {
  return (
     <>
      <div className="flex relative w-full h-[400px]">
        <Image
          src="https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg"
          alt="A Teaching Image"
          className="object-cover"
          fill
        />
        <div className="absolute bottom-10 left-5 font-bold bg-green-600 text-white px-1">
          <h1 className="text-3xl">Digital Storiytellers</h1>
          <h1 className="text-xl">
            Handcrafting award winning digital experiences
          </h1>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-20">
        <div className="md:basis-1/2">
          <h1 className="text-3xl my-5"> Who Are We?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Voluptatibus quibusdam sint, minima magnam odio culpa doloremque
            iure excepturi earum eos porro perspiciatis provident temporibus,
            fugiat iusto officiis aliquid velit similique.
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            deleniti aspernatur itaque molestiae natus consectetur vero, porro
            culpa amet placeat molestias recusandae velit ducimus sequi
            consequuntur minima id blanditiis est.
          </p>
          <br />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore
            laudantium, dolor laborum praesentium soluta ipsam, odio fugit animi
            totam laboriosam itaque! Vel, omnis deserunt. Recusandae distinctio
            exercitationem dolorum accusamus enim?
          </p>
        </div>

        <div className="md:basis-1/2">
          <h1 className="text-3xl my-5">What We Do?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis
            qui cupiditate, magni alias, perspiciatis delectus ad fugit quae
            commodi vel, dolorem culpa maiores quod unde quidem illo. Esse,
            fugiat odit?
          </p>
          <br />
          <p>- Creative Illustration</p>
          <p>- Dynamic Websites</p>
          <p>- Fast and Handy mobile apps</p>
          <button className="bg-green-600 p-2 rounded mt-5">Contact</button>
        </div>
      </div>
    </>
  );
}

export default AboutPage;
