import React from "react";
import NavBar from "../../components/NavBar";
import { CustomedHome, CardView, Card, CardContent } from "../../styled/home";
import imgUrl from "../../asset/ex2.png";
import BannerImg from "../../asset/banner.png";

function Home(props) {
  return (
    <div>
      <CustomedHome>
        <img src={BannerImg} className="bannerImg" alt="Example Image" />

        <div className="recentAsset">
          <p>현재</p>
          <p>김구름님의 자산</p>
          <p>100,000원</p>
        </div>

        <CardView>
          <Card>
            <img src={imgUrl} alt="Example Image 1" />
            <CardContent>
              <p className="cardTitle">Title</p>
              <p className="cardDetail">Description</p>
            </CardContent>
          </Card>

          <Card>
            <img src={imgUrl} alt="Example Image 1" />
            <CardContent>
              <p className="cardTitle">Title</p>
              <p className="cardDetail">Description</p>
            </CardContent>
          </Card>

          <Card>
            <img src={imgUrl} alt="Example Image 1" />
            <CardContent>
              <p className="cardTitle">Title</p>
              <p className="cardDetail">Description</p>
            </CardContent>
          </Card>

          <Card>
            <img src={imgUrl} alt="Example Image 1" />
            <CardContent>
              <p className="cardTitle">Title</p>
              <p className="cardDetail">Description</p>
            </CardContent>
          </Card>
        </CardView>
        <NavBar />
      </CustomedHome>
    </div>
  );
}

export default Home;
