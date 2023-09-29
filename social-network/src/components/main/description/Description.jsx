import React from "react";
import style from './description.module.css'


const MainDescription = (props) => {
  return (
    <section >
      <h2 className={style.main__subtitle}>{props.subtitle}</h2>
      <p className={style.main__text}>{props.text}</p>
    </section>
  );
}

export default MainDescription;