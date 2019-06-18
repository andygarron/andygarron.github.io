// @flow
import React, { Component } from "react";
// $FlowFixMe
import styles from "./ProjectDescription.module.styl";
import GithubIcon from "../icons/GithubIcon";

type Props = {
  staticSrc: string,
  hoverSrc: string
};

class HoverableImage extends Component<Props> {
  render() {
    return <div className={styles.container} />;
  }
}

export default HoverableImage;
