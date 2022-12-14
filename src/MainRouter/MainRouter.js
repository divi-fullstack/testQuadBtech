import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header"; 
import Shows from "../Pages/Shows";
import BookMovieTicket from "../Pages/Shows/book-ticket";
import ShowDetails from "../Pages/Shows/details";

function MainRouter() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
          <Route path="/" element={<Shows />} />
          <Route path="/details" element={<ShowDetails />} />
          <Route path="/book-ticket" element={<BookMovieTicket />} />


        </Routes>
        <Footer />
    </BrowserRouter>
  );
}
export default MainRouter;
