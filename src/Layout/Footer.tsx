import CommonWrapper from "@/common/CommonWrapper";
import React from "react";
import { Link } from "react-router-dom";
import logo from "@/assets/Logo.svg";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-8 border-t border-gray-200">
      <CommonWrapper>
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
          <div className="flex flex-col lg:flex-row items-center gap-7 text-center lg:text-left">
            <div className="flex-shrink-0 flex items-center space-x-2">
              <img src={logo} alt="logo" />
              <Link to="/" className="text-3xl font-semibold">
                SwapSpot
              </Link>
            </div>
            <p className="text-gray-600 mt-2">
              © SwapSpot International Ltd. 2025
            </p>
          </div>
          <div className="flex space-x-4">
            <Link
              to="#"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="#"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </CommonWrapper>
    </footer>
  );
};

export default Footer;
