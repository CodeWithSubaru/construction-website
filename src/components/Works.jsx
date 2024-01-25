import Heading from "./Heading";
import Image from "./Image";

const Works = () => {
  return (
    <div id="our_works" className="p-5 mb-24">
      <Heading as="h3">Our Works</Heading>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="col-span-1 md:col-span-2">
          <Image
            src="/gallery-1.webp"
            alt="our works 1"
            className="h-full w-full aspect-square rounded"
          />
        </div>

        <div className="col-span-1">
          <Image
            src="/gallery-2.webp"
            alt="our works 2"
            className="h-full w-full aspect-square rounded object-cover"
          />
        </div>

        <div className="col-span-1">
          <Image
            src="/gallery-3.webp"
            alt="our works 3"
            className="h-full w-full aspect-square rounded"
          />
        </div>

        <div className="col-span-1">
          <Image
            src="/gallery-4.webp"
            alt="our works 1"
            className="h-full w-full aspect-square rounded object-cover"
          />
        </div>

        <div className="col-span-1">
          <Image
            src="/gallery-5.webp"
            alt="our works 2"
            className="h-full w-full aspect-square rounded"
          />
        </div>
        <div className="col-span-1 md:col-span-2">
          <Image
            src="/gallery-6.webp"
            alt="our works 2"
            className="h-full w-full aspect-square rounded object-cover"
          />
        </div>
      </div>
    </div>
  );
};
export default Works;
