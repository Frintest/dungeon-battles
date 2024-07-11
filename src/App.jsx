import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Layout } from "./Layout/Layout.jsx";
import { NotFound } from "./pages/NotFound/NotFound.jsx";
import { Home } from "./pages/Home/Home.jsx";

export const App = () => {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Home />}>
               {/* <Route index element={<Home />} /> */}
               <Route path="*" element={<NotFound />} />
            </Route>
         </Routes>
      </BrowserRouter>
   );
};
