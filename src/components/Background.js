import React, { useEffect, useState } from "react";

import BgImg from "../assets/images/bg.svg";
import BgMidImg from "../assets/images/bg-mid.svg";
import BgTopImg from "../assets/images/scientists.svg";
import OverLight from "../assets/images/over-light.svg";
import HotemFeatures from "./HotemFeatures";

export default function Background() {
  const [offset, setOffset] = useState(0);
  const [transform, setTransform] = useState("99.6%");
  const [coinStyle, setCoinStyle] = useState({});

  useEffect(() => {
    if (offset > 0) {
      let scrollValues = [
        { transform: "4.5%" },
        { transform: "9%" },
        { transform: "13.5%" },
        { transform: "18%" },
        { transform: "22.5%" },
        { transform: "27%" },
        { transform: "31.5%" },
        { transform: "36.05%" },
        { transform: "40.56%" },
        { transform: "45.11%" },
        { transform: "49.66%" },
        { transform: "54.21%" },
        { transform: "58.76%" },
        { transform: "63.29%" },
        { transform: "67.84%" },
        { transform: "72.38%" },
        { transform: "76.91%" },
        { transform: "81.45%" },
        { transform: "85.99%" },
        { transform: "90.52%" },
        { transform: "95.06%" },
        { transform: "99.6%" },
      ];

      scrollValues = scrollValues.reverse();

      for (let i = 0; i < 22; i++) {
        if (i == 0) {
          scrollValues[i].valueA = offset + 275;
          scrollValues[i].valueB = scrollValues[i].valueA + 25.36;
        } else scrollValues[i].valueA = scrollValues[i - 1].valueB;
        scrollValues[i].valueB = scrollValues[i].valueA + 25.36;
      }

      window.addEventListener("scroll", (e) => {
        let scrollHeight = window.pageYOffset;
        scrollValues.forEach((value) => {
          if (scrollHeight < scrollValues[0].valueA) {
            setTransform("99.6%");
          } else if (
            scrollHeight > value.valueA &&
            scrollHeight < value.valueB
          ) {
            setTransform(value.transform);
          }
        });

        if (scrollHeight > scrollValues[scrollValues.length - 1].valueB) {
          setCoinStyle({
            position: "absolute",
            top: `calc(15.06vw + ${
              scrollValues[scrollValues.length - 1].valueB + 275
            }px)`,
          });
        } else {
          setCoinStyle({});
        }
      });
    }
  }, [offset]);

  return (
    <div id="main-container">
      <div id="bg-container">
        <img id="bg-img" src={BgImg} alt="bg-img" />
        <img className="bg-img-mid" src={BgMidImg} alt="bg-mid" />
        <img className="bg-img-top" src={BgTopImg} alt="bg-top" />
        <img className="bg-over-light" src={OverLight} alt="overLight" />
        <div style={coinStyle} className="coin-container">
          <div
            className="coin"
            style={{ backgroundPositionY: transform }}
          ></div>
        </div>
      </div>
      <HotemFeatures setOffset={setOffset} />
    </div>
  );
}
