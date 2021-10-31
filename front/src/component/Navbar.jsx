import { useHistory, useLocation } from "react-router";
import Logo from "../logo.svg";
import Logo_M from "./wd.png";
export default function NavBar(props) {
  const Location = useLocation();

  return (
    <div className="w-full my-2 flex items-center mx-auto">
      <div className="flex items-center">
        <img src={Logo_M} className="w-16" alt="" />
        <h1 className="font-medium text-black">m1000</h1>
      </div>
      {Location.pathname === "/" && (
        <div className="ml-auto ">
          <button className="mx-2 text-cgray-lightest bg-green-best rounded-sm px-2 py-1 shadow-md transform hover:-translate-y-1 transition-all duration-200">
            login
          </button>
          <button className="text-green-best transform hover:-translate-y-1 transition-all duration-200">
            signin
          </button>
        </div>
      )}
    </div>
  );
}
