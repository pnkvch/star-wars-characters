import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Button,
  CharacterDetailsWrapper,
  CharacterInfo,
  Overlay
} from "../style/styles";
import { AxiosFilmsResponse, Details, StarWarsCharacter } from "../types";

interface Props {
  character: StarWarsCharacter;
  setDetails: React.Dispatch<React.SetStateAction<Details>>;
}

const CharacterDetails = ({ character, setDetails }: Props) => {
  const [names, setNames] = useState<AxiosFilmsResponse[]>([]);
  const handleClick = () => {
    setDetails({ id: "", isShowing: false });
  };

  useEffect(() => {
    const requests = character.films.map(item => {
      return axios.get(item);
    });
    axios.all(requests).then(axios.spread((...response) => setNames(response)));
  }, [character.films]);

  return (
    <>
      <CharacterDetailsWrapper>
        <CharacterInfo>
          <span>{character.name}</span>
          <span>{character.gender}</span>
          <span>{character.birth_year}</span>
          <span>{character.height}</span>
          <span>{character.eye_color}</span>
          <span>{character.hair_color}</span>
          {names.map((item, index) => {
            return <span key={index}>{item.data.title}</span>;
          })}
        </CharacterInfo>
        <Button onClick={handleClick}>Back To Collection</Button>
      </CharacterDetailsWrapper>
      <Overlay />
    </>
  );
};

export default CharacterDetails;
