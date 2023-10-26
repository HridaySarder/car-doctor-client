import Banner from "../Pages/Banner";
import About from "./About";
import Address from "./Address";
import Services from "./Services";


const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <Services></Services>
     <div className="flex justify-center my-10">
     <button className='btn btn-outline text-[#FF3811] '>More Services</button>
     </div>
     <Address></Address>
    </div>
  );
};

export default Home;