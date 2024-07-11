import React from "react";
import s from "./Button.module.scss";
import { Link } from "react-router-dom";

export const Button = (props) => {
   let extendClass = "";
   if (props.type === "default") {
      extendClass = s.btnDefault;
   } else if (props.type === "border") {
      extendClass = s.btnBorder;
   } else if (props.type === "borderActive") {
      extendClass = s.btnBorderActive;
   }

   return !props.to ? (
      <button className={s.btn + " " + extendClass} onClick={props.onClick}>
         {props.children}
      </button>
   ) : (
      <Link to={props.to} className={s.btn + " " + extendClass} onClick={props.onClick}>
         {props.children}
      </Link>
   );
};
