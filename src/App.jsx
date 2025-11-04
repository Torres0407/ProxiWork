import { BrowserRouter, Route, Routes } from "react-router";
import Homepage from "./Pages/LandingPage";

export default function App() {
  return(
   <BrowserRouter>
   <Routes>
    <Route path="/" element= {<Homepage/>}/>
    </Routes>
    </BrowserRouter>
  )
}