import React from "react";
import NavBar from "../../components/NavBar";
import {
  CustomedHome,
  AssetBox,
  CardView,
  Card,
  CardContent,
} from "../../styled/home";
import imgUrl from "../../asset/ex2.png";
import personIcon from "../../asset/personIcon.png";
import BannerImg from "../../asset/banner.png";
import heartIcon from "../../asset/heart.png";

function Home(props) {
  return (
    <div>
      <CustomedHome>
        <img src={BannerImg} className="bannerImg" alt="Example Image" />
        <AssetBox className="recentAsset">
          <p className="recent">현재</p>
          <p className="asset">김구름님의 자산</p>
          <p className="price">100,000원</p>
        </AssetBox>

        <p className="firstCate">지금 인기 있는 빈집</p>
        <p className="firstAll">모두보기{">"}</p>

        <CardView>
          <Card>
            <img src={imgUrl} className="zipImg" alt="Example Image 1" />
            <img src={heartIcon} className="heartIcon" alt="Example Image" />
            <CardContent>
              <div className="goal">달성률 40%</div>
              <p className="total_price">| 2억원</p>
              <p className="cardTitle">한림 마을 휴양 주택</p>
              <p className="cardDetail">
                제주의 함림에서 당신의 휴양주택에 투자해보세요!
              </p>
              <img
                src={personIcon}
                className="personIcon"
                alt="person Image"
              ></img>
              <p className="numJoin">1000명 참여</p>
            </CardContent>
          </Card>
          <Card>
            <img src={imgUrl} className="zipImg" alt="Example Image 1" />
            <img src={heartIcon} className="heartIcon" alt="Example Image" />
            <CardContent>
              <div className="goal">달성률 40%</div>
              <p className="total_price">| 2억원</p>
              <p className="cardTitle">한림 마을 휴양 주택</p>
              <p className="cardDetail">
                제주의 함림에서 당신의 휴양주택에 투자해보세요!
              </p>
              <img
                src={personIcon}
                className="personIcon"
                alt="person Image"
              ></img>
              <p className="numJoin">1000명 참여</p>
            </CardContent>
          </Card>
          <Card>
            <img src={imgUrl} className="zipImg" alt="Example Image 1" />
            <img src={heartIcon} className="heartIcon" alt="Example Image" />
            <CardContent>
              <div className="goal">달성률 40%</div>
              <p className="total_price">| 2억원</p>
              <p className="cardTitle">한림 마을 휴양 주택</p>
              <p className="cardDetail">
                제주의 함림에서 당신의 휴양주택에 투자해보세요!
              </p>
              <img
                src={personIcon}
                className="personIcon"
                alt="person Image"
              ></img>
              <p className="numJoin">1000명 참여</p>
            </CardContent>
          </Card>
        </CardView>

        <p className="secondCate">이제 나온 신규 빈집</p>
        <p className="secondAll">모두보기{">"}</p>

        <CardView>
          <Card>
            <img src={imgUrl} className="zipImg" alt="Example Image 1" />
            <img src={heartIcon} className="heartIcon" alt="Example Image" />
            <CardContent>
              <div className="goal">달성률 40%</div>
              <p className="total_price">| 2억원</p>
              <p className="cardTitle">한림 마을 휴양 주택</p>
              <p className="cardDetail">
                제주의 함림에서 당신의 휴양주택에 투자해보세요!
              </p>
              <img
                src={personIcon}
                className="personIcon"
                alt="person Image"
              ></img>
              <p className="numJoin">1000명 참여</p>
            </CardContent>
          </Card>
          <Card>
            <img src={imgUrl} className="zipImg" alt="Example Image 1" />
            <img src={heartIcon} className="heartIcon" alt="Example Image" />
            <CardContent>
              <div className="goal">달성률 40%</div>
              <p className="total_price">| 2억원</p>
              <p className="cardTitle">한림 마을 휴양 주택</p>
              <p className="cardDetail">
                제주의 함림에서 당신의 휴양주택에 투자해보세요!
              </p>
              <img
                src={personIcon}
                className="personIcon"
                alt="person Image"
              ></img>
              <p className="numJoin">1000명 참여</p>
            </CardContent>
          </Card>
          <Card>
            <img src={imgUrl} className="zipImg" alt="Example Image 1" />
            <img src={heartIcon} className="heartIcon" alt="Example Image" />
            <CardContent>
              <div className="goal">달성률 40%</div>
              <p className="total_price">| 2억원</p>
              <p className="cardTitle">한림 마을 휴양 주택</p>
              <p className="cardDetail">
                제주의 함림에서 당신의 휴양주택에 투자해보세요!
              </p>
              <img
                src={personIcon}
                className="personIcon"
                alt="person Image"
              ></img>
              <p className="numJoin">1000명 참여</p>
            </CardContent>
          </Card>
        </CardView>
        <NavBar />
      </CustomedHome>
    </div>
  );
}

export default Home;
