import React from "react";

const Avatar = ({
  children,
  backgroundColor,
  py,
  px,
  color,
  borderRadius,
  fontSize,
  cursor,
  mx,
  my
}) => {
  const style = {
    backgroundColor,
    padding: `${py} ${px}`,
    color: color || "black",
    borderRadius,
    fontSize,
    textAlign: "center",
    cursor: cursor || null,
    margin: `${my} ${mx}`
  };

  return <div style={style}>{children}</div>;
};

export default Avatar;
