import React, { useEffect, useState } from "react";

import BgImg from "../assets/images/bg.svg";
import BgMidImg from "../assets/images/bg-mid.svg";
import BgTopImg from "../assets/images/scientists.svg";
import OverLight from "../assets/images/over-light.svg";

export default function Background() {
  const [transform, setTransform] = useState({ value: 0, string: "0%" });
  //   useEffect(() => {
  //     window.addEventListener("scroll", (e) => {
  //       console.log(e);
  //       if (window.pageYOffset > 452) {
  //         let transformlocal = transform.value + 5;
  //         let transformString = transformlocal + "%";
  //         console.log(typeof transformString);
  //         setTransform({ value: transformlocal, string: transformString });
  //       }
  //     });
  //   }, []);
  return (
    <div className="bg-container">
      <img className="bg-img" src={BgImg} alt="bg-img" />
      <img className="bg-img-mid" src={BgMidImg} alt="bg-mid" />
      <img className="bg-img-top" src={BgTopImg} alt="bg-top" />
      <img className="bg-over-light" src={OverLight} alt="overLight" />
      <div className="coin-container">
        <div className="coin"></div>
      </div>
    </div>
  );
}
