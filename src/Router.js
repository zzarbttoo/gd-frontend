import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Invest from "./pages/invest/Invest";
import CurrentInvest from "./pages/current/CurrentInvest";
import Mypage from "./pages/mypage/Mypage";
import InputPrice from "./pages/invest/InputPrice";
import RatioInvest from "./pages/invest/ratioInvest";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/invest" element={<Invest />} />
      <Route path="/current-invest" element={<CurrentInvest />} />
      <Route path="/mypage" element={<Mypage />} />
      <Route path="/input-price" element={<InputPrice />} />
      <Route path="/ratio-price" element={<RatioInvest />} />
    </Routes>
  );
};

export default Router;
