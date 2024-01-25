import Hero from "./components/Hero";
import Navigation from "./components/Navigation";
import Services from "./components/Services";
import Center from "./components/Center";
import Works from "./components/Works";
import Testimonials from "./components/Testimonials";
import CallToAction from "./components/CallToAction";

const App = () => {
  return (
    <div className="relative">
      <Navigation />
      <Center>
        <Hero />
        <Services />
        <Works />
        <Testimonials />
        <CallToAction />
      </Center>
      <div className="bg-indigo-300 text-white text-center py-5">
        &copy; {new Date().getFullYear()}. All Rights Reserved
      </div>
    </div>
  );
};

export default App;
