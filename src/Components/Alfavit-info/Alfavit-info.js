import React, { useEffect } from "react";
import s from "./Alfavit-info.module.css";
import { useParams, useNavigate } from "react-router-dom";
import { getAlfavitMeals } from "../../Redux-toolkit/MealSlice/MealSlice";
import { useDispatch, useSelector } from "react-redux";
import List from "../List";
import Alfavit from "../Alfavit/Alfavit";

const AlfavitInfo = () => {
  const { meals } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAlfavitMeals(meals));
  }, [meals]);
  const { alfavitMeal } = useSelector((state) => state.products);
  const infoClick = (id, title) => {
    navigate(`/meal/${id}/${title}`);
  };
  return (
    <div className="container">
      <div className={s.content}>
        {alfavitMeal ? (
          <List
            items={alfavitMeal}
            renderItem={(elem, i) => (
              <div
                onClick={() => infoClick(elem.idMeal, elem.strMea)}
                className={s.meal_content}
              >
                <div className={s.images}>
                  <img src={elem.strMealThumb} alt="" />
                </div>
                <p>{elem.strMeal}</p>
              </div>
            )}
          />
        ) : (
          <h2 className={s.text}>No meals found </h2>
        )}
      </div>
      <div>
        <h2 className={s.text}>Browse Meals</h2>
        <br />
        <Alfavit />
      </div>
    </div>
  );
};

export default AlfavitInfo;
