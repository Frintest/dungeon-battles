import React from "react";
import s from "./Loading.module.scss";
import { Container } from "../Container/Container.jsx";

export const Loading = () => {
   return (
      <div className={s.loading}>
         <Container className={s.loading__container}>
            <p className={s.loading__title}>Loading...</p>
         </Container>
      </div>
   );
};
