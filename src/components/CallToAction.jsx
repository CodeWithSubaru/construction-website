import Button from "./Button";
import Image from "./Image";

const CallToAction = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 rounded overflow-hidden mb-14">
      <div>
        <Image
          src="/cta.webp"
          alt="house image"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="bg-indigo-100 text-indigo-500">
        <div className="max-w-3xl mx-auto p-8 flex flex-col justify-center h-full">
          <h4 className="mb-3 text-2xl text-indigo-600 font-bold">
            Find out what it costs
          </h4>
          <p className="md:indent-8 leading-relaxed mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            molestias doloremque ipsa dignissimos quo, libero eaque commodi
            voluptatem. Laboriosam, quis molestias porro illum consequuntur
            autem dolor libero deserunt ullam placeat. Lorem ipsum dolor sit
            amet consectetur, adipisicing elit. Deleniti minima at tenetur
            quaerat natus mollitia voluptatum eum doloribus quia cumque.
          </p>

          <Button className="self-start">Get Estimation</Button>
        </div>
      </div>
    </div>
  );
};
export default CallToAction;
