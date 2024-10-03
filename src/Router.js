import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import App from "./App";
import Car from "./Car";
import HelloChaoXin from "./Hellochaoxin";
export default function Router(){
    return(
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<App/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/hellochaoxin" element={<HelloChaoXin/>}/>
        <Route path="/car" element={<Car/>}/>
        <Route path="*" element={"Khong tim thay"}/>
        </Routes>
        </BrowserRouter>
    )
}