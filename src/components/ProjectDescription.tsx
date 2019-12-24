import React, { Component } from "react";
import styles from "./ProjectDescription.module.styl";
import GithubIcon from "../icons/GithubIcon";

type Props = {
  title: string,
  body: string
};

class ProjectDescription extends Component<Props> {
  render() {
    return (
      <div className={styles.container}>
        <GithubIcon className={styles.staticImage} />
        <GithubIcon className={styles.icon} />
        <div className={styles.textContainer}>
          <div className={styles.title}>{this.props.title}</div>
          <div className={styles.body}>{this.props.body}</div>
        </div>
      </div>
    );
  }
}

export default ProjectDescription;
