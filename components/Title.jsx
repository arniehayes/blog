import React from "react";
import style from "../styles/componentStyles/Title.module.scss";

const Title = ({ text }) => {
  return (
    <header className={style.titleContainer}>
      <h1>{text}</h1>
    </header>
  );
};

export default Title;
