import React from "react";
import style from './asideContacts.module.css'

const AsideContacts = () => {
  return (
    <section className={style.aside__contacts}>
      <h2 className={style.aside__contactsTitle}>Contacts</h2>
      <p className={style.aside__contactsText}>Address:</p>
      <p className={style.aside__contactsText}>Mogilev,Belarus:</p>
      <p className={style.aside__contactsText}>Email:</p>
      <p className={style.aside__contactsText}>mishaaaaa1986@mail.ru</p>
      <p className={style.aside__contactsText}>Discord:</p>
      <p className={style.aside__contactsText}>Mishakozarev#1589</p>
    </section>
  );
}

export default AsideContacts;