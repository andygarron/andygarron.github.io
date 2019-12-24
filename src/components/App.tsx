import React, { Component } from "react";
import SocialMediaLink from "./SocialMediaLink";
import ProjectDescription from "./ProjectDescription";
import GithubIcon from "../icons/GithubIcon";
import HoverableImage from "./HoverableImage";
import styles from "./App.module.styl";

var imageSrc =
  "https://lh4.googleusercontent.com/-gZiu96oTuu4/Uag5oWLQHfI/AAAAAAAABSE/pl1W8n91hH0/w140-h165-no/Homer-Static.png";

var animSrc =
  "https://lh4.googleusercontent.com/i1RprwcvxhbN2TAMunNxS4RiNVT0DvlD9FNQCvPFuJ0=w140-h165-no";

class App extends Component<{}> {
  render() {
    return (
      <div className={styles.main}>
        <div className={styles.headerText}>Andy Garron</div>
        <div className={styles.projects}>
          <ProjectDescription
            title="Guano's Big Day"
            body="A game about bat shit."
          />
          <HoverableImage staticSrc={imageSrc} hoverSrc={animSrc} />
        </div>
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
