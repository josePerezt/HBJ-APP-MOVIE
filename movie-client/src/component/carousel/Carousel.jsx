import React, { useRef, useState } from "react";
import { Carousel, ContainerCarousel, Items } from "./CarouselStyle";
import prev from "../../assets/menor.png";
import next from "../../assets/mayor.png";
import Cards from "../cards/Cards";

function Carrousel(props) {
  const carouselRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleSliderPrev = (e) => {
    const scrollDecrement = 300;
    const newScrollPosition = scrollPosition - scrollDecrement;
    carouselRef.current.scrollTo({
      left: newScrollPosition,
      behavior: "smooth",
    });
    setScrollPosition(newScrollPosition);
  };
  const handleSliderNext = (e) => {
    const scrollIncrement = 300;
    const newScrollPosition = scrollPosition + scrollIncrement;

    carouselRef.current.scrollTo({
      left: newScrollPosition,
      behavior: "smooth",
    });
    setScrollPosition(newScrollPosition);
  };

  console.log(props);
  return (
    <ContainerCarousel>
      {/* <div>{children}</div> */}
      <img
        src={prev}
        alt="prev"
        className="control prev"
        onClick={handleSliderPrev}
      />
      <Carousel ref={carouselRef}></Carousel>
      <img
        src={next}
        alt="mayor"
        className="control next"
        onClick={handleSliderNext}
      />
    </ContainerCarousel>
  );
}

export default Carrousel;
