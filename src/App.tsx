import React, { useEffect, useState } from "react";
import { Details, StarWarsStateType } from "./types";
import { useDispatch, useSelector } from "react-redux";
import { requestAPIData } from "./actions";
import {
  Button,
  MainWrapper,
  Wrapper,
  HeaderWrapper,
  PendingWrapper,
  InputWrapper,
  SearchFieldWrapper,
  SelectWrapper,
} from "./style/styles";
import CharacterDetails from "./components/Details";
import Loader from "react-loader-spinner";
import Characters from "./components/Characters";

const App: React.FC = () => {
  const { characters, next, loading } = useSelector(
    (state: StarWarsStateType) => state.characterReducer
  );
  const [viewDetails, setViewDetails] = useState<Details>({
    id: "0",
    isShowing: false,
  });
  const [saveScrollPostion, setSaveScrollPosition] = useState(0);
  const [showNextBtn, setShowNextBtn] = useState(true);
  const [value, setValue] = useState("");
  const [selectValue, setSelectValue] = useState({ value: "name" });
  const dispatch = useDispatch();

  const handleClick = () => {
    setShowNextBtn(false);
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
    if (showNextBtn && !loading && !value) {
      return <Button onClick={handleClick}>Load More</Button>;
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectValue({ value: e.target.value });
  };

  useEffect(() => {
    dispatch(requestAPIData(null));
  }, [dispatch]);

  useEffect(() => {
    if (saveScrollPostion) {
      window.scrollTo(0, saveScrollPostion);
    }
  }, [viewDetails.isShowing, saveScrollPostion]);

  useEffect(() => {
    const onScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
          document.body.offsetHeight - 100 &&
        next &&
        !viewDetails.isShowing &&
        !showNextBtn
      ) {
        dispatch(requestAPIData(next));
      }
    };
    if (!loading) {
      window.addEventListener("scroll", onScroll);
    }
    return () => window.removeEventListener("scroll", onScroll);
  }, [
    dispatch,
    loading,
    next,
    saveScrollPostion,
    showNextBtn,
    viewDetails.isShowing,
  ]);

  if (viewDetails.isShowing) {
    return (
      <CharacterDetails
        character={characters[parseInt(viewDetails.id)]}
        setDetails={setViewDetails}
      />
    );
  }

  const searchResults = () => {
    if (!value) {
      return characters;
    }
    return characters.filter((item) =>
      item[selectValue.value].toLowerCase().includes(value.toLowerCase())
    );
  };

  return (
    <MainWrapper>
      <HeaderWrapper>
        <h1>Star Wars Characters Catalogue</h1>
      </HeaderWrapper>
      <SearchFieldWrapper>
        <InputWrapper
          type="search"
          placeholder={`Search character by ${selectValue.value.replace(
            "_",
            " "
          )}`}
          value={value}
          onChange={handleInputChange}
        />
        <SelectWrapper>
          <select value={selectValue.value} onChange={handleSelectChange}>
            <option value="name">Name</option>
            <option value="birth_year">Birth Year</option>
            <option value="gender">Gender</option>
            <option value="eye_color">Eye Color</option>
            <option value="skin_color">Skin Color</option>
            <option value="height">Height</option>
          </select>
        </SelectWrapper>
      </SearchFieldWrapper>
      <Wrapper>
        <Characters
          characters={searchResults()}
          handleViewDetailsClick={handleViewDetailsClick}
        />
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
