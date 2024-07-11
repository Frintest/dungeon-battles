import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NotFound } from "./pages/NotFound/NotFound.jsx";
import { Home } from "./pages/Home/Home.jsx";
import TeamContainer from "./pages/Team/TeamContainer.js";
const GameContainer = React.lazy(() => import("./pages/Game/GameContainer.js"));
import { Loading } from "./components/Loading/Loading.jsx";

export const App = () => {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="team" element={<TeamContainer />} />
            <Route
               path="game"
               element={
                  <React.Suspense fallback={<Loading />}>
                     <GameContainer />
                  </React.Suspense>
               }
            />
            <Route path="*" element={<NotFound />} />
         </Routes>
      </BrowserRouter>
   );
};
