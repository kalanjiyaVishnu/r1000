import { Link } from "react-router-dom";

const Project = ({ details }) => (
  <Link
    className="mr-4 w-auto flex flex-col flex-auto rounded-md bg-cgray-700  text-white-light text-opacity-75 border-2 border-cgray-900 border-opacity-10 shadow-lg  my-2 p-4 md:w-1/3 hover:bg-gray-300  hover:text-black md:max-w-xs md:hover:-translate-y-2 transform transition ease-in-out duration-150 "
    to={`anime/${details.head.en_jp.toLowerCase().replace(/\s/g, "")}/${
      details.id
    }`}
  >
    {/* {console.log("*************", details.head.en_jp.length > 10 && details.head.en_jp.substring(0,10))} */}
    <div className="font-medium text-lg text-white-light w-8">
      <span className="bg-green-best rounded-sm px-2 py-1 shadow-md overflow-ellipsis">
        {" "}
        {details.head.en_jp || details.head.ja_jp}
      </span>
    </div>
    <div className="flex flex-nowrap py-2 w-full items-center md:justify-between">
      <div className="mr-3 w-1/2 flex flex-col flex-nowrap md:w-auto">
        {/* <div className=" font-normal text-opacity-80  mb-2 whitespace-nowrap">
            Type
          </div> */}

        <div className="mr-3 w-1/2 flex-nowrap">
          <p className=" font-normal text-opacity-80  mb-2">episode</p>
          <span className="font-bold ">
            {details.episode > 9 ? details.episode : `0${details.episode}`}
          </span>
        </div>
      </div>
      <div className="mr-3 w-1/2 flex-nowrap">
        <p className=" font-normal text-opacity-80  mb-2">Season</p>
        <span className="font-bold ">
          {details.seaFin > 9 ? details.seaFin : `0${details.seaFin}`}
        </span>
      </div>
    </div>
  </Link>
);
export default Project;
