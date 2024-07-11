import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NotFound } from "./pages/NotFound/NotFound.jsx";
import { Home } from "./pages/Home/Home.jsx";
import TeamContainer from "./pages/Team/TeamContainer.js";
import GameContainer from "./pages/Game/GameContainer.js";

export const App = () => {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="team" element={<TeamContainer />} />
            <Route path="game" element={<GameContainer />} />
            <Route path="*" element={<NotFound />} />
         </Routes>
      </BrowserRouter>
   );
};
