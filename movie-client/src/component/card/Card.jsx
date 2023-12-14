import React from "react";
import { ContainerCard } from "./CardStyled";

function Card({ image, title }) {
  return (
    <ContainerCard>
      <img src={image} />
    </ContainerCard>
  );
}

export default Card;
