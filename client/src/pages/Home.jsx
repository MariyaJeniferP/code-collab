import { useNavigate } from "react-router-dom";
import Hero from "../components/Hero";
import WhyChoose from "../components/WhyChoose";
import HowItWorks from "../components/HowItWorks";
import Testimonials from "../components/Testimonials";

function Home() {
  const navigate = useNavigate();
  const startCoding = () => {

  const user = localStorage.getItem("user");

  if(!user){
    alert("Please login first");
    navigate("/signin");
  } else {
    navigate("/dashboard");
  }

};
  return (
    <div>
      <Hero startCoding={startCoding} />
      <WhyChoose />
      <HowItWorks />
      <Testimonials />

    </div>
  );
}

export default Home;