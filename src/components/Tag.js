import React from "react";

const Tag = ({tag}) => {
  return (
    <div
      className="tag flex mr-4"
      style={{ alignItems: "center" }}
    >
      <div
        className="circle mr-1"
        style={{
          width: "12px",
          height: "12px",
          borderRadius: "50%",
          background: tag.color,
        }}
      ></div>
      <div className="text">{tag.text}</div>
    </div>
  );
};

export default Tag;
