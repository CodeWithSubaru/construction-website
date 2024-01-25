import Button from "./Button";
import Image from "./Image";

const Hero = () => {
  return (
    <div
      id="home"
      className="grid grid-cols-1 md:grid-cols-2 items-center gap-x-4 h-[calc(100svh-84px)] mb-24"
    >
      <div className="max-w-lg col-span-1 flex flex-col justify-center text-center md:text-left mx-auto">
        <h1 className="text-3xl md:text-4xl lg:text-6xl pb-1 font-black bg-gradient-to-r from-sky-500 to-indigo-500 bg-clip-text text-transparent mb-2">
          Building Dreams,
          <br /> Crafting Homes
        </h1>
        <p className="text-indigo-500  leading-relaxed max-w-md mb-4">
          Turning dreams into homes. Explore our exceptional craftsmanship and
          envision your perfect space.
        </p>
        <Button className="px-6 py-3 self-center md:self-start">
          Explore Our Projects
        </Button>
      </div>

      <div className="relative row-start-1 md:row-start-auto place-self-center mb-3">
        <Image src="/hero.webp" alt="house" className="h-72 md:h-auto" />
      </div>
    </div>
  );
};
export default Hero;
