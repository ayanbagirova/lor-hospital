import Doctors from "../components/Doctors";
import Hero from "../components/Hero";
import HeroStats from "../components/HeroStats";
import Info from "../components/Info";
import Testimonial from "../components/Testimonial";
import WhyLor from "../components/WhyLor";


const Home = () => {
  return (
    <>
      <Hero />
      <HeroStats />
      <Doctors/>
      <Info/>
      <WhyLor/>
      <Testimonial/>
     
    </>
  );
};

export default Home;