import { Link } from "react-router-dom";
import * as ROUTES from "../constansts/routes";
import Projects from "../component/Projects";
import { useSelector, useDispatch, Provider } from "react-redux";
import { store } from "../redux/store";
import { add } from "../actions";
export default function Home() {
  return (
    <Provider store={store}>
      <HomeTop />
      <Projects type="live" />
    </Provider>
  );
}
const HomeTop = () => {
  const data = useSelector((store) => store);
  console.log(data);
  const dispatch = useDispatch();

  return (
    <div className="w-full flex flex-col mb-4">
      <Link to={ROUTES.CREATE_NEW_PROJECT}>
        <div className="w-full rounded-md  border-2 border-black border-opacity-40 h-16 p-4 text-center text-cgray-heavy text-opacity-80 text-lg  hover:bg-cgray-700  hover:text-white-light font-medium overflow-hidden transform transition duration-200 hover:scale-105 antialiased ">
          create new
        </div>
      </Link>
      <div className="flex flex-nowrap  py-2 w-full ">
        <p className="ml-auto px-1">or maybe</p>
        <Link
          to={ROUTES.JOIN_PROJECT}
          className="appearance-none text-red-600  hover:text-cgray-heavy transform transition duration-100"
        >
          <p>join?</p>
        </Link>
      </div>
      {/* <button
        onClick={() => {
          dispatch(add());
        }}
      >
        click
      </button> */}
    </div>
  );
};
// git branch -m main master
// git fetch origin
// git branch -u origin/master master
// git remote set-head origin -a
