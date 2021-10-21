import styled from "styled-components";
import SearchIcon from "../images/SearchIcon.svg";
import { device } from "./sizes";

const fontFamily = '"Roboto", sans-serif';
const accentBackgroundColor = "#f05d5e";
const cardBackgroundColor = "#e7ecef";
const primaryFontColor = "#272932";
const secondaryFontColor = "#e7ecef";
const primaryFontSize = "1em";
const containerWidth = "95%";
const selectHeight = "3em";

interface CharacterProps {
  isCharacter?: boolean;
}

export const Wrapper = styled.div`
  width: ${containerWidth};
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: calc(1.2em - 10px);

  p {
    color: ${secondaryFontColor};
  }

  @media ${device.mobileL} {
    width: 93%;
    font-size: 14px;
    justify-content: space-around;
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
    font-size: 0.8em;
    h1 {
      font-size: 1.5em;
      padding-left: 2%;
    }
  }
`;

export const Button = styled.button<CharacterProps>`
  color: ${(props) =>
    props.isCharacter ? accentBackgroundColor : secondaryFontColor};
  background-color: ${(props) =>
    props.isCharacter ? secondaryFontColor : accentBackgroundColor};

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
  transition: 0.1s ease-in;

  &:hover {
    color: ${(props) =>
      props.isCharacter ? secondaryFontColor : accentBackgroundColor};
    background-color: ${(props) =>
      props.isCharacter ? accentBackgroundColor : secondaryFontColor};
  }
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
  @media ${device.laptop} {
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
  width: 17%;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  transition: 0.1s ease-in;

  &:hover {
    transform: scale(1.05);
  }

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

  @media ${device.laptop} {
    width: 19%;
  }

  @media ${device.tablet} {
    width: 25%;
  }

  @media ${device.mobileL} {
    width: 35%;
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
    width: 85%;
    height: 72%;
    top: 15%;
  }
`;

export const CharacterInfo = styled.div`
  height: 90%;
  display: flex;
  flex-direction: column;
  width: 85%;

  span {
    padding: 5px;
    :nth-child(7) {
      padding-bottom: 15px;
    }
  }
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

export const PendingWrapper = styled.div`
  font-size: 22px;
  display: flex;
  flex-wrap: wrap;
  width: ${containerWidth};
  margin: auto;
  justify-content: space-evenly;
  color: ${secondaryFontColor};
  @media ${device.tablet} {
    font-size: 16px;
  }
`;

export const FilmTitles = styled.p`
  padding: 5px;
  margin: 5px;
  @media ${device.laptop} {
    margin: 0;
  }
`;

export const InputWrapper = styled.input`
  -webkit-appearance: none;
  border: 3px solid ${cardBackgroundColor};
  border-radius: 8px;
  width: 85%;
  height: 3em;
  color: ${cardBackgroundColor};
  margin: 1.2em 0;
  padding-left: 2.5em;
  font-size: ${primaryFontSize};
  position: relative;
  background: url(${SearchIcon}) no-repeat 8px 8px;

  &::placeholder {
    color: ${cardBackgroundColor};
  }

  @media ${device.mobileL} {
    background-position-x: 5px;
    background-position-y: 5px;
  }
`;

export const SearchFieldWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 70%;
  margin-top: 4.5em;

  @media ${device.laptop} {
    flex-direction: column;
    align-items: center;
  }

  @media ${device.tablet} {
    margin-top: 2.5em;
  }

  @media ${device.mobileL} {
    font-size: 14px;
    width: 93%;
  }
`;

export const SelectWrapper = styled.div`
  select {
    box-sizing: border-box;
    -moz-appearance: none;
    -webkit-appearance: none;
    background: ${cardBackgroundColor};
    border: 0;
    border-radius: 0;
    color: ${primaryFontColor};
    cursor: pointer;
    font-family: inherit;
    font-size: inherit;
    height: ${selectHeight};
    margin: 0;
    padding: 0.75em 3em 0.75em 1em;
    width: 100%;
  }

  border-radius: 4px;
  box-shadow: 0 1px 3px #bbb;
  cursor: pointer;
  height: ${selectHeight};
  overflow: hidden;
  position: relative;
  width: 25%;
  margin: 1.1rem 0 1.1rem 2em;

  @media ${device.laptop} {
    margin: 0;
  }

  @media ${device.tablet} {
    width: 40%;
  }

  @media ${device.mobileL} {
    width: 55%;
  }
`;
