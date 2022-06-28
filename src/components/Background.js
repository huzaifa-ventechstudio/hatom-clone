import React, { useEffect, useState } from "react";

import BgImg from "../assets/images/bg.svg";
import BgMidImg from "../assets/images/bg-mid.svg";
import BgTopImg from "../assets/images/scientists.svg";
import OverLight from "../assets/images/over-light.svg";
import Coin from "./Coin";

export default function Background() {
  const [transform, setTransform] = useState("4.5%");
  const [coinStyle, setCoinStyle] = useState({});

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

  const topPosition = () => {
    const coin = document.getElementById("coin-container");
    let coinRect = coin.getBoundingClientRect();
    let coinTop = coinRect.top + window.scrollY;
    return coinTop + coin.scrollTop;
  };

  const bottomPosition = () => {
    const bottomPosition = document.getElementById("div-feature-btm");
    let bottomRect = bottomPosition.getBoundingClientRect();
    let bottom = bottomRect.top + window.scrollY;
    return bottom + bottomPosition.scrollTop;
  };

  const coinPositioning = () => {
    let resize = 1;
    window.addEventListener("resize", () => {
      resize = 1;
    });
    let top = 0;
    let bottom = 0;

    window.addEventListener("scroll", (e) => {
      if (resize == 1) {
        top = topPosition();
        bottom = bottomPosition();
        scrollValues = scrollValues.reverse();
        let value = (bottom - top) / 22;

        for (let i = 0; i < 22; i++) {
          if (i == 0) {
            scrollValues[i].valueA = top;
            scrollValues[i].valueB = scrollValues[i].valueA + value;
          } else scrollValues[i].valueA = scrollValues[i - 1].valueB;
          scrollValues[i].valueB = scrollValues[i].valueA + value;
        }
        resize++;
      }
      let scrollHeight = window.pageYOffset;
      let height = scrollHeight + top;

      for (let i = 0; i < scrollValues.length; i++) {
        if (height <= scrollValues[0].valueA) {
          setTransform("4.5%");
        } else if (
          height > scrollValues[i].valueA &&
          height < scrollValues[i].valueB
        ) {
          setTransform(scrollValues[i].transform);
          break;
        }
      }
      if (height > bottom) {
        setCoinStyle({
          top: bottom - top + "px",
        });
      } else if (height < bottom) {
        setCoinStyle({
          top: height - top + "px",
        });
      }
    });
  };

  useEffect(() => {
    coinPositioning();
    window.addEventListener("resize", () => {
      coinPositioning();
    });
  }, []);

  return (
    <div id="main-container" style={{ height: "100%" }}>
      <div id="bg-container">
        <img id="bg-img" src={BgImg} alt="bg-img" />
        <img className="bg-img-mid" src={BgMidImg} alt="bg-mid" />
        <img className="bg-img-top" src={BgTopImg} alt="bg-top" />
        <img className="bg-over-light" src={OverLight} alt="overLight" />
        <div id="coin-container">
          <Coin transform={transform} coinStyle={coinStyle} />
        </div>
      </div>
      <div className="hotem-features">
        <div className="dividends">
          <div>
            <div className="dividend-heading">
              <span>$9,449,627.26</span>
              <span className="dividend-word">Dividends</span>
            </div>
            <span className="dividend-description">
              Paid out to Hatom Token holders over 3 years
            </span>
          </div>
          <button className="dividend-btn">Buy Hatom Tokens</button>
        </div>
        <div className="dividend-feature">
          <div className="div-feature-top">
            <h2>
              Features <span>of Hatom Token</span>
            </h2>
          </div>
          <div id="div-feature-btm">
            <div className="left-feature">
              <div>
                <span>Earn</span>
                <p>
                  Stake your Hatom tokens to earn a share of the protocol's
                  revenue. Dividends are paid in EGLD, USDC, MEX, HTM, and RIDE.
                </p>
              </div>
              <div>
                <span>Vote</span>
                <p>
                  Decide which token should be listed next, and what upgrade or
                  feature should be integrated into the protocol.
                </p>
              </div>
            </div>
            <div className="right-feature">
              <div>
                <span>Supply &amp; Borrow</span>
                <p>Hatom token holders can use the HTM Money Market to :</p>
                <ul>
                  <li>
                    <p>Supply HTM and earn interest on their deposit.</p>
                  </li>
                  <li>
                    <p>
                      Use HTM as collateral and take a loan of any available
                      crypto asset.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
