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

import { Link } from "react-router-dom";

const SideBar = ({ handleClick, view }) => {
  return (
    <ContainerSideBar>
      <IconsProfile size={80} />
      <TitleUsers>Usuario</TitleUsers>
      <ContainerBtn>
        <Link to="/buscar">
          <Btn>
            <IconsSearch size={25} />
            <span>Buscar</span>
          </Btn>
        </Link>
        <Link to="/inicio">
          <Btn>
            <IconsStart size={25} />
            <span>Inicio</span>
          </Btn>
        </Link>
        <Link to="/peliculas">
          <Btn>
            <IconsFilm size={25} />
            <span>Peliculas</span>
          </Btn>
        </Link>
        <Link to="/series">
          <Btn>
            <IconsSeries size={25} />
            <span>Series</span>
          </Btn>
        </Link>
        <Link to="/explorar">
          <Btn>
            <IconsExplore size={25} />
            <span>Explorar</span>
          </Btn>
        </Link>
        <Link to="/marcas">
          <Btn>
            <IconsBrands size={25} />
            <span>Marcas</span>
          </Btn>
        </Link>
      </ContainerBtn>
      <Link to="/ajustes">
        <Btn>
          <IconsSetting size={25} />
          <span>Ajustes</span>
        </Btn>
      </Link>
    </ContainerSideBar>
  );
};

export default SideBar;
