import React,{useState} from "react";
import styles from "./Home.module.css";
import MealItem from "../../Components/Meal-item";
import List from "../../Components/List";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import PopularIngredients from "../../Components/Popular-ingredients";
import { onDescription } from "../../Redux-toolkit/MealSlice/MealSlice";
import Alfavit from "../../Components/Alfavit";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { latest, popular, randomMeal, randomIngredient, country } =
    useSelector((state) => state.products);

  const handleMealInfo = (id, title) => {
    navigate(`/meal/${id}/${title}`); 
  };
  const handlePopularMeal = (title, description) => {
    navigate(`/ingredient/${title}`);
    dispatch(onDescription(description));
  };
  const randomMealsId = (id, title) => {
    navigate(`/meal/${id}/${title}`);
  };
  const randomItemClick = (title) => {
    navigate(`/ingredient/${title}`);
  };
  const randomItems = [];
  for (let i = 0; i < 4; i++) {
    let randomIndex = Math.floor(Math.random() * randomIngredient.length);
    randomItems.push(randomIngredient[randomIndex]);
  }
  const countryMeals=(title)=>{
    console.log(title)
    navigate(`/meals/${title}`)
  }
const [input,setInput]=useState("")

const handleSubmit=(e)=>{
  e.preventDefault()
  navigate(`/search/${input}`)
}
  return (
    <section>
      <div className="container">
        <div className={styles.home_search}>
          <form onSubmit={handleSubmit}>
            <div>
              <input value={input} onChange={(e)=>setInput(e.target.value)} type="text" name="" id="" />
            </div>
            <div>
              <button type="submit">
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
          </form>
        </div>
        <div className={styles.meal_item}>
          <h3>Latest Meals</h3>
          <div className={styles.meal_item_content}>
            <List
              items={latest && latest}
              renderItem={(elem, i) => (
                <MealItem
                  key={i}
                  onClick={() => handleMealInfo(elem.idMeal, elem.strMeal)}
                  {...elem}
                />
              )}
            />
          </div>
        </div>
        <div className={styles.popular}>
          <h3>Popular Ingredients</h3>
          <div className={styles.popular_ingredients}>
            <List
              items={popular}
              renderItem={(elem, i) => {
                if (i < 4) {
                  return (
                    <PopularIngredients
                      onClick={() =>
                        handlePopularMeal(
                          elem.strIngredient,
                          elem.strDescription
                        )
                      }
                      key={i}
                      {...elem}
                    />
                  );
                }
              }}
            />
          </div>
        </div>
        <div className={styles.random_meals}>
          <div className={styles.random_content}>
            <h3>Random Meals</h3>
            <div className={styles.random_images}>
              <List
                items={randomMeal && randomMeal}
                renderItem={(elem, i) => (
                  <MealItem
                    onClick={() => randomMealsId(elem.idMeal, elem.strCategory)}
                    {...elem}
                  />
                )}
              />
            </div>
          </div>
        </div>
        <div className={styles.random_ingredients_title}>
          <h3>Random Ingredients</h3>
          <div className={styles.random_ingredients}>
            <List
              items={randomItems}
              renderItem={(elem, i) => (
                <PopularIngredients
                  onClick={() => randomItemClick(elem.strIngredient)}
                  {...elem}
                />
              )}
            />
          </div>
        </div>
        <div className={styles.country}>
          <h3>Browse Country</h3>
          <div className={styles.country_meals}>
            <List
              items={country}
              renderItem={(elem, i) => (
                <div onClick={()=>countryMeals(elem.strArea)} className={styles.flags}>
                  <img
                    src={`https://www.themealdb.com/images/icons/flags/big/64/${elem.strArea.substr(
                      0,
                      2
                    )}.png`}
                    alt=""
                  />
                </div>
              )}
            />
          </div>
        </div>
        <div className={styles.alfavit}>
          <h3>Browse By Name</h3>
          <div className={styles.alfavit_content}>
            <Alfavit/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
