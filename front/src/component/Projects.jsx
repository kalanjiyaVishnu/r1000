import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import useProstate from "../hooks/use-prostate";
export default function Projects({ type }) {
  const { projectData, setProjects } = useProstate();

  const [showhint, setShowhint] = useState(false);
  useEffect(() => {
    if (projectData.length === 0) {
      setShowhint(true);
      setTimeout(() => {
        setShowhint(false);
      }, 3000);
    }
  }, [projectData]);
  return (
    <div>
      <h1 className="text-2xl bold_as_thick text-gray-900 text-opacity-90 my-4">
        {type === "live" ? "Live Events!" : type}
      </h1>
      <div className="flex flex-col w-full md:items-center  flex-nowrap md:flex-row">
        {projectData.map((project) => (
          <Project details={project} key={project.head} />
        ))}
      </div>
      {projectData.length === 0 && (
        <div className="text-center">
          <p>⚆_⚆</p> nothing to show
        </div>
      )}

      {showhint && (
        <div className="w-screen  text-white-light  absolute bottom-8 left-0 box-border">
          <div className="flex items-center  w-2/3 mx-auto py-4 px-2  md:w-3/5 bg-gray-800 rounded-md transform transition relative">
            <div className="bg-yellow-400 mx-2 rounded-sm px-2  text-gray-800">
              hint
            </div>
            <p className="">create a new project</p>
            <button className="ml-auto px-2" onClick={() => setShowhint(false)}>
              💀
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

const Project = ({ details }) => (
  <Link
    className="mr-4 w-auto flex flex-col flex-nowrap rounded-md bg-cgray-700  text-white-light text-opacity-75 border-2 border-cgray-900 border-opacity-10 shadow-lg  my-2 p-4 md:w-1/2 hover:bg-gray-300  hover:text-black md:hover:-translate-y-2 transform transition ease-in-out duration-150 "
    to={details.head.toLowerCase().replace(/\s/g, "")}
  >
    <div className="font-medium text-lg text-white-light">
      <span className="bg-green-best rounded-sm px-2 py-1 shadow-md">
        {" "}
        {details.head}
      </span>
    </div>
    <div className="flex flex-nowrap py-2 w-full items-center md:justify-between">
      <div className="mr-3 w-1/2 flex flex-col flex-nowrap md:w-auto">
        <div className=" font-normal text-opacity-80  mb-2 whitespace-nowrap">
          Type
        </div>
        {details.type === "team" ? (
          <p>
            Team{" - "}
            <span className="font-bold ">
              {details.Memcount > 9 ? details.Memcount : `0${details.Memcount}`}
            </span>
          </p>
        ) : (
          <span className="font-bold ">solo</span>
        )}
      </div>
      <div className="mr-3 w-1/2 flex-nowrap">
        <p className=" font-normal text-opacity-80  mb-2">DeadLine</p>
        <span className="font-bold ">
          {details.EndsIn > 9 ? details.EndsIn : `0${details.EndsIn}`}
        </span>
      </div>
    </div>
  </Link>
);

// { head: "Assassination", Memcount: 3, TotOnline: 3 },
// { head: "Mobile app", Memcount: 2, TotOnline: 1 },
// { head: "Automation", Memcount: 4, TotOnline: 2 },
