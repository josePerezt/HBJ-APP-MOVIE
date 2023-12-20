import React from "react";
import { useSelector } from "react-redux";
import Card from "../card/Card";
import { ContainerCards } from "./CardsStyled";

function Cards() {
  const allMovies = useSelector((state) => state.allMovies);
  const allTv = useSelector((state) => state.allTv);

  return (
    <ContainerCards>
      <div>
        <img
          src={allMovies[0]?.image}
          alt="reciente"
          width="100%"
          height="50%"
        />
      </div>
      <div>
        <h4>Lo mas visto</h4>
      </div>
      <div className="cards">
        {allMovies.map(({ image, title, id }) => {
          return <Card id={id} key={id} image={image} title={title} />;
        })}
      </div>
      <div>
        <h4>Lo mas visto en la TV</h4>
      </div>
      <div className="cards">
        {allTv.map(({ name, image, id }) => {
          return <Card id={id} key={id} image={image} name={name} />;
        })}
      </div>
    </ContainerCards>
  );
}

export default Cards;
