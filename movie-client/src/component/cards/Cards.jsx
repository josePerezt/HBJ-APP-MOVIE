import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import Card from "../card/Card";
import { ContainerCards, ImagePresent } from "./CardsStyled";

function Cards() {
  const location = useLocation();
  const allMovies = useSelector((state) => state.allMovies);
  const allTv = useSelector((state) => state.allTv);
  const topMovies = useSelector((state) => state.topMovies);
  console.log(topMovies);

  return (
    <ContainerCards>
      {location.pathname === "/peliculas" ? (
        <div>
          <h4>Solo en HBJ</h4>
          <div className="cards">
            {allMovies.map(({ image, title, id }) => {
              return <Card id={id} key={id} image={image} title={title} />;
            })}
          </div>
          <h4>Lo mas nuevo</h4>
          <div className="cards">
            {allMovies.map(({ image, title, id }) => {
              return <Card id={id} key={id} image={image} title={title} />;
            })}
          </div>
        </div>
      ) : null}
      {location.pathname === "/inicio" ? (
        <div>
          <ImagePresent image={allMovies[3]?.image}> </ImagePresent>
          <div>
            <h4>Solo en HBJ Pro </h4>
          </div>
          <div className="cards">
            {allMovies.map(({ image, title, id }) => {
              return <Card id={id} key={id} image={image} title={title} />;
            })}
          </div>
          <div>
            <h4>Ponte al dia con tus series de TV favoritas</h4>
          </div>
          <div className="cards">
            {allTv.map(({ name, image, id }) => {
              return <Card id={id} key={id} image={image} name={name} />;
            })}
          </div>
          <div>
            <h4>Las Peliculas mas Valoradas</h4>
          </div>
          <div className="cards">
            {topMovies.map(({ name, image, id }) => {
              return <Card id={id} key={id} image={image} name={name} />;
            })}
          </div>
        </div>
      ) : null}
    </ContainerCards>
  );
}

export default Cards;
