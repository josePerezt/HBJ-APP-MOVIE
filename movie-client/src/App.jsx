import "./App.css";
import SideBar from "./component/sideBar/SideBar";
import HomePage from "./view/home/HomePage";
import Start from "./view/start/Start";
import Movies from "./view/movies/Movies";
import Explore from "./view/explore/Explore";
import Series from "./view/series/Series";
import { useDispatch } from "react-redux";
import { movies, topMovies, tv } from "./redux/actions";
import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Brands from "./view/brands/Brands";
import Setting from "./view/setting/Setting";
import Search from "./view/search/Search";

function App() {
  const location = useLocation();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(movies());
    dispatch(tv());
    dispatch(topMovies());
  }, []);

  return (
    <div>
      {location.pathname != "/" && <SideBar />}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="buscar" element={<Search />} />
        <Route path="inicio" element={<Start />} />
        <Route path="peliculas" element={<Movies />} />
        <Route path="explorar" element={<Explore />} />
        <Route path="series" element={<Series />} />
        <Route path="marcas" element={<Brands />} />
        <Route path="ajustes" element={<Setting />} />
      </Routes>
    </div>
  );
}

export default App;
