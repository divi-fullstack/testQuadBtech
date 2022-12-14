import React from "react";
import { ToastContainer } from "react-toastify"; 
import MainRouter from "./MainRouter/MainRouter"; 
import "react-toastify/dist/ReactToastify.css"; 
function App() {
  return (
    <React.Fragment>
      <MainRouter />
      <ToastContainer />
    </React.Fragment>
  );
}

export default App;
