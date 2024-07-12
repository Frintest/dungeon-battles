import React from "react";
import s from "./Game.module.scss";
import { Container } from "../../components/Container/Container.jsx";
import { MainHero } from "./modules/MainHero.js";
import "../../assets/images/fill.jpg";
import "../../assets/images/offer.png";

export const Game = (props) => {
   React.useEffect(() => {
      updateCanvas();
   });

   const canvas = React.useRef(null);

   const updateCanvas = () => {
      const ctx = canvas.current.getContext("2d");

      const drawBackground = () => {
         const fill = new Image();
         fill.src = "./img/fill.jpg";
         fill.onload = () => {
            ctx.drawImage(fill, 0, 0, canvas.current.width, canvas.current.height);
         };
      };

      const name = "Название";
      const lifeCount = 10;
      const avatarSrc = "offer.png";
      const weapon = "Кагорушка";
      const x = 100;
      const y = 100;

      const mainHero = new MainHero(name, lifeCount, avatarSrc, weapon, x, y, canvas.current, ctx);
      mainHero.handleMoveKeys();

      const redraw = () => {
         drawBackground();
         mainHero.drawHero();
         mainHero.updateCoords();
         mainHero.updateCoordsWeapon();
         mainHero.updateAngleWeapon();
         mainHero.drawWeapon();

         if (mainHero.getIsShot()) mainHero.shot();
      };

      const loop = () => {
         redraw();
         requestAnimationFrame(loop);
      };

      loop();
   };

   return (
      <div className={s.game}>
         <Container>
            <canvas ref={canvas} width={1200} height={800}></canvas>
         </Container>
      </div>
   );
};
