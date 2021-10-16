import axios from "axios";
var data;
async function fetchAll() {
  await axios
    .get("http://localhost:5000/projects")
    .then((res) => (data = res.data));
}
fetchAll();
export default function projectsReducer(state = 0, action) {
  switch (action.type) {
    case "FETCH":
      return state;
    case "ADD":
      return { ...state, count: 1 };
    default:
      return state;
  }
}
