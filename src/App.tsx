import React, { useEffect, useLayoutEffect, useState } from "react";
import { Details, StarWarsCharacter, StarWarsStateType } from "./types";
import { useDispatch, useSelector } from "react-redux";
import { requestAPIData } from "./actions";
import {
  CharacterWrapper,
  Button,
  MainWrapper,
  Wrapper,
  HeaderWrapper,
  PendingWrapper,
} from "./style/styles";
import CharacterDetails from "./components/Details";
import Loader from "react-loader-spinner";

const App: React.FC = () => {
  const { characters, next, loading } = useSelector(
    (state: StarWarsStateType) => state.characterReducer
  );
  const [viewDetails, setViewDetails] = useState<Details>({
    id: "0",
    isShowing: false,
  });
  const [saveScrollPostion, setSaveScrollPosition] = useState(0);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(requestAPIData(next));
  };

  const handleViewDetailsClick = (e: React.SyntheticEvent) => {
    setSaveScrollPosition(window.pageYOffset);
    setViewDetails((prevState: Details) => ({
      id: (e.target as Element).id,
      isShowing: !prevState.isShowing,
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
    dispatch(requestAPIData(null));
  }, [dispatch]);

  useEffect(() => {
    if (saveScrollPostion) {
      window.scrollTo(0, saveScrollPostion);
    }
  }, [viewDetails.isShowing, saveScrollPostion]);

  useLayoutEffect(() => {
    const onScroll = () => {
      if (
        window.innerHeight + window.scrollY >= document.body.offsetHeight &&
        next &&
        !viewDetails.isShowing
      ) {
        dispatch(requestAPIData(next));
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [dispatch, next, saveScrollPostion, viewDetails.isShowing]);

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
