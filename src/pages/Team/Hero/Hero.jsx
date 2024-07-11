import React from "react";
import s from "./Hero.module.scss";

export const Hero = (props) => {
   const heroAvatarPath = "./img/";

   return (
      <li className={s.hero} key={props.hero.name}>
         <img
            width="76"
            height="76"
            src={heroAvatarPath + props.hero.avatarSrc}
            alt={"Изображение героя " + props.hero.name}
            className={s.hero__avatar}
         />
         <div className={s.hero__content}>
            <h3 className={s.hero__name}>{props.hero.name}</h3>
            <ul className={s.hero__characteristics}>
               <li className={s.hero__characteristic}>
                  <span className={s.characteristic__name}>Жизни:</span>
                  <span className={s.characteristic__value}>{props.hero.lifeCount}</span>
               </li>

               <li className={s.hero__characteristic}>
                  <span className={s.characteristic__name}>Оружие:</span>
                  <span className={s.characteristic__value}>{props.hero.weapon}</span>
               </li>

               <li className={s.hero__characteristic}>
                  <span className={s.characteristic__name}>Урон:</span>
                  <span className={s.characteristic__value}>{props.hero.damageCount}</span>
               </li>
            </ul>
         </div>
      </li>
   );
};
