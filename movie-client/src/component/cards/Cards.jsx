import React from "react";
import { useSelector } from "react-redux";
import Card from "../card/Card";
import { ContainerCards } from "./CardsStyled";

function Cards() {
  const { allMovies } = useSelector((state) => state);

  return (
    <ContainerCards>
      {allMovies.map(({ image, title, id }) => {
        return <Card id={id} key={id} image={image} title={title} />;
      })}
    </ContainerCards>
  );
}

export default Cards;
