import { BrowserRouter, Route, Routes } from "react-router";
import ProxiWorkApp from "./LandingPageComponents/ProxiWorkApp";

export default function App() {
  return(
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<ProxiWorkApp/>} />
    </Routes>
    </BrowserRouter>
  )
}