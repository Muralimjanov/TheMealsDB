import React, { useEffect } from "react";
import styles from "./Popular-infoIngredients.module.css";
import { useParams,useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPopularInfo } from "../../Redux-toolkit/MealSlice/MealSlice";
import List from "../List";

const PopularInfoIngredients = () => {
  const diaptch = useDispatch();
  const navigate=useNavigate()
  const { title } = useParams();
  const { popularInfo, text } = useSelector((state) => state.products);
  useEffect(() => {
    diaptch(getPopularInfo(title));
  }, [title]);
  console.log("popularInfo>>>", popularInfo);
  const infoClik=(id,title)=>{
    console.log("infoClik>>>", title)
    navigate(`/meal/${id}/${title}`)
  }
  return (
    <div className="container">
      <div className={styles.content}>
        <div className={styles.title}>
          <h2>{title}</h2>
          <div className={styles.content_title}>
            <img
              src={`https://www.themealdb.com/images/ingredients/${title}.png`}
              alt=""
            />
          </div>
        </div>
        <div className={styles.images_title}>
          <h2>Meals</h2>
          <div className={styles.images}>
            <List
              items={popularInfo}
              renderItem={(elem, i) => (
                <div onClick={()=>infoClik(elem.idMeal,elem.strMeal)} className={styles.images_item}>
                  <div className={styles.item}>
                    <img src={elem.strMealThumb} alt="" />
                  </div>
                  <p>{elem.strMeal}</p>
                </div>
              )}
              
            />
          </div>
        </div>
      </div>
      <div className={styles.description}>
        <h2>Description</h2>
        <p className={styles.text}>{text}</p>
      </div>
    </div>
  );
}; 

export default PopularInfoIngredients;
