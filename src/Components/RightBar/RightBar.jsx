import React from "react";
import "./RightBar.scss";
import imginfo from "..//..//Assets/me.jpg";

function RightBar() {
  return (
    <div className="rightBar">
      <div className="container">
        <div className="item">
          <span>Suggestions For You</span>
          <div className="user">
            <div className="userInfo">
              <img src={imginfo} alt="" />
              <span>Mohamed Sabry</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>

          <div className="user">
            <div className="userInfo">
              <img src={imginfo} alt="" />
              <span>Mohamed Sabry</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
        </div>
        <div className="item">
          <span>Latest Activities</span>
          <div className="user">
            <div className="userInfo">
              <img src={imginfo} alt="" />
              <p>
                <span>Mohamed Sabry</span> changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={imginfo} alt="" />
              <p>
                <span>Mohamed Sabry</span> changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={imginfo} alt="" />
              <p>
                <span>Mohamed Sabry</span> changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={imginfo} alt="" />
              <p>
                <span>Mohamed Sabry</span> changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="item">
          <span>Online Friends</span>

          <div className="user">
            <div className="userInfo">
              <img src={imginfo} alt="" />
              <div className="online" />
              <span>Mohamed Sabry</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={imginfo} alt="" />
              <div className="online" />
              <span>Mohamed Sabry</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={imginfo} alt="" />
              <div className="online" />
              <span>Mohamed Sabry</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={imginfo} alt="" />
              <div className="online" />
              <span>Mohamed Sabry</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={imginfo} alt="" />
              <div className="online" />
              <span>Mohamed Sabry</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={imginfo} alt="" />
              <div className="online" />
              <span>Mohamed Sabry</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={imginfo} alt="" />
              <div className="online" />
              <span>Mohamed Sabry</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={imginfo} alt="" />
              <div className="online" />
              <span>Mohamed Sabry</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={imginfo} alt="" />
              <div className="online" />
              <span>Mohamed Sabry</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={imginfo} alt="" />
              <div className="online" />
              <span>Mohamed Sabry</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightBar;
