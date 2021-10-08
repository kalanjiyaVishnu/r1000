import { Link } from "react-router-dom";
import { useContext } from "react";
import { FirebaseContext } from "../context/firebaseContext";
export default function Home() {
  const data = useContext(FirebaseContext);
  console.log(data);
  return (
    <div className="container md:max-w-screen-2xl w-5/6 mx-auto">
      <HomeTop />
    </div>
  );
}
const HomeTop = () => (
  <div>
    <div className="w-full rounded-md  border-2 border-black border-opacity-40 h-16 p-4 text-center text-cgray-heavy text-opacity-80 text-lg  hover:bg-cgray-heavy  hover:text-white-light font-normal overflow-hidden transform transition duration-200 hover:scale-105 antialiased">
      create new
    </div>
    <div className="text-right py-2">
      or maybe<Link to='/join-project' className="appearance-none text-red-600"> join?</Link>
    </div>
  </div>
);
