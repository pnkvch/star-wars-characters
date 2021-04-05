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
import Loader from "react-loader-spinner";

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

  const handleBottom = () => {
    if (!next && !loading) {
      return;
    }

    if (!loading) {
      return <Button onClick={handleClick}>Next</Button>;
    }
  };

  useEffect(() => {
    dispatch(requestApiData(null));
  }, [dispatch]);

  useEffect(() => {
    const onScroll = function () {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        if (next) {
          dispatch(requestApiData(next));
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [dispatch, next]);

  if (viewDetails.isShowing) {
    return (
      <CharacterDetails
        character={characters[parseInt(viewDetails.id)]}
        setDetails={setViewDetails}
      />
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
          <Loader type="ThreeDots" color="#f05d5e" height="80" width="80" />
        </PendingWrapper>
      )}
      {handleBottom()}
    </MainWrapper>
  );
};

export default App;
