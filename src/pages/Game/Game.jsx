import React from "react";
import s from "./Game.module.scss";
import { Container } from "../../components/Container/Container.jsx";
import "../../assets/images/fill.jpg";
import "../../assets/images/luger.png";
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

      class Hero {
         constructor(name, lifeCount, avatarSrc, weapon, x, y) {
            this.name = name;
            this.lifeCount = lifeCount;
            this.avatarSrc = avatarSrc;
            this.x = x;
            this.y = y;
            this.width = 40;
            this.height = 40;
            this.angle = 0;
            this.speed = 5;
            this.dx = 0;
            this.dy = 0;
         }

         drawHero = () => {
            const avatar = new Image();
            avatar.src = `./img/${this.avatarSrc}`;
            avatar.onload = () => {
               ctx.save();
               ctx.translate(this.x, this.y);
               ctx.rotate(this.angle);
               ctx.drawImage(avatar, -this.width / 2, -this.height / 2, this.width, this.height);
               ctx.restore();
            };
         };

         updateCoords = () => {
            this.x += this.dx;
            this.y += this.dy;

            if (this.x < this.width / 2) {
               this.x = this.width / 2;
            }
            if (this.x > canvas.current.width - this.width / 2) {
               this.x = canvas.current.width - this.width / 2;
            }
            if (this.y < this.height / 2) {
               this.y = this.height / 2;
            }
            if (this.y > canvas.current.height - this.height / 2) {
               this.y = canvas.current.height - this.height / 2;
            }
         };

         updateDirection = () => {
            this.dx = 0;
            this.dy = 0;

            if (keys.w) this.dy = -this.speed;
            if (keys.a) this.dx = -this.speed;
            if (keys.s) this.dy = this.speed;
            if (keys.d) this.dx = this.speed;
         };

         handleMouseMove = (evt) => {
            const rect = canvas.current.getBoundingClientRect();
            const mouseX = evt.clientX - rect.left;
            const mouseY = evt.clientY - rect.top;

            this.angle = Math.atan2(mouseY - this.y, mouseX - this.x);
         };

         drawWeapon = () => {
            const weapon = new Image();
            weapon.src = "./img/luger.png";
            weapon.onload = () => {
               ctx.save();
               ctx.translate(this.x, this.y);
               ctx.rotate(this.angle);
               ctx.drawImage(weapon, 0, 0, 32, 20);
               ctx.restore();
            };
         };
      }

      const name = "Название";
      const lifeCount = 10;
      const avatarSrc = "offer.png";
      const weapon = "Кагорушка";
      const x = 100;
      const y = 100;

      const mainHero = new Hero(name, lifeCount, avatarSrc, weapon, x, y);

      // const createTeam = (team) => {
      // let x = 0,
      //    y = 0,
      //    width = 40,
      //    height = 40;
      // const margin = 10;
      // Object.values(props.heroes[team]).forEach((hero) => {
      //    const { name, avatarSrc, weapon, lifeCount, damageCount } = hero;
      //    const heroObj = new Hero(name, lifeCount, avatarSrc, weapon, x, y, width, height);
      //    heroObj.drawHero();
      //    x += 40 + margin;
      // });
      // };

      const keys = {
         w: false,
         a: false,
         s: false,
         d: false,
      };

      const handleKeyDown = (evt) => {
         if (evt.key === "w") keys.w = true;
         if (evt.key === "a") keys.a = true;
         if (evt.key === "s") keys.s = true;
         if (evt.key === "d") keys.d = true;

         mainHero.updateDirection();
      };

      const handleKeyUp = (evt) => {
         if (evt.key === "w") keys.w = false;
         if (evt.key === "a") keys.a = false;
         if (evt.key === "s") keys.s = false;
         if (evt.key === "d") keys.d = false;

         mainHero.updateDirection();
      };

      window.addEventListener("keydown", handleKeyDown);
      window.addEventListener("keyup", handleKeyUp);
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
