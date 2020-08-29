import React from "react";
import { css } from "emotion";

function Wrapper(props) {

  const wrapper = css`
    padding-top: 50px;
    height: 100%;
    flex-flow: row wrap;
    padding: 20px;
    justify-content: space-around;
    align-content: flex-start;
    overflow: auto;
  }`

  return <div className={wrapper}>{props.children}</div>;
}

export default Wrapper;
