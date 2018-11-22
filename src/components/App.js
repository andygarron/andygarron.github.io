// @flow
import React, { Component } from "react";
import SocialMediaLink from "./SocialMediaLink";
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
        Andy Garron
        <SocialMediaLink text={"help"} />
      </div>
    );
  }
}

export default App;
