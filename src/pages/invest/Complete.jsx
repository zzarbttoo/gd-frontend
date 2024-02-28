import React from "react";
import arrowIcon from "../../asset/arrow2.png";
import complete from "../../asset/complete.png";

import { CustomedInputPrice } from "../../styled/inputPrice";

function Complete(props) {
  return (
    <div style={{ backgroundColor: "#5f75fa" }}>
      <CustomedInputPrice>
        <img src={arrowIcon} className="arrowIcon2" alt="Example Image" />
        <img src={complete} className="completeImg" alt="Example Image" />
      </CustomedInputPrice>
    </div>
  );
}

export default Complete;
