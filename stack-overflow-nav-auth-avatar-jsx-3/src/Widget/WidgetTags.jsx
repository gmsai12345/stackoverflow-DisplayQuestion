import React from "react";
const WidgetTags = () => {
  const tags = ['c','css','java','javascript','python','react'];
  return (<div>
<div className = "widget-tags">
  <h1>Watched Tags</h1>
    <div className = "widget-tags-div">
      {
        tags.map((tag) => ( 
          <p key = {tag}>{tag}</p>
        ))
      }
  </div>
  </div> 
  );
};
export default WidgetTags;
