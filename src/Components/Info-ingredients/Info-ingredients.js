import React, { useEffect } from "react";
import { getInfoMeal } from "../../Redux-toolkit/MealSlice/MealSlice";
import { useParams,useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Info-ingredients.module.css";
import List from "../List";

const InfoIngredients = () => {
  const dispatch = useDispatch();
  const navigate=useNavigate()
  const { idMeal } = useParams();
  const { infoMeal } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getInfoMeal(idMeal));
  }, []);
  const handleInfo=(title)=>{
      navigate(`/ingredient/${title}`)
  }

  return (
    <div className="container">
      <List
        items={infoMeal && infoMeal}
        renderItem={(elem, i) => (
          <div key={i} className={styles.infoIngredients}>
            <div className={styles.title}>
              <h2>{elem.strMeal}</h2>
              <h2>Ingredients</h2>
            </div>
            <div className={styles.images}>
              <div className={styles.first_img}>
                <img src={elem.strMealThumb} alt="" />
                <a href="">Watch Video You tube</a>
              </div>
              <div className={styles.second_img}>
                {elem.strIngredient1 ? (
                  <div onClick={()=>handleInfo(elem.strIngredient1)} className={styles.second_item}>
                    <img
                      src={`https://www.themealdb.com/images/ingredients/${elem.strIngredient1}.png`}
                      alt=""
                    />
                    <p>{elem.strMeasure1} {elem.strIngredient1}</p>
                  </div>
                ) : null}
                {elem.strIngredient2 ? (
                  <div onClick={()=>handleInfo(elem.strIngredient2)} className={styles.second_item}>
                    <img
                      src={`https://www.themealdb.com/images/ingredients/${elem.strIngredient2}.png`}
                      alt=""
                    />
                    <p>{elem.strMeasure2} {elem.strIngredient2}</p>
                  </div>
                ) : null}
                {elem.strIngredient3 ? (
                  <div onClick={()=>handleInfo(elem.strIngredient3)} className={styles.second_item}>
                    <img
                      src={`https://www.themealdb.com/images/ingredients/${elem.strIngredient3}.png`}
                      alt=""
                    />
                    <p>{elem.strMeasure3} {elem.strIngredient3}</p>
                  </div>
                ) : null}
                {elem.strIngredient4 ? (
                  <div onClick={()=>handleInfo(elem.strIngredient4)} className={styles.second_item}>
                    <img
                      src={`https://www.themealdb.com/images/ingredients/${elem.strIngredient4}.png`}
                      alt=""
                    />
                    <p>{elem.strMeasure4} {elem.strIngredient4}</p>
                  </div>
                ) : null}
                {elem.strIngredient5 ? (
                  <div onClick={()=>handleInfo(elem.strIngredient5)} className={styles.second_item}>
                    <img
                      src={`https://www.themealdb.com/images/ingredients/${elem.strIngredient5}.png`}
                      alt=""
                    />
                    <p>{elem.strMeasure5} {elem.strIngredient5}</p>
                  </div>
                ) : null}
                {elem.strIngredient6 ? (
                  <div onClick={()=>handleInfo(elem.strIngredient6)} className={styles.second_item}>
                    <img
                      src={`https://www.themealdb.com/images/ingredients/${elem.strIngredient6}.png`}
                      alt=""
                    />
                    <p>{elem.strMeasure6} {elem.strIngredient6}</p>
                  </div>
                ) : null}
                {elem.strIngredient7 ? (
                  <div onClick={()=>handleInfo(elem.strIngredient7)} className={styles.second_item}>
                    <img
                      src={`https://www.themealdb.com/images/ingredients/${elem.strIngredient7}.png`}
                      alt=""
                    />
                    <p>{elem.strMeasure7} {elem.strIngredient7}</p>
                  </div>
                ) : null}
                {elem.strIngredient8 ? (
                  <div onClick={()=>handleInfo(elem.strIngredient8)} className={styles.second_item}>
                    <img
                      src={`https://www.themealdb.com/images/ingredients/${elem.strIngredient8}.png`}
                      alt=""
                    />
                    <p>{elem.strMeasure8} {elem.strIngredient8}</p>
                  </div>
                ) : null}
                {elem.strIngredient9 ? (
                  <div onClick={()=>handleInfo(elem.strIngredient9)} className={styles.second_item}>
                    <img
                      src={`https://www.themealdb.com/images/ingredients/${elem.strIngredient9}.png`}
                      alt=""
                    />
                    <p>{elem.strMeasure9} {elem.strIngredient9}</p>
                  </div>
                ) : null}
                {elem.strIngredient10 ? (
                  <div onClick={()=>handleInfo(elem.strIngredient10)} className={styles.second_item}>
                    <img
                      src={`https://www.themealdb.com/images/ingredients/${elem.strIngredient10}.png`}
                      alt=""
                    />
                    <p>{elem.strMeasure10} {elem.strIngredient10}</p>
                  </div>
                ) : null}
                {elem.strIngredient11 ? (
                  <div onClick={()=>handleInfo(elem.strIngredient11)} className={styles.second_item}>
                    <img
                      src={`https://www.themealdb.com/images/ingredients/${elem.strIngredient11}.png`}
                      alt=""
                    />
                    <p>{elem.strMeasure11} {elem.strIngredient11}</p>
                  </div>
                ) : null}
                {elem.strIngredient12 ? (
                  <div onClick={()=>handleInfo(elem.strIngredient12)} className={styles.second_item}>
                    <img
                      src={`https://www.themealdb.com/images/ingredients/${elem.strIngredient12}.png`}
                      alt=""
                    />
                    <p>{elem.strMeasure12} {elem.strIngredient12}</p>
                  </div>
                ) : null}
                {elem.strIngredient13 ? (
                  <div onClick={()=>handleInfo(elem.strIngredient13)} className={styles.second_item}>
                    <img
                      src={`https://www.themealdb.com/images/ingredients/${elem.strIngredient13}.png`}
                      alt=""
                    />
                    <p>{elem.strMeasure13} {elem.strIngredient13}</p>
                  </div>
                ) : null}
                {elem.strIngredient14 ? (
                  <div onClick={()=>handleInfo(elem.strIngredient14)} className={styles.second_item}>
                    <img
                      src={`https://www.themealdb.com/images/ingredients/${elem.strIngredient14}.png`}
                      alt=""
                    />
                    <p>{elem.strMeasure14} {elem.strIngredient14}</p>
                  </div>
                ) : null}
                {elem.strIngredient15 ? (
                  <div onClick={()=>handleInfo(elem.strIngredient15)} className={styles.second_item}>
                    <img
                      src={`https://www.themealdb.com/images/ingredients/${elem.strIngredient15}.png`}
                      alt=""
                    />
                    <p>{elem.strMeasure15} {elem.strIngredient15}</p>
                  </div>
                ) : null}
                {elem.strIngredient16 ? (
                  <div onClick={()=>handleInfo(elem.strIngredient5)} className={styles.second_item}>
                    <img
                      src={`https://www.themealdb.com/images/ingredients/${elem.strIngredient16}.png`}
                      alt=""
                    />
                    <p>{elem.strMeasure16} {elem.strIngredient16}</p>
                  </div>
                ) : null}
                {elem.strIngredient17 ? (
                  <div onClick={()=>handleInfo(elem.strIngredient17)} className={styles.second_item}>
                    <img
                      src={`https://www.themealdb.com/images/ingredients/${elem.strIngredient17}.png`}
                      alt=""
                    />
                    <p>{elem.strMeasure17} {elem.strIngredient17}</p>
                  </div>
                ) : null}
                {elem.strIngredient18 ? (
                  <div onClick={()=>handleInfo(elem.strIngredient18)} className={styles.second_item}>
                    <img
                      src={`https://www.themealdb.com/images/ingredients/${elem.strIngredient18}.png`}
                      alt=""
                    />
                    <p>{elem.strMeasure18} {elem.strIngredient18}</p>
                  </div>
                ) : null}
                {elem.strIngredient19 ? (
                  <div onClick={()=>handleInfo(elem.strIngredient19)} className={styles.second_item}>
                    <img
                      src={`https://www.themealdb.com/images/ingredients/${elem.strIngredient19}.png`}
                      alt=""
                    />
                    <p>{elem.strMeasure19} {elem.strIngredient19}</p>
                  </div>
                ) : null}
                {elem.strIngredient20 ? (
                  <div onClick={()=>handleInfo(elem.strIngredient20)} className={styles.second_item}>
                    <img
                      src={`https://www.themealdb.com/images/ingredients/${elem.strIngredient20}.png`}
                      alt=""
                    />
                    <p>{elem.strMeasure20} {elem.strIngredient20}</p>
                  </div>
                ) : null}
              </div>
            </div>
            <div className={styles.instructions}>
              <h3>Instructions</h3>
              <p>{elem.strInstructions}</p>
            </div>
          </div>
        )}
      />
    </div>
  );
};

export default InfoIngredients;
