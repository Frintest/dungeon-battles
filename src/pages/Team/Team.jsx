import React from "react";
import s from "./Team.module.scss";
import { Button } from "../../components/Button/Button.jsx";
import { Hero } from "./Hero/Hero.jsx";
import { Container } from "../../components/Container/Container.jsx";

export const Team = (props) => {
   const heroesType = props.team === "your" ? "your" : "opponent";
   const heroesElements = Object.values(props.heroes[heroesType]).map((hero) => {
      return <Hero hero={hero} />;
   });

   return (
      <div className={s.team}>
         <Container className={s.team__container}>
            <div className={s.team__type}>
               <Button
                  type={props.team === "your" ? "default" : "border"}
                  onClick={() => props.setActiveTeam("your")}
               >
                  Своя команда
               </Button>
               <Button
                  type={props.team === "your" ? "border" : "default"}
                  onClick={() => props.setActiveTeam("opponent")}
               >
                  Команда противника
               </Button>
            </div>

            <div className={s.team__createType}>
               <Button
                  type={props.createType === "default" ? "borderActive" : "border"}
                  onClick={() => props.setActiveCreateType("default")}
               >
                  Выбрать стандартных героев
               </Button>
               <Button
                  type={props.createType === "default" ? "border" : "borderActive"}
                  onClick={() => props.setActiveCreateType("custom")}
               >
                  Создать собственных героев
               </Button>
            </div>

            <ul className={s.team__heroes}>{heroesElements}</ul>
         </Container>
      </div>
   );
};
