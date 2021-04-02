import React, { useEffect } from "react";
import { StarWarsCharacter, StarWarsStateType } from "./types/starWars";
import { useDispatch, useSelector } from "react-redux";
import { requestApiData } from "./actions";
import { HomeWrapper, MainWrapper, Wrapper } from "./style/styles";

const App: React.FC = () => {
  const dispatch = useDispatch();
  const characters = useSelector(
    (state: StarWarsStateType) => state.characters
  );
  const next = useSelector((state: StarWarsStateType) => state.next);
  const loading = useSelector((state: StarWarsStateType) => state.loading);

  const handleClick = () => {
    dispatch(requestApiData(next));
  };

  useEffect(() => {
    dispatch(requestApiData(null));
  }, [dispatch]);

  return (
    <MainWrapper>
      <HomeWrapper>
        <Wrapper>
          {characters.map((item: StarWarsCharacter, index) => {
            return (
              <div key={index}>
                <p>{item.name}</p>
              </div>
            );
          })}
          {loading && <div>Loading...</div>}
          <button onClick={handleClick}>Next</button>
        </Wrapper>
      </HomeWrapper>
    </MainWrapper>
  );
};

export default App;
