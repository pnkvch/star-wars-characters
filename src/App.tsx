import React, { useEffect } from "react";
import { StarWarsCharacter, StarWarsStateType } from "./types/starWars";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { requestApiData } from "./actions";

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

  if (loading) {
    return (
      <div className="App">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div>
      {characters.map((item: StarWarsCharacter, index) => {
        return (
          <div key={index}>
            <p>{item.name}</p>
            <p>{item.gender}</p>
            <p>{item.birth_year}</p>
          </div>
        );
      })}
      <button onClick={handleClick}>Next</button>
    </div>
  );
};

export default App;
