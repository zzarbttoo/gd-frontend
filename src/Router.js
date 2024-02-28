import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Invest from "./pages/invest/Invest.jsx";
import CurrentInvest from "./pages/current/CurrentInvest";
import Mypage from "./pages/mypage/Mypage";
import InputPrice from "./pages/invest/InputPrice";
import RatioInvest from "./pages/invest/ratioInvest";
import LoadingInvest from "./pages/invest/LoadingInvest";
import Complete from "./pages/invest/Complete";
import InvestDetail from "./pages/invest/InvestDetail.jsx";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/invest" element={<Invest />} />
      <Route path="/invest-detail" element={<InvestDetail />} />
      <Route path="/current-invest" element={<CurrentInvest />} />
      <Route path="/mypage" element={<Mypage />} />
      <Route path="/input-price" element={<InputPrice />} />
      <Route path="/ratio-price" element={<RatioInvest />} />
      <Route path="/loading-invest" element={<LoadingInvest />} />
      <Route path="/complete" element={<Complete />} />
    </Routes>
  );
};

export default Router;
