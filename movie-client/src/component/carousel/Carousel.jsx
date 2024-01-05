import React, { useRef, useState } from "react";
import { Carousel, ContainerCarousel, Items } from "./CarouselStyle";
import prev from "../../assets/menor.png";
import next from "../../assets/mayor.png";
function Carrousel({ children }) {
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
  return (
    <ContainerCarousel>
      {/* <h1>Carrousel</h1> */}
      {/* <div>{children}</div> */}
      <img
        src={prev}
        alt="prev"
        className="control prev"
        onClick={handleSliderPrev}
      />
      <Carousel ref={carouselRef}>
        <Items></Items>
        <Items></Items>
        <Items></Items>
        <Items></Items>
        <Items></Items>
        <Items></Items>
        <Items></Items>
        <Items></Items>
        <Items></Items>
      </Carousel>
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
