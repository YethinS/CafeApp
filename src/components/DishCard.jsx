import React from "react";
import Styles from "./dishcard.module.scss";
import { useState } from 'react'
import Button from "./Button";

function DishCard(props) {

  
  return (
    <div className={Styles.mainSection}>
      <div className={Styles.contentSection}>
        <div className={Styles.dish}>
          <div className={Styles.icon}>
            <div className={Styles.dot}></div>
          </div>
          <span className={Styles.dishName}>{props.data.dish_name}</span>
        </div>
        <div className={Styles.sar}>
          <span className={Styles.sarName}>SAR {props.data.dish_price}</span>
        </div>
        <div className={Styles.description}>
          <span className={Styles.descName}>
           {props.data.dish_description}
          </span>
        </div>
       
        <Button countSetter = {props.countSetter}/>
       {props.data.addonCat.length > 0 ? <div className={Styles.custom}>
          <span>Customization available</span>
        </div> : ""} 
      </div>
      <div className={Styles.imageSection}>
        <div className={Styles.calory}>
          <span className={Styles.catName}>{props.data.dish_calories} calories</span>
          <div className={Styles.image}>
            <img src={props.data.dish_image} ></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DishCard;
