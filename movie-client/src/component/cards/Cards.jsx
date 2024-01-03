import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import Card from "../card/Card";
import { ContainerCards, ImagePresent, Slider } from "./CardsStyled";
import mayor from "../../assets/mayor.png";
import menor from "../../assets/menor.png";

function Cards() {
  const location = useLocation();
  const allMovies = useSelector((state) => state.allMovies);
  const allTv = useSelector((state) => state.allTv);
  const topMovies = useSelector((state) => state.topMovies);
  const topTv = useSelector((state) => state.topTv);

  const carSliderRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleSliderPrev = (e) => {
    const scrollDecrement = 300;
    const newScrollPosition = scrollPosition - scrollDecrement;
    carSliderRef.current.scrollTo({
      left: newScrollPosition,
      behavior: "smooth",
    });
  };
  const handleSliderNext = (e) => {
    const scrollIncrement = 300;
    const newScrollPosition = scrollPosition + scrollIncrement;
    carSliderRef.current.scrollTo({
      left: newScrollPosition,
      behavior: "smooth",
    });
    setScrollPosition(newScrollPosition);
  };
  return (
    <ContainerCards>
      {location.pathname === "/peliculas" ? (
        <>
          <h4>Solo en HBJ</h4>
          <Slider>
            {allMovies.map(({ image, title, id }) => {
              return <Card id={id} key={id} image={image} title={title} />;
            })}
          </Slider>
          <h4>Lo mas nuevo</h4>
          <Slider>
            {allMovies.map(({ image, title, id }) => {
              return <Card id={id} key={id} image={image} title={title} />;
            })}
          </Slider>
        </>
      ) : null}
      {location.pathname === "/inicio" ? (
        <>
          <ImagePresent image={allMovies[3]?.image}> </ImagePresent>
          <div>
            <h4>Solo en HBJ Pro </h4>
          </div>
          <div className="container-slider">
            <img
              src={menor}
              className="control prev"
              onClick={handleSliderPrev}
            />
            <Slider ref={carSliderRef}>
              {allMovies.map(({ image, title, id }) => {
                return <Card id={id} key={id} image={image} title={title} />;
              })}
            </Slider>
            <img
              src={mayor}
              className="control next"
              onClick={handleSliderNext}
            />
          </div>
          <div>
            <h4>Ponte al dia con tus series de TV favoritas</h4>
          </div>
          <Slider>
            {allTv.map(({ name, image, id }) => {
              return <Card id={id} key={id} image={image} name={name} />;
            })}
          </Slider>
          <div>
            <h4>Las Peliculas mas Valoradas</h4>
          </div>
          <Slider>
            {topMovies.map(({ name, image, id }) => {
              return <Card id={id} key={id} image={image} name={name} />;
            })}
          </Slider>
          <div>
            <h4>Las Series mas Valoradas</h4>
          </div>
          <Slider>
            {topTv.map(({ name, image, id }) => {
              return <Card id={id} key={id} image={image} name={name} />;
            })}
          </Slider>
        </>
      ) : null}
    </ContainerCards>
  );
}

export default Cards;
