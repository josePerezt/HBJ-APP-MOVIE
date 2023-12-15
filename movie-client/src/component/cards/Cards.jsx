import React from "react";
import { useSelector } from "react-redux";
import Card from "../card/Card";
import { ContainerCards } from "./CardsStyled";

function Cards() {
  const { allMovies } = useSelector((state) => state);

  return (
    <ContainerCards>
      <div>
        <h4>Lo mas visto</h4>
      </div>
      <div className="cards">
        {allMovies.map(({ image, title, id }) => {
          return <Card id={id} key={id} image={image} title={title} />;
        })}
      </div>
    </ContainerCards>
  );
}

export default Cards;
