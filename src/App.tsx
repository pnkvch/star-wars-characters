import React, { useEffect } from "react";
import { StarWarsCharacter, StarWarsInitialType } from "./types/starWars";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { requestApiData } from "./actions";

const App: React.FC = () => {
  const dispatch = useDispatch();
  const data = useSelector((state: StarWarsInitialType) => state.characters);

  useEffect(() => {
    dispatch(requestApiData());
  }, [dispatch]);

  if (data) {
    return (
      <div>
        {data.map((item: StarWarsCharacter) => {
          return (
            <>
              <p>{item.name}</p>
              <p>{item.birth_year}</p>
              <p>{item.created}</p>
              <p>{item.eye_color}</p>
            </>
          );
        })}
      </div>
    );
  }

  console.log(data);

  return (
    <div className="App">
      <p>dwdw</p>
    </div>
  );
};

export default App;
