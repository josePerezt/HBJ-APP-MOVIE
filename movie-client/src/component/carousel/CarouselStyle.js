import styled from "styled-components";

export const ContainerCarousel = styled.div`
  border: thin solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  width: 100%;
  height: 250px;

  .control {
    position: absolute;
    background-color: rgb(93, 104, 104);
    border-radius: 50%;
    width: 30px;
    padding: 8px;
    cursor: pointer;

    &:hover {
      background-color: aqua;
    }
  }

  .prev {
    left: 30px;
  }
  .next {
    right: 30px;
  }
`;

export const Carousel = styled.div`
  border: thin solid red;
  overflow: hidden;
  width: 90%;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  justify-content: flex-start;
  padding: 5px;
`;

export const Items = styled.div`
  border: thin solid green;
  width: 200px;
  height: 180px;
  flex: 0 0 auto;
`;
