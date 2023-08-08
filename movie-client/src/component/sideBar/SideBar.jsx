import Btn from "../btnLink/BtnLink";
import {
  ContainerBtn,
  ContainerSideBar,
  IconsBrands,
  IconsExplore,
  IconsFilm,
  IconsProfile,
  IconsSearch,
  IconsSeries,
  IconsSetting,
  IconsStart,
  TitleUsers,
} from "./SideBarStyled";

const SideBar = ({ handleClick, view }) => {
  return (
    <ContainerSideBar>
      <IconsProfile size={80} />
      <TitleUsers>Usuario</TitleUsers>
      <ContainerBtn>
        <Btn
          alter={(view === "Search").toString()}
          onClick={() => handleClick("Search")}
        >
          <IconsSearch size={25} />
          <span>Buscar</span>
        </Btn>
        <Btn
          alter={(view === "Start").toString()}
          onClick={() => handleClick("Start")}
        >
          <IconsStart size={25} />
          <span>Inicio</span>
        </Btn>
        <Btn
          alter={(view === "Movies").toString()}
          onClick={() => handleClick("Movies")}
        >
          <IconsFilm size={25} />
          <span>Peliculas</span>
        </Btn>
        <Btn
          alter={(view === "Series").toString()}
          onClick={() => handleClick("Series")}
        >
          <IconsSeries size={25} />
          <span>Series</span>
        </Btn>
        <Btn
          alter={(view === "Explore").toString()}
          onClick={() => handleClick("Explore")}
        >
          <IconsExplore size={25} />
          <span>Explorar</span>
        </Btn>
        <Btn
          alter={(view === "Brands").toString()}
          onClick={() => handleClick("Brands")}
        >
          <IconsBrands size={25} />
          <span>Marcas</span>
        </Btn>
      </ContainerBtn>
      <Btn
        alter={(view === "Setting").toString()}
        onClick={() => handleClick("Setting")}
      >
        <IconsSetting size={25} />
        <span>Ajustes</span>
      </Btn>
    </ContainerSideBar>
  );
};

export default SideBar;
