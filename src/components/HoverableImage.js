// @flow
import React, { Component } from "react";
// $FlowFixMe
import styles from "./HoverableImage.module.styl";

type Props = {
  staticSrc: string,
  hoverSrc: string
};

type State = {
  isHovered: boolean
};

class HoverableImage extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { isHovered: false };
  }

  render() {
    const image: string = this.state.isHovered
      ? this.props.hoverSrc
      : this.props.staticSrc;

    return (
      <div className={styles.container}>
        <img
          className={styles.image}
          src={image}
          alt=""
          onMouseEnter={this.onHover}
          onMouseOut={this.onUnhover}
        />
      </div>
    );
  }

  onHover = () => {
    this.setState({ isHovered: true });
  };

  onUnhover = () => {
    this.setState({ isHovered: false });
  };
}

export default HoverableImage;
