import React from "react";
import s from "./Game.module.scss";
import { Container } from "../../components/Container/Container.jsx";
import { Hero } from "./Hero.js";
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
            ctx.drawImage(fill, 0, 0, 1200, 800);
         };
      };

      const keys = {
         w: false,
         a: false,
         s: false,
         d: false,
      };

      class MainHero extends Hero {
         updateDirection = () => {
            this.dx = 0;
            this.dy = 0;

            if (keys.w) this.dy = -this.speed;
            if (keys.a) this.dx = -this.speed;
            if (keys.s) this.dy = this.speed;
            if (keys.d) this.dx = this.speed;
         };

         handleKeyDown = (evt) => {
            if (evt.key === "w") keys.w = true;
            if (evt.key === "a") keys.a = true;
            if (evt.key === "s") keys.s = true;
            if (evt.key === "d") keys.d = true;

            this.updateDirection();
         };
         handleKeyUp = (evt) => {
            if (evt.key === "w") keys.w = false;
            if (evt.key === "a") keys.a = false;
            if (evt.key === "s") keys.s = false;
            if (evt.key === "d") keys.d = false;

            this.updateDirection();
         };

         handleMouseMove = (evt) => {
            const rect = this.canvas.getBoundingClientRect();
            const mouseX = evt.clientX - rect.left;
            const mouseY = evt.clientY - rect.top;

            this.angle = Math.atan2(mouseY - this.y, mouseX - this.x);
         };

         handleShotKey = (evt) => {
            if (evt.key === "e") {
               this.shot();
            }
         };
      }

      const name = "Название";
      const lifeCount = 10;
      const avatarSrc = "offer.png";
      const weapon = "Кагорушка";
      const x = 100;
      const y = 100;

      const mainHero = new MainHero(name, lifeCount, avatarSrc, weapon, x, y, canvas.current, ctx);

      window.addEventListener("keydown", (evt) => {
         mainHero.handleKeyDown(evt);
         mainHero.handleShotKey(evt);
      });
      window.addEventListener("keyup", mainHero.handleKeyUp);
      window.addEventListener("mousemove", mainHero.handleMouseMove);

      const redraw = () => {
         drawBackground();
         mainHero.drawHero();
         mainHero.updateCoords();
         mainHero.drawWeapon();
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
