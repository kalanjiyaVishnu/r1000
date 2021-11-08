import axios from "axios";
import { useEffect, useState } from "react";
import { data } from "../data";
export default function useProstate(ref_link) {
  console.log(data);
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [iserror, setIserror] = useState(false);
  useEffect(() => {
    // console.log("adsf");
    // async function fetchProjects() {
    //   let { data } = await axios.get(ref_link);
    //   setProjects(data);
    // }
    // fetchProjects();
    // axios
    //   .get(ref_link)
    //   .then((res) => {
    setIsLoading(false);
    console.log("ref_link", ref_link);

    //     setProjects(res.data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     setIserror(true);
    //   });
    // without json server
    // if (ref_link === "http://localhost:5000/upcomming") {
    //   setProjects(data.upcomming);
    // } else setProjects(data.Live);
  }, [data]);
  return { projectData: projects, setProjects, isLoading, iserror };
}
// functuion
