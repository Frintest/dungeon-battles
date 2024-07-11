import React from "react";

export const Container = (props) => {
   return (
      <div className={"container" + (props.className ? " " + props.className : "")}>
         {props.children}
      </div>
   );
};
