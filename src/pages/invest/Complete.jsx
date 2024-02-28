import React from "react";
import arrowIcon from "../../asset/arrow2.png";
import complete from "../../asset/complete.png";
import { CustomedInputPrice } from "../../styled/inputPrice";
import { useNavigate } from "react-router-dom";

function Complete(props) {
  const navigate = useNavigate();

  const handleArrowIconClick = () => {
    navigate("/invest");
  };

  return (
    <div style={{ backgroundColor: "#5f75fa" }}>
      <CustomedInputPrice>
        <img
          src={arrowIcon}
          className="arrowIcon2"
          alt="Example Image"
          onClick={handleArrowIconClick}
        />
        <img src={complete} className="completeImg" alt="Example Image" />
      </CustomedInputPrice>
    </div>
  );
}

export default Complete;
