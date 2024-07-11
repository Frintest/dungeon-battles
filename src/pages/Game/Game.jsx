import React from "react";
import s from "./Game.module.scss";
import { Container } from "../../components/Container/Container.jsx";

export const Game = () => {
   return (
      <div className={s.game}>
         <Container>Game</Container>
      </div>
   );
};
