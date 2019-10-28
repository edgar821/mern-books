import React from "react";
import "./style.css";

function Title(props) {
  return <h2 className="page-title"><span>{props.title}</span></h2>;
}

export default Title;
