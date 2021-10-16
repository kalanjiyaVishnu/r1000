import axios from "axios";
import { useEffect, useState } from "react";

export default function useProstate() {

  const [projects, setProjects] = useState([]);
  useEffect(() => {
    console.log("adsf");
    async function fetchProjects() {
      let { data } = await axios.get("http://localhost:5000/projects");
      setProjects(data);
    }
    fetchProjects();
  }, []);
  return { projectData: projects, setProjects };
}
// functuion
