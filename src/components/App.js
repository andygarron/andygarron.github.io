import React, {Component} from 'react';
import Header from './Header';
import SocialMediaLink from './SocialMediaLink';
import GithubIcon from '../icons/GithubIcon';
import styles from './App.module.styl';

class App extends Component {
  render() {
    return (
      <div>
        <div className={styles.main}>
          <Header />
        </div>
        <div className={styles.socialLinks}>
          <SocialMediaLink text="Github" href="https://github.com/angarron" icon={GithubIcon} />
        </div>
      </div>
    );
  }
}

export default App;
