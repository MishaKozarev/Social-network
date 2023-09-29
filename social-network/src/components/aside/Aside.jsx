import React from "react";
import style from './aside.module.css';
import AsideContacts from "./asideContacts/asideContacts";

const Aside = () => {
  return (
    <aside className={style.aside}>
      <div className={style.aside__avatar}></div>
      <AsideContacts />
    </aside>
  );
}

export default Aside;