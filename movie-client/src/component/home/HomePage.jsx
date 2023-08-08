import { useState } from "react";
import SideBar from "../sideBar/SideBar";
import Start from "../start/Start";
import Movies from "../movies/Movies";
import Series from "../series/Series";
import Explore from "../explore/Explore";
import Brands from "../brands/Brands";
import Setting from "../setting/setting";
import Search from "../search/Search";
import { ContainerHome, ContainerView } from "./HomeStyled";

const HomePage = () => {
  const [view, setView] = useState("Start");
  const handleClick = (viewName) => {
    setView(viewName);
  };
  return (
    <ContainerHome>
      <SideBar handleClick={handleClick} view={view} />
      <ContainerView>
        {view === "Search" && <Search />}
        {view === "Start" && <Start />}
        {view === "Movies" && <Movies />}
        {view === "Series" && <Series />}
        {view === "Explore" && <Explore />}
        {view === "Brands" && <Brands />}
        {view === "Setting" && <Setting />}
      </ContainerView>
    </ContainerHome>
  );
};

export default HomePage;
