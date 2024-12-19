import React, { useEffect } from "react";
import s from "./Country-info.module.css";
import { useParams,useNavigate } from "react-router-dom";
import { getCountryInfoMeal } from "../../Redux-toolkit/MealSlice/MealSlice";
import { useDispatch, useSelector } from "react-redux";
import List from "../List";

const CountryInfo = () => {
  const { country } = useParams();
  const navigate=useNavigate()
  const dispatch = useDispatch();
  const { countryInfo } = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(getCountryInfoMeal(country));
  }, [country]);
  const handleInfo=(id, title)=>{
    navigate(`/meal/${id}/${title}`)
  }

  return (
    <div className="container">
      <div className={s.content}>
        <List
          items={countryInfo && countryInfo}
          renderItem={(elem, i) => (
            <div onClick={()=>handleInfo(elem.idMeal,elem.strMeal)} className={s.item}>
              <div className={s.img}>
                <img src={elem.strMealThumb} alt="" />
              </div>
              <p>{elem.strMeal}</p>
            </div>
          )}
        />
      </div>
    </div>
  );
};

export default CountryInfo;
