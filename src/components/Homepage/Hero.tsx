import CommonWrapper from "@/common/CommonWrapper";
import { Search } from "lucide-react";
import heroImg from "@/assets/hero-image.png";

const Hero = () => {
  return (
    <div className="relative flex flex-col-reverse lg:block border-b border-gray-200">
      {/* CommonWrapper for the content */}
      <CommonWrapper>
        <div className="flex flex-col space-y-6 py-16">
          <h1 className="font-semibold text-3xl md:text-5xl">
            The Skill Swap Marketplace.
          </h1>
          <p>
            Connect with creators, professionals, and learners to exchange
            services without the price tag.
          </p>
          <div className="flex items-center relative">
            <Search className="absolute left-3 text-gray-500" />
            <input
              type="text"
              className="w-96 px-4 pl-11 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="What skill are you looking for?"
            />
          </div>

          <div className="flex flex-wrap gap-3">
            <span className="bg-[#F9F5FF] border border-primary rounded-lg text-primary px-3 py-2 text-sm">
              Graphic Design
            </span>
            <span className="bg-[#F9F5FF] border border-primary rounded-lg text-primary px-3 py-2 text-sm">
              Web Development
            </span>
            <span className="bg-[#F9F5FF] border border-primary rounded-lg text-primary px-3 py-2 text-sm">
              Graphic Design
            </span>
          </div>
        </div>
      </CommonWrapper>

      {/* Hero Image */}
      <div className="lg:absolute top-0 right-0 h-full lg:w-1/2 lg:block pt-10">
        <img
          src={heroImg}
          alt="hero-img"
          className="w-full h-full object-contain object-right"
        />
      </div>
    </div>
  );
};

export default Hero;
