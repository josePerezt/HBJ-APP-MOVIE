import { styled } from "styled-components";

export const ContainerCards = styled.div`
  /* border: thin solid blue; */
  width: 100%;
  height: 52%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  position: relative;

  .container-slider {
    /* border: thin solid red; */
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 60%;
    position: relative;

    .control {
      position: absolute;
      background-color: rgb(93, 104, 104);
      border-radius: 50%;
      padding: 5px;
      width: 40px;
      height: 40px;
      cursor: pointer;
    }

    .prev {
      left: 20px;
    }
    .next {
      right: 20px;
    }
    .none {
      display: none;
    }
  }
  h4 {
    margin-bottom: 0;
  }
`;

export const Slider = styled.div`
  /* border: thin solid green; */
  overflow-x: hidden;
  width: 90%;
  height: auto;
  display: flex;
  padding: 5px;
`;
export const ImagePresent = styled.div`
  /* border: thin solid red; */
  width: 100%;
  height: 100vh;
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
