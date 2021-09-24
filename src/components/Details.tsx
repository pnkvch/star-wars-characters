import React, { useEffect } from "react";
import Loader from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";
import { requestCharacterMoviesData } from "../actions";
import {
  Button,
  CharacterDetailsWrapper,
  CharacterInfo,
  FilmTitles,
  HeaderWrapper,
  MainWrapper,
  Overlay,
  PendingWrapper,
} from "../style/styles";
import {
  Details,
  StarWarsCharacter,
  StarWarsStateType,
  StarWarsMovie,
} from "../types";

interface Props {
  character: StarWarsCharacter;
  setDetails: React.Dispatch<React.SetStateAction<Details>>;
}

const CharacterDetails = ({ character, setDetails }: Props) => {
  const { movies, loading } = useSelector(
    (state: StarWarsStateType) => state.moviesReducer
  );
  const dispatch = useDispatch();

  const handleClick = () => {
    setDetails({ id: "", isShowing: false });
  };

  useEffect(() => {
    dispatch(requestCharacterMoviesData(character.films));
  }, [character.films, dispatch]);

  return (
    <MainWrapper>
      <HeaderWrapper>
        <h1>Star Wars Characters Catalogue</h1>
      </HeaderWrapper>
      <CharacterDetailsWrapper>
        <CharacterInfo>
          <h2>
            <b>General information</b>
          </h2>
          <span>
            <b>Name: </b>
            {character.name}
          </span>
          <span>
            <b>Gender: </b>
            {character.gender}
          </span>
          <span>
            <b>Birth Year: </b>
            {character.birth_year}
          </span>
          <span>
            <b>Heigh: </b>
            {character.height}
          </span>
          <span>
            <b>Eye Color: </b>
            {character.eye_color}
          </span>
          <span>
            <b>Hair Color: </b>
            {character.hair_color}
          </span>
          <span>
            <b>Names of the films {character.name} played in:</b>
          </span>
          {loading && (
            <PendingWrapper>
              <Loader type="ThreeDots" color="#f05d5e" height="80" width="80" />
            </PendingWrapper>
          )}
          {movies.map((item: StarWarsMovie, index) => {
            return <FilmTitles key={index}>- {item.title}</FilmTitles>;
          })}
        </CharacterInfo>
        <Button onClick={handleClick} isCharacter={true}>
          Back To Collection
        </Button>
      </CharacterDetailsWrapper>
      <Overlay />
    </MainWrapper>
  );
};

export default CharacterDetails;
