import { useState, useEffect } from "react";
//import useProstate from "../hooks/use-prostate";
import { data } from "../data";
import Project from "../component/Project";

export default function Projects({ data, type, refLink }) {
  // const { projectData, setProjects, isLoading, iserror } = useProstate(refLink);
  // const [projectData, setProjectData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  // console.log("isLoading", isLoading);
  const [showhint, setShowhint] = useState(false);
  const [showmsg, setShowmsg] = useState("");
  useEffect(() => {
    if (data.feed.length === 0) {
      setShowmsg("nothing to show");
      setShowhint(true);
      setTimeout(() => {
        setShowhint(false);
      }, 5000);
    }
  }, []);
  // console.log("data from top type of ", data.feed, typeof data.feed);
  return (
    <div className="mx-auto w-full md:w-screen">
      <h1 className="text-2xl bold_as_thick text-gray-900 text-opacity-90 my-4">
        {type}
      </h1>
      <div className="flex flex-col w-full md:items-center md:flex-row flex-wrap">
        {isLoading ? (
          <div>loading</div>
        ) : (
          data.feed.map((project) => (
            <Project details={project} key={project.id} />
          ))
        )}
      </div>
      {!isLoading && showmsg && (
        <div className="text-center">
          <p>⚆_⚆</p> {showmsg}
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

// { head: "Assassination", Memcount: 3, TotOnline: 3 },
// { head: "Mobile app", Memcount: 2, TotOnline: 1 },
// { head: "Automation", Memcount: 4, TotOnline: 2 },
