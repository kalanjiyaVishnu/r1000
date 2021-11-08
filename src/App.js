import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Error from "./component/Error";
import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import * as ROUTES from "./constansts/routes";
import CreatePro from "./component/CreatePro";
import Search from "./component/Search";
import { useEffect, useState } from "react";
import { data } from "./data";
import axios from "axios";
import Anime from "./component/Anime";
export default function App() {
  const [animeData, setAnimeData] = useState(data);
  const [searchres, setSearchres] = useState([]);
  const [isLoading, setisLoading] = useState(false);

  const [search, setSearch] = useState("");
  const handleSearch = ({ target }) => {
    if (target.value) setSearch(target.value);
    else {
      fetch_data();
      return;
    }

    console.log(search);
    if (searchres.length > 0 && searchres !== "") {
      setSearchres(
        searchres.filter((each) =>
          each.head.en_jp
            .toLowerCase()
            .replace(/\s/g, "")
            .includes(search.toLowerCase())
        )
      );
    } else fetch_data();
  };
  useEffect(() => {
    setisLoading(true);
    fetch_data();
  }, []);
  const fetch_data = async () => {
    const res = await axios.get("https://kitsu.io/api/edge/anime/");
    const { data } = res.data;
    // console.log("--------", data);
    const actual_data = data.map(({ attributes, id }) => {
      return {
        id,
        head: { ...attributes.titles } || "",
        episode: attributes.episodeCount,
        seaFin: 3,
        type: attributes.showType,
        posterImage: attributes.posterImage,
      };
    });
    setSearchres((old) => {
      setisLoading(false);
      return actual_data;
    });
    // console.log("actual_data", actual_data);
  };
  const addNew = (payload) => {
    console.log("adding new ", payload);
    setAnimeData((old) => {
      return { ...old, Live: [ ...old.Live, payload ] };
    });
    console.log(animeData);
    return true;
  };
  return (
    <Router>
      <Switch>
        <Route exact path={ROUTES.REGISTER} component={Register} />
        <Route exact path={ROUTES.LOGIN} component={Login} />
        <Route
          path="/"
          render={() => (
            <main className="h-screen">
              <div className="container md:max-w-screen-2xl w-5/6 mx-auto z-50">
                <Navbar handleSearch={handleSearch} />
                <Route
                  path="/"
                  exact
                  render={() => <Home data={animeData} />}
                />
                <Route
                  exact
                  path={ROUTES.CREATE_NEW_PROJECT}
                  component={CreatePro}
                />
                <Route
                  exact
                  path={ROUTES.search}
                  render={() => (
                    <Search
                      searchKEY={search}
                      isLoading={isLoading}
                      searchres={searchres}
                    />
                  )}
                />
                <Route
                  exact
                  path="/anime/:name/:id"
                  render={(props) => <Anime addNew={addNew} />}
                />
              </div>
            </main>
          )}
        />
        <Route path="*" component={Error} />
      </Switch>
    </Router>
  );
}
