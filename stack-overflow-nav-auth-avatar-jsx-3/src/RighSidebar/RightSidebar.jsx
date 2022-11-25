import React from "react";
import "./RightSidebar.css";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import CreateIcon from "@mui/icons-material/Create";
const RightSidebar = () => {
  return (
    <div>
      <aside className="right-sidebar"></aside>
      <widget />
      <widgettags />
    </div>
  );
};
export default RightSidebar;
