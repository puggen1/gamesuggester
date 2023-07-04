import styled from "styled-components";
const OuterProfile = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  width: 65vw;
  min-height: 75vh;
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
  position: sticky;
  top: 2rem;
  h1 {
    font-size: calc(4vw * 0.3);
    height: 10%;
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
`;
const GamesSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  .games {
    width: 100%;
  }
`;

export { OuterProfile, InnerProfileInfo, InfoSection, GamesSection };
