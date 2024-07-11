import React from "react";
import s from "./Home.module.scss";
import { Button } from "../../components/Button/Button.jsx";
import "../../assets/images/offer.jpg";

export const Home = () => {
   return (
      <section className={s.home}>
         <div className={s.home__container}>
            <div className={s.offer + " " + s.offer__item}>
               <h1 className={s.offer__title + " " + s.offer__item}>
                  Сражения<br></br>в подземельях
               </h1>
               <img
                  src="./img/offer.jpg"
                  alt="Приветственная черепашка"
                  className={s.offer__image + " " + s.offer__item}
               />
               <Button to="/team" type="default">
                  Собрать легион
               </Button>
            </div>
         </div>
      </section>
   );
};
