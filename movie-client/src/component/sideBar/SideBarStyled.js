import { styled } from "styled-components";
import {
  PiUserSwitchDuotone,
  PiFilmSlateLight,
  PiHouseSimpleLight,
  PiListLight,
  PiPresentationLight,
  PiDotsNineBold,
} from "react-icons/Pi";
import { RiSettings4Line } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";

export const TitleUsers = styled.h2`
  margin-top: -20px;
  color: white;
`;

export const ContainerSideBar = styled.nav`
  background-color: rgb(53, 53, 54);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 80px;
  height: 100%;
  position: fixed;
  transition: 1s;
  span {
    margin-left: 30px;
    font-size: 1px;
    opacity: 0;
    transition: 1s;
  }

  &:hover {
    span {
      font-size: 16px;
      transition: 1s;
      opacity: 1;
    }
    width: 150px;
  }
`;

export const ContainerBtn = styled.div`
  width: 100%;
  margin-top: -10px;
  margin-bottom: 15px;
  position: relative;

  span {
    font-size: 1px;
    margin-left: 30px;
  }
`;

export const IconsProfile = styled(PiUserSwitchDuotone)`
  margin-right: 5px;
  color: white;
`;
export const IconsSearch = styled(CiSearch)`
  margin-right: 8px;
  position: absolute;
`;

export const IconsFilm = styled(PiFilmSlateLight)`
  margin-right: 8px;
  position: absolute;
`;
export const IconsStart = styled(PiHouseSimpleLight)`
  margin-right: 8px;
  position: absolute;
`;

export const IconsExplore = styled(PiListLight)`
  margin-right: 8px;
  position: absolute;
`;
export const IconsSeries = styled(PiPresentationLight)`
  margin-right: 8px;
  position: absolute;
`;

export const IconsBrands = styled(PiDotsNineBold)`
  margin-right: 8px;
  position: absolute;
`;

export const IconsSetting = styled(RiSettings4Line)`
  margin-right: 8px;
  position: absolute;
`;
