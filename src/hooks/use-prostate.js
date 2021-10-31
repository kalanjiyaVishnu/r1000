import axios from "axios";
import { useEffect, useState } from "react";

export default function useProstate(ref_link) {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [iserror, setIserror] = useState(false);
  useEffect(() => {
    // console.log("adsf");
    // async function fetchProjects() {
    //   let { data } = await axios.get(ref_link);
    //   setProjects(data);
    // }
    // fetchProjects();
    axios
      .get(ref_link)
      .then((res) => {
        setIsLoading(false);
        setProjects(res.data);
      })
      .catch((err) => {
        console.log(err);
        setIserror(true);
      });
  }, []);
  return { projectData: projects, setProjects, isLoading ,iserror};
}
// functuion
