import React from "react";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import CreateIcon from "@mui/icons-material/Create";
const Widget = () => {
  return (
    <div>
      <div className="widget">
        <h1>the overflow blog</h1>
        <div className="right-sidebar-div-1">
          <span>
            <img src={CreateIcon} alt="pen" />
            <p> Cloudy with a chance of… the state of cloud in 2022</p>
          </span>
          <span>
            <img src={CreateIcon} alt="pen" />
            <p>Here’s what it’s like to develop VR at Meta (Ep. 508)</p>
          </span>
        </div>
      </div>

      <div className="widget-2">
        <h1>Featured on Meta</h1>
        <div className="right-sidebar-div-2">
          <span>
            <img src={ChatBubbleOutlineIcon} alt="pen" />
            <p>The Windows Phone SE site has been archived</p>
          </span>
          <span>
            <img src={ChatBubbleOutlineIcon} alt="pen" />
            <p>Stack Gives Back to Open Source 2022</p>
          </span>
        </div>
      </div>
      <div className="widget-3">
        <h1>Hot Meta Posts</h1>
        <div className="right-sidebar-div-3">
          <span>
            <img src={ChatBubbleOutlineIcon} alt="pen" />
            <p> The [collapse] tag is being burninated</p>
          </span>
          <span>
            <img src={ChatBubbleOutlineIcon} alt="pen" />
            <p>The Ask Wizard (2022) has graduated</p>
          </span>
        </div>
      </div>
    </div>
  );
};
export default Widget;
