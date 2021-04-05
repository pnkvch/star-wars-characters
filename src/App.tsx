import React, { useEffect, useState } from "react";
import { Details, StarWarsCharacter, StarWarsStateType } from "./types";
import { useDispatch, useSelector } from "react-redux";
import { requestApiData } from "./actions";
import {
  CharacterWrapper,
  Button,
  MainWrapper,
  Wrapper,
  HeaderWrapper
} from "./style/styles";
import CharacterDetails from "./components/Details";

const App: React.FC = () => {
  const characters = useSelector(
    (state: StarWarsStateType) => state.characters
  );
  const next = useSelector((state: StarWarsStateType) => state.next);
  const loading = useSelector((state: StarWarsStateType) => state.loading);
  const [details, setDetails] = useState<Details>({
    id: "0",
    isShowing: false
  });
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(requestApiData(next));
  };

  const handleViewDetailsClick = (e: React.SyntheticEvent) => {
    setDetails((prevState: Details) => ({
      id: (e.target as Element).id,
      isShowing: !prevState.isShowing
    }));
  };

  useEffect(() => {
    dispatch(requestApiData(null));
  }, [dispatch]);

  if (details.isShowing) {
    return (
      <MainWrapper>
        <HeaderWrapper>
          <h1>Star Wars Characters Catalogue</h1>
        </HeaderWrapper>
        <CharacterDetails
          character={characters[parseInt(details.id)]}
          setDetails={setDetails}
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
              <Button id={`${index}`} onClick={handleViewDetailsClick}>
                View details
              </Button>
            </CharacterWrapper>
          );
        })}
      </Wrapper>
      {loading && <div>Loading...</div>}
      {!loading && <Button onClick={handleClick}>Next</Button>}
    </MainWrapper>
  );
};

export default App;
