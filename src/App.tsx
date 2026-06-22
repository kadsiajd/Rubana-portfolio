import { Route, Routes } from "react-router-dom";
import Home from "./Pages/home";

export default function app() {

  return (
     < Routes >
    <Route path="/" element={<Home />}></Route>
  </Routes >
  );
 

}