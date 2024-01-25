import Heading from "./Heading";
import Image from "./Image";

const Services = () => {
  return (
    <div id="services" className="mb-24">
      <Heading as="h3">Our Services</Heading>
      <div className="grid grid-cols-1 md:grid-cols-2 rounded overflow-hidden">
        <div>
          <Image
            src="/interior-kitchen.webp"
            alt="interior kitchen"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="bg-indigo-100 p-14 space-y-3 text-indigo-500 mb-3 md:mb-0">
          <h4 className=" text-center md:text-left mb-3 text-2xl text-indigo-600 font-bold">
            Pre-Construction
          </h4>
          <p className="indent-0 md:indent-8 text-center md:text-left">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi
            dicta, est nemo in odio aut officia consequatur laudantium fugit,
            quibusdam neque mollitia molestiae necessitatibus voluptas dolorum,
            ipsum dolor eligendi voluptatum incidunt delectus vitae labore?
            Dolores obcaecati quam magnam quibusdam ratione!
          </p>

          <p className="indent-0 md:indent-8 text-center md:text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            suscipit necessitatibus ut, voluptatum amet cum nesciunt magni
            molestiae debitis illo!
          </p>
        </div>

        <div className="bg-indigo-100 p-14 space-y-3 text-indigo-500 mb-3 md:mb-0">
          <h4 className=" text-center md:text-left mb-3 text-2xl text-indigo-600 font-bold">
            General Constructing
          </h4>
          <p className="indent-0 md:indent-8 text-center md:text-left">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi
            dicta, est nemo in odio aut officia consequatur laudantium fugit,
            quibusdam neque mollitia molestiae necessitatibus voluptas dolorum,
            ipsum dolor eligendi voluptatum incidunt delectus vitae labore?
            Dolores obcaecati quam magnam quibusdam ratione!
          </p>

          <p className="indent-0 md:indent-8 text-center md:text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            suscipit necessitatibus ut, voluptatum amet cum nesciunt magni
            molestiae debitis illo!
          </p>
        </div>
        <div className="row-start-3 md:row-start-auto">
          <Image
            src="/interior-stairs.webp"
            alt="interior stairs"
            className="h-full w-full aspect-square object-cover"
          />
        </div>
        <div>
          <Image
            src="/outside-house.webp"
            alt="outside house"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="bg-indigo-100 p-14 space-y-3 text-indigo-500">
          <h4 className=" text-center md:text-left mb-3 text-2xl text-indigo-600 font-bold">
            Design Build
          </h4>
          <p className="indent-0 md:indent-8 text-center md:text-left">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi
            dicta, est nemo in odio aut officia consequatur laudantium fugit,
            quibusdam neque mollitia molestiae necessitatibus voluptas dolorum,
            ipsum dolor eligendi voluptatum incidunt delectus vitae labore?
            Dolores obcaecati quam magnam quibusdam ratione!
          </p>

          <p className="indent-0 md:indent-8 text-center md:text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            suscipit necessitatibus ut, voluptatum amet cum nesciunt magni
            molestiae debitis illo!
          </p>
        </div>
      </div>
    </div>
  );
};
export default Services;
