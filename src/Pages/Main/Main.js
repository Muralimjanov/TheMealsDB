import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Home";
import { getLatestMeal,getPopular,getRandomMeal,getCountryMeals } from "../../Redux-toolkit/MealSlice/MealSlice";
import { useDispatch } from "react-redux";
import InfoIngredients from "../../Components/Info-ingredients";
import PopularInfoIngredients from "../../Components/Popular-infoIngredients";
import CountryInfo from "../../Components/Country-info";
import AlfavitInfo from "../../Components/Alfavit-info";
import SerchInfo from "../../Components/Search-info";

const Main = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getLatestMeal()); 
    dispatch(getPopular());
    dispatch(getRandomMeal());
    dispatch(getCountryMeals());
  }, []);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/meal/:idMeal/:title" element={<InfoIngredients />} />
        <Route path="/ingredient/:title" element={<PopularInfoIngredients />} />
        <Route path="/meals/:country" element={<CountryInfo />} />
        <Route path="/alfavit/:meals" element={<AlfavitInfo />} />
        <Route path="/search/:text" element={<SerchInfo />} />
      </Routes>
    </div>
  );
};

export default Main;
