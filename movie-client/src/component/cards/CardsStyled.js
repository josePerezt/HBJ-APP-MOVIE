import { styled } from "styled-components";

export const ContainerCards = styled.div`
  border: thin solid blue;
  width: 100%;
  height: 52%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;

  .next {
    background-color: rgb(93, 104, 104);
    border-radius: 50%;
    padding: 5px;
    width: 40px;
    height: 40px;
    cursor: pointer;
  }
  .prev {
    background-color: rgb(93, 104, 104);
    border-radius: 50%;
    padding: 5px;
    width: 40px;
    height: 40px;
    cursor: pointer;
  }

  h4 {
    margin-bottom: 0;
  }
`;

export const Slider = styled.div`
  border: thin solid green;
  overflow-x: hidden;
  width: 90%;
  height: auto;
  display: flex;
  padding: 5px;
  margin-top: 8px;
  position: relative;
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
