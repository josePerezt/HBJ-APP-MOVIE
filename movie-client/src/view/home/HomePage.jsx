import { Link } from "react-router-dom";
import { ContainerHome } from "./HomeStyled";

const HomePage = () => {
  return (
    <ContainerHome>
      <h1>HOME PAGE</h1>
      <Link to="/inicio">
        <button>Entrar</button>
      </Link>
    </ContainerHome>
  );
};

export default HomePage;
