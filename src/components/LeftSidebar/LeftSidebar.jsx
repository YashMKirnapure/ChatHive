import React from "react";
import "./LifeSidebar.css";
import assets from "../../assets/assets.js";

const LeftSidebar = () => {
  return (
    <div className="ls">
      <div className="ls-top">
        <div className="ls-nav">
          <img src={assets.logo} className="logo" alt="" />
          <div className="menu">
            <img src={assets.menu_icon} />
          </div>
        </div>
        <div className="ls-search">
          <img src={assets.search_icon} alt="" />
          <input type="text" placeholder="Search here.." />
        </div>
      </div>
      <div className="ls-list">
        {Array(12)
          .fill("")
          .map((item,index) => (
            <div key={index} className="friends">
              <img src={assets.profile_img} alt="" />
              <div>
                <p>Kylian Mbappe</p>
                <span>Yo it's sunny innit?</span>
              </div>
            </div>
          ))};
      </div>
    </div>
  );
};

export default LeftSidebar;
