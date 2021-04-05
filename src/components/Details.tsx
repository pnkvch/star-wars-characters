import axios from "axios";
import React, { useEffect, useState } from "react";
import Loader from "react-loader-spinner";
import {
  Button,
  CharacterDetailsWrapper,
  CharacterInfo,
  FilmTitles,
  HeaderWrapper,
  MainWrapper,
  Overlay,
  PendingWrapper
} from "../style/styles";
import { AxiosFilmsResponse, Details, StarWarsCharacter } from "../types";

interface Props {
  character: StarWarsCharacter;
  setDetails: React.Dispatch<React.SetStateAction<Details>>;
}

const CharacterDetails = ({ character, setDetails }: Props) => {
  const [names, setNames] = useState<AxiosFilmsResponse[]>([]);
  const [loading, setLoading] = useState(true);
  const handleClick = () => {
    setDetails({ id: "", isShowing: false });
  };

  useEffect(() => {
    const requests = character.films.map(item => {
      return axios.get(item);
    });
    axios.all(requests).then(
      axios.spread((...response) => {
        setNames(response);
        setLoading(false);
      })
    );
  }, [character.films]);

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
          {names.map((item, index) => {
            return <FilmTitles key={index}>- {item.data.title}</FilmTitles>;
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
