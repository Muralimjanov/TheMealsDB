import React from 'react'
import styles from "./Meal-item.module.css"

const MealItem = (props) => {
  const {strMeal,strMealThumb,onClick}=props
  return (
    <div onClick={onClick} className={styles.meal_content}>
        <div className={styles.meal_img}>
            <img src={strMealThumb} alt="" />
        </div>
        <p>{strMeal}</p>
    </div>
  )
}

export default MealItem