import { Link } from "react-router-dom";
import homeIcon from "../asset/homeIcon.png";
import investIcon from "../asset/investIcon.png";
import reportIcon from "../asset/reportIcon.png";
import myhomeIcon from "../asset/myhome.png";

import { CustomedNavBar } from "../styled/bottomNav";

function NavBar(props) {
  return (
    <CustomedNavBar>
      <nav
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          height: "100%",
        }}
      >
        <Link
          to="/"
          style={{
            textDecoration: "none",
            fontSize: "14px",
            color: "gray",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            src={homeIcon}
            alt="Home"
            style={{ width: "20px", height: "20px" }}
          />
          <p className="iconText_b">홈</p> {/* 홈 아이콘 이미지 사용 */}
        </Link>
        <Link
          to="/invest"
          style={{
            textDecoration: "none",
            fontSize: "14px",
            color: "gray",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            src={investIcon}
            alt="Home"
            style={{ width: "20px", height: "20px" }}
          />
          <p className="iconText">투자하기</p> {/* 홈 아이콘 이미지 사용 */}
        </Link>
        <Link
          to="/current-invest"
          style={{
            textDecoration: "none",
            fontSize: "14px",
            color: "gray",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            src={reportIcon}
            alt="Home"
            style={{ width: "20px", height: "20px" }}
          />
          <p className="iconText">투자현황</p> {/* 홈 아이콘 이미지 사용 */}
        </Link>
        <Link
          to="/mypage"
          style={{
            textDecoration: "none",
            fontSize: "14px",
            color: "gray",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            src={myhomeIcon}
            alt="Home"
            style={{ width: "20px", height: "20px" }}
          />
          <p className="iconText">마이홈</p> {/* 홈 아이콘 이미지 사용 */}
        </Link>
      </nav>
    </CustomedNavBar>
  );
}

export default NavBar;
