import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NotFound } from "./pages/NotFound/NotFound.jsx";
import { Home } from "./pages/Home/Home.jsx";
import TeamContainer from "./pages/Team/TeamContainer.js";

export const App = () => {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="team" element={<TeamContainer />} />
            <Route path="*" element={<NotFound />} />
         </Routes>
      </BrowserRouter>
   );
};
