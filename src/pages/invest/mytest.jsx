/* global kakao */
import React, { useEffect, useState } from "react";

const { kakao } = window;

const MapTest = () => {
  const [map, setMap] = useState(null);

  //처음 지도 그리기
  useEffect(() => {
    const container = document.getElementById("map");
    const options = { center: new kakao.maps.LatLng(33.4502057, 126.9184535) };
    const kakaoMap = new kakao.maps.Map(container, options);
    var markerPosition = new kakao.maps.LatLng(33.4502057, 126.9184535); // 마커가 표시될 위치
    var marker = new kakao.maps.Marker({
      // 마커를 생성한다
      position: markerPosition,
    });

    marker.setMap(kakaoMap); // 마커가 지도 위에 표시되도록 설정한다

    // 아래 코드는 지도 위의 마커를 제거하는 코드이다
    // marker.setMap(null);
    setMap(kakaoMap);
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: "400px",
        display: "inline-block",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "30",
        marginTop: "19px",
      }}
    >
      <div id="map" style={{ width: "350px", height: "500px" }}></div>
    </div>
  );
};

export default MapTest;
