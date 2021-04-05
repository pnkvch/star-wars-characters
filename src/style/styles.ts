import styled from "styled-components";
import { device } from "./sizes";

const fontFamily = '"Roboto", sans-serif';
const accentBackgroundColor = "#f05d5e";
const cardBackgroundColor = "#e7ecef";
const primaryFontColor = "#272932";
const secondaryFontColor = "#e7ecef";
const primaryFontSize = "1em";

export const Wrapper = styled.div`
  width: 95%;
  margin: auto;
  margin-top: 4.5em;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;

  @media ${device.mobileS} {
    justify-content: center;
  }
  @media ${device.tablet} {
    width: 93%;
  }
`;

export const HeaderWrapper = styled.header`
  background-color: ${accentBackgroundColor};
  padding-left: 2.5%;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
  h1 {
    color: ${secondaryFontColor};
  }
  @media ${device.tablet} {
    padding-left: 3%;
  }
`;

export const Button = styled.button`
  color: ${secondaryFontColor};
  background-color: #f05d5e;
  border-radius: 19px;
  padding: 0.5em;
  min-width: 4.6em;
  width: fit-content;
  border: none;
  font-size: ${primaryFontSize};
  font-weight: bold;
  outline: none;
  cursor: pointer;
  margin-right: 0.5em;
`;

export const MainWrapper = styled.div`
  font-family: ${fontFamily};
  letter-spacing: 0.5px;
  margin: 0;
  padding: 1em 0 1em 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  color: ${primaryFontColor};
  align-items: center;
  @media only screen and (max-width: 1050px) {
    font-size: 16px;
  }
`;

export const CharacterWrapper = styled.div`
  padding-right: 1.2em;
  display: flex;
  color: ${primaryFontColor};
  background-color: ${cardBackgroundColor};
  border-radius: 15px;
  margin: 10px;
  padding: 10px;
  width: 15%;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  h3 {
    color: #cccccc;
    margin-bottom: 0;
  }

  span {
    display: block;
    width: 100%;
    margin-top: 5px;
    margin-bottom: 5px;
  }
`;

export const CharacterDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 75%;
  height: 75%;
  background-color: ${cardBackgroundColor};
  top: 13%;
  position: absolute;
  z-index: 999;
  border-radius: 15px;
  justify-content: center;
  align-items: center;

  @media ${device.tablet} {
    width: 100%;
  }
`;

export const CharacterInfo = styled.div`
  height: 90%;
  display: flex;
  flex-direction: column;
`;

export const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 998;
  cursor: pointer;
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: #999999;
  div {
    margin-bottom: 0.7em;
    span {
      color: #cccccc;
      margin-left: 0.2em;
    }
  }
`;

export const PendingWrapper = styled.div`
  font-size: 22px;
  display: flex;
  flex-wrap: wrap;
  width: 95%;
  margin: auto;
  justify-content: space-evenly;
  @media ${device.tablet} {
    font-size: 16px;
  }
`;

// export const ProgressBarWrapper = styled.div.attrs(({ scroll }) => ({
//   style: {
//     width: scroll
//   }
// }))`
//   position: fixed;
//   height: 3px;
//   background-color: #cccccc;
//   z-index: 1;
//   top: 63px;
//   transition: width 0.1s ease-out;
// `;
