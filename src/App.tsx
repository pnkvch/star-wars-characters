import React, { useEffect, useState } from "react";
import { Details, StarWarsCharacter, StarWarsStateType } from "./types";
import { useDispatch, useSelector } from "react-redux";
import { requestApiData } from "./actions";
import {
  CharacterWrapper,
  Button,
  MainWrapper,
  Wrapper,
  HeaderWrapper,
  PendingWrapper
} from "./style/styles";
import CharacterDetails from "./components/Details";
import { PlaceholderGrid } from "./components/PlaceholderGrid";

const App: React.FC = () => {
  const characters = useSelector(
    (state: StarWarsStateType) => state.characters
  );
  const next = useSelector((state: StarWarsStateType) => state.next);
  const loading = useSelector((state: StarWarsStateType) => state.loading);
  const [viewDetails, setViewDetails] = useState<Details>({
    id: "0",
    isShowing: false
  });
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(requestApiData(next));
  };

  const handleViewDetailsClick = (e: React.SyntheticEvent) => {
    setViewDetails((prevState: Details) => ({
      id: (e.target as Element).id,
      isShowing: !prevState.isShowing
    }));
  };

  useEffect(() => {
    dispatch(requestApiData(null));
  }, [dispatch]);

  if (viewDetails.isShowing) {
    return (
      <MainWrapper>
        <HeaderWrapper>
          <h1>Star Wars Characters Catalogue</h1>
        </HeaderWrapper>
        <CharacterDetails
          character={characters[parseInt(viewDetails.id)]}
          setDetails={setViewDetails}
        />
      </MainWrapper>
    );
  }

  return (
    <MainWrapper>
      <HeaderWrapper>
        <h1>Star Wars Characters Catalogue</h1>
      </HeaderWrapper>
      <Wrapper>
        {characters.map((item: StarWarsCharacter, index) => {
          return (
            <CharacterWrapper key={index}>
              <span>
                Name: <span>{item.name}</span>
              </span>
              <span>Birth Year: {item.birth_year}</span>
              <span>Gender: {item.gender}</span>
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
      </Wrapper>
      {loading && (
        <PendingWrapper>
          {Array(10)
            .fill(1)
            .map((_item, index) => {
              return <PlaceholderGrid key={index} />;
            })}
        </PendingWrapper>
      )}
      {!loading && <Button onClick={handleClick}>Next</Button>}
    </MainWrapper>
  );
};

export default App;
