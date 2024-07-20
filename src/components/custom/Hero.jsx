import { Link } from "react-router-dom";
import { Button } from "../ui/button";

function Hero() {
  return (
    <div className="flex flex-col items-center mx-56 gap-9">
      <h1 className="font-extrabold text-[50px] text-center mt-16 ">
        <span className="text-[#4842d2]">
          {" "}
          Embark on Your Dream Journey with AI:
        </span>{" "}
        Tailored Itineraries Just for You.
      </h1>
      <p className="text-xl text-[#444950] text-center">
        Designing unique journeys for you, your personal travel planner,
        crafting bespoke itineraries to match your passions and budget. 💯
      </p>
      <Link to={"/create-trip"}>
        {" "}
        <Button className="bg-[#4842d2]">Get Started, It's Free</Button>
      </Link>
    </div>
  );
}

export default Hero;
