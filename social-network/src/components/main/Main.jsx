import React from "react";
import style from './main.module.css'
import MainTitle from "./title/mainTitle";
import MainDescription from "./description/Description";

const Main = () => {
  return (
    <main className={style.main}>
      <MainTitle />
      <MainDescription subtitle='ABOUT ME' text='My professional goal is to become a front-end developer. To achieve this goal, I devote all my time to learning programming. I have such qualities as analytical thinking, a structured approach to completing tasks, responsibility, and ability to work in a team.'/>
      <MainDescription subtitle='EDUCATION' text='2015 г. - Belarusian-Russian University:Methods and devices for quality control and diagnostics of the state of objects
      2017 г. - Institute for Advanced Studies and Retraining Belarusian-Russian University:Industrial and civil construction
      2020 г. - Branch of the Belarusian National Technical University “Institute for the search and retraining of personnel in new areas of development of engineering, technology and economics”:Diagnostics and maintenance of power equipment of organizations
      2022 г. - The Rolling Scopes - JS / FRONT-END. STAGE 0 (RU)'/>
    </main>
  );
}

export default Main;