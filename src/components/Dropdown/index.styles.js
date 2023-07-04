import styled from "styled-components";
const OuterDropdown = styled.div`
  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(45deg);
    }
  }
  width: 100%;
  margin: 1rem 0;
  button {
    width: 100%;
    display: flex;
    justify-content: space-between;
    border-radius: 0px;
    transition: border-radius 0.2s ease-in-out;
  }
  .mainButton {
    border-radius: 10px;
  }
  .open {
    border-radius: 10px 10px 0px 0px;
  }
  .dropdownContent {
    height: 0;
    overflow: hidden;
    transition: height 0.2s ease-in-out;
  }
  .showContent {
    width: 100%;
    height: 250px;
  }
  .dropdownContent > .dropdownItem:last-of-type > button {
    border-radius: 0px 0px 10px 10px;
  }
  .rotate {
  }
  .mainButton:hover {
    .rotate {
      animation: rotate 0.2s ease-in-out forwards 1;
    }
  }
`;

export { OuterDropdown };
