import React from "react";
import { Button, CharacterWrapper } from "../style/styles";
import { StarWarsCharacter } from "../types";

interface Props {
  characters: StarWarsCharacter[];
  handleViewDetailsClick: (e: React.SyntheticEvent) => void;
}

const Characters = ({ characters, handleViewDetailsClick }: Props) => {
  if (!characters.length) {
    return <p color="white">No search results</p>;
  }

  return (
    <>
      {characters.map((item: StarWarsCharacter, index) => {
        return (
          <CharacterWrapper key={index}>
            <span>
              Name: <span>{item.name}</span>
            </span>
            <span>Birth Year: {item.birth_year}</span>
            <span>Gender: {item.gender}</span>
            <span>Eye Color: {item.eye_color}</span>
            <span>Skin Color: {item.skin_color}</span>
            <span>
              Height:{" "}
              {item.height.includes("unknown")
                ? item.height
                : `${item.height} cm`}
            </span>
            <Button
              id={`${index}`}
              onClick={handleViewDetailsClick}
              isCharacter={true}
            >
              View details
            </Button>
          </CharacterWrapper>
        );
      })}
    </>
  );
};

export default Characters;
