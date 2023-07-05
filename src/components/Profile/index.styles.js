import styled from "styled-components";
const OuterProfile = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  width: 65vw;
  min-height: 75vh;
  box-sizing: border-box;
  margin: 0 auto;

  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
  @media screen and (max-width: 768px) {
    width: 100vw;
    padding: 0 1rem;
  }
`;

const InnerProfileInfo = styled.div`
  border-radius: 20px;
  background-color: #213d46;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  gap: 1rem;
  h1 {
    font-size: calc(4vw * 0.3);
    height: 10%;
    @media screen and (max-width: 1024px) {
      font-size: calc(4vw * 0.5);
    }
    @media screen and (max-width: 768px) {
      font-size: calc(4vw * 1);
    }
  }
  img {
    width: 75%;
    height: 75%;
    max-height: 150px;
    max-width: 150px;
    box-sizing: border-box;
  }
`;

const InfoSection = styled.div`
  margin-top: 20px;
  position: sticky;
  top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media screen and (max-width: 1024px) {
    width: 50%;
    margin: 0 auto;
    position: relative;
    top: 0;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
const GamesSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  .games {
    width: 100%;
    @media screen and (max-width: 425px) {
      width: 100%;
    }
  }
`;

export { OuterProfile, InnerProfileInfo, InfoSection, GamesSection };
