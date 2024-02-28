import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Invest from "./pages/invest/Invest";
import CurrentInvest from "./pages/current/CurrentInvest";


const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/invest" element={<Invest />}/>
            <Route path="/current-invest" element={<CurrentInvest />}/>
        </Routes>
    );
};

export default Router;