import React from "react";
import s from "./Game.module.scss";
import { Container } from "../../components/Container/Container.jsx";

export const Game = () => {
   React.useEffect(() => {
      updateCanvas();
   });

   const canvas = React.useRef(null);

   const updateCanvas = () => {
      const ctx = canvas.current.getContext("2d");
      ctx.fillStyle = "rgb(200 0 0)";
      ctx.fillRect(10, 10, 50, 50);
   };

   return (
      <div className={s.game}>
         <Container>
            <canvas ref={canvas} width={1200} height={800}></canvas>
         </Container>
      </div>
   );
};
