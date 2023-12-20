import React from "react";
import { ContainerCard } from "./CardStyled";

function Card(props) {
  return (
    <ContainerCard>
      <img src={props.image} />
    </ContainerCard>
  );
}

export default Card;
