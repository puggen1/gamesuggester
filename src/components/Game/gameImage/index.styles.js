import styled from "styled-components";

const GameImg = styled.img`
  border-radius: 20px;
  height: 100%;
  max-height: 500px;
  max-width: 50%;
  width: 50%;

  @media (max-width: 1300px) {
    width: 35%;
    height: auto;
    object-fit: cover;
    max-height: auto;
  }
  @media (max-width: 1024px) {
    width: 75%;
    max-width: 75%;
    margin: 0 auto;
  };
  @media (max-width: 768px) {
    width: 100%;
    max-width: 100%;
  }
`;

export { GameImg };
