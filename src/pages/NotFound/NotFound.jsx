import React from "react";
import s from "./NotFound.module.scss";
import { Container } from "../../components/Container/Container.jsx";
import "../../assets/images/not_found.jpg";

export const NotFound = () => {
   return (
      <div className={s.notFound}>
         <Container className={s.notFound__container}>
            <div className={s.notFound__content}>
               <p className={s.notFound__title}>Страница не найдена</p>
               <div className={s.notFound__imageWrap}>
                  <img
                     width="300"
                     height="300"
                     src="./img/not_found.jpg"
                     alt="Изображение грустной черепашки"
                     className={s.notFound__image}
                  />
                  <div className={s.notFound__imageText}>404</div>
               </div>
            </div>
         </Container>
      </div>
   );
};
