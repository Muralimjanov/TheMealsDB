import React from "react";
import styles from "./Alfavit.module.css";
import List from "../List";
import { useNavigate } from "react-router-dom";

const Alfavit = () => {
  const alfavit = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
const navigate=useNavigate()
const infoClick=(title)=>{
  navigate(`/alfavit/${title.toLowerCase()}`)
}
  return (
    <div className={styles.content}>
      <List
        items={alfavit && alfavit}
        renderItem={(elem) => (
          <>
            <h2 onClick={()=>infoClick(elem)} >{elem}</h2>
            <span>/</span>
          </>
        )}
      />
    </div>
  );
};

export default Alfavit;
