// @flow
import React, { Component } from "react";
import SocialMediaLink from "./SocialMediaLink";
import GithubIcon from "../icons/GithubIcon";
//$FlowFixMe style imports lol
import styles from "./App.module.styl";

type TestType = {
  testString: string,
  testNum: number
};

class App extends Component<{}> {
  testVal: TestType;
  constructor() {
    super();
    this.testVal = {
      testString: "t",
      testNum: 2
    };
  }
  render() {
    return (
      <div className={styles.main}>
        <div className={styles.headerText}>Andy Garron</div>
        <div className={styles.socialLinks}>
          <SocialMediaLink
            icon={GithubIcon}
            href={"https://github.com/andyg"}
            text={"GitHub"}
          />
        </div>
      </div>
    );
  }
}

export default App;
