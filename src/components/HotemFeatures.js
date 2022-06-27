import React, { useEffect } from "react";

export default function HotemFeatures(props) {
  useEffect(() => {
    const el = document.getElementById("div-feature-btm");
    let rect = el.getBoundingClientRect();
    let top = rect.top + window.scrollY;
    let total = top + el.scrollTop;
    props.setOffset(total);
    // document.addEventListener("resize", function () {
    //   top = rect.top + window.scrollY;
    //   console.log(top, "this is top");
    //   total = top + el.scrollTop;
    //   console.log(total, "this is total");
    //   props.setOffset(total);
    //   console.log(total);
    // });
  }, []);

  return (
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
        <div id="div-feature-btm"></div>
      </div>
    </div>
  );
}
