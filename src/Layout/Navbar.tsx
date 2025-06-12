import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "@/assets/Logo.svg";
import { Button } from "@/components/ui/CustomButton";
import { Menu, Search, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-10 h-24">
          <div className="flex items-center space-x-4 lg:space-x-16 w-[40%]">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center space-x-2">
              <img src={logo} alt="logo" />
              <Link to="/" className="text-3xl font-semibold">
                SwapSpot
              </Link>
            </div>

            <div className="flex-1 hidden lg:flex items-center relative ">
              <Search className="absolute left-3 text-gray-500" />
              <input
                type="text"
                className="hidden lg:block w-full px-4 pl-11 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="What skill are you looking for?"
              />
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-7">
            {NavLinks.map((link) => (
              <Link
                to={link.path}
                key={link.name}
                className="text-website-color-black hover:text-primary py-2 rounded-md"
              >
                {link.name}
              </Link>
            ))}

            <Link to={"/login"}>
              <Button size="sm" variant="outline">
                Sign In
              </Button>
            </Link>
            <Link to={"/signup"}>
              <Button size="sm">Join/Register</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={toggleMenu}
              type="button"
              className="focus:outline-none cursor-pointer"
            >
              {isOpen ? (
                <X className="h-6 w-6 text-gray-700" />
              ) : (
                <Menu className="h-6 w-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-5 space-y-2 sm:px-3">
            {NavLinks.map((link) => (
              <Link
                to={link.path}
                key={link.name}
                className="block text-website-color-black hover:text-primary px-3 py-2 rounded-md"
              >
                {link.name}
              </Link>
            ))}

            <div className="flex flex-col space-y-2">
              <Link to={"/login"}>
                <Button size="sm" variant="outline" className="w-full">
                  Sign In
                </Button>
              </Link>
              <Link to={"/signup"}>
                <Button size="sm" className="w-full">
                  Join/Register
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

const NavLinks = [
  { name: "How It Works", path: "/how-it-works" },
  { name: "Pricing", path: "/pricing" },
  { name: "Security", path: "/security" },
];
