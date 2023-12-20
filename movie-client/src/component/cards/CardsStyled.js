import { styled } from "styled-components";

export const ContainerCards = styled.div`
  width: 100%;
  height: 52%;
  display: flex;
  flex-direction: column;

  h4 {
    margin-bottom: 0;
    /* border: thin solid orangered; */
  }
  .cards {
    /* border: thin solid blue; */
    overflow-x: auto;
    display: flex;
    padding: 5px;
    /* margin-left: 5px; */
  }
`;

export const ImagePresent = styled.div`
  /* border: thin solid red; */
  width: 100%;
  height: 100vh;
  /* overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center; */
  background-image: url(${(props) => props.image});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
  }
`;
