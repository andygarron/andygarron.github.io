// @flow
import React, { Component } from "react";
// $FlowFixMe
import styles from "./HoverableImage.module.styl";

type Props = {
  staticSrc: string,
  hoverSrc: string
};

class HoverableImage extends Component<Props> {
  render() {
    return (
      <div className={styles.container}>
        <img className={styles.staticImage} src={this.props.staticSrc} />
        <img className={styles.hoveredImage} src={this.props.hoverSrc} />
      </div>
    );
  }
}

export default HoverableImage;
