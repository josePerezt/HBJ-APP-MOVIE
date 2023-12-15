import { styled } from "styled-components";

export const ContainerCards = styled.div`
  width: 100%;
  height: 52%;
  /* padding: 8px; */
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
