import Button from "./Button";
import Heading from "./Heading";
import Image from "./Image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

const Testimonials = () => {
  return (
    <div id="testimonials" className="mb-24">
      <Heading as="h3">Testimonials</Heading>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent className="space-x-10 px-8 text-indigo-400">
          <CarouselItem className="md:basis-1/2 bg-indigo-100 p-8 rounded ml-10">
            <div className="flex gap-x-3 mb-3">
              <div className="h-14 w-14 overflow-hidden rounded-full">
                <Image src="/user-1.webp" />
              </div>
              <div className="flex flex-col justify-center">
                <h4 className="text-indigo-500 font-bold">John Doe</h4>
                <div className="flex text-xs">⭐⭐⭐⭐</div>
              </div>
            </div>

            <div className="text-indigo-500">
              <h5 className="font-bold mb-1">Great Services!</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                possimus repudiandae iure obcaecati eum sit, voluptates
                voluptatum corporis voluptate quo!
              </p>
            </div>
          </CarouselItem>

          <CarouselItem className="md:basis-1/2 bg-indigo-100 p-8 rounded">
            <div className="flex gap-x-3 mb-3">
              <div className="h-14 w-14 overflow-hidden rounded-full">
                <Image src="/user-2.webp" />
              </div>
              <div className="flex flex-col justify-center">
                <h4 className="text-indigo-500 font-bold">Jay Ramon</h4>
                <div className="flex text-xs">⭐⭐⭐⭐</div>
              </div>
            </div>

            <div className="text-indigo-500 leading-relaxed">
              <h5 className="font-bold mb-1">Great Services!</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                possimus repudiandae iure obcaecati eum sit, voluptates
                voluptatum corporis voluptate quo!
              </p>
            </div>
          </CarouselItem>

          <CarouselItem className="md:basis-1/2 bg-indigo-100 p-8 rounded">
            <div className="flex gap-x-3 mb-3">
              <div className="h-14 w-14 overflow-hidden rounded-full">
                <Image src="/user-3.webp" />
              </div>
              <div className="flex flex-col justify-center">
                <h4 className="text-indigo-500 font-bold">Johnny Olivares</h4>
                <div className="flex text-xs">⭐⭐⭐⭐</div>
              </div>
            </div>

            <div className="text-indigo-500 leading-relaxed">
              <h5 className="font-bold mb-1">Great Services!</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                possimus repudiandae iure obcaecati eum sit, voluptates
                voluptatum corporis voluptate quo!
              </p>
            </div>
          </CarouselItem>

          <CarouselItem className="md:basis-1/2 bg-indigo-100 p-8 rounded">
            <div className="flex gap-x-3 mb-3">
              <div className="h-14 w-14 overflow-hidden rounded-full">
                <Image src="/user-4.webp" />
              </div>
              <div className="flex flex-col justify-center">
                <h4 className="text-indigo-500 font-bold">Renz Snow</h4>
                <div className="flex text-xs">⭐⭐⭐⭐</div>
              </div>
            </div>

            <div className="text-indigo-500 leading-relaxed">
              <h5 className="font-bold mb-1">Great Services!</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                possimus repudiandae iure obcaecati eum sit, voluptates
                voluptatum corporis voluptate quo!
              </p>
            </div>
          </CarouselItem>
        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};
export default Testimonials;
