import styled from "styled-components";

const GamePage = styled.div`
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  justify-content: center;
  margin: 0 auto;
  flex-wrap: nowrap;
  gap: 5%;
  width: 75%;
  @media (max-width: 1024px) {
    flex-direction: column-reverse;
    gap: 2rem;
  }
`;

export { GamePage };
