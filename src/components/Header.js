import React, {Component} from 'react';
import styles from './Header.module.styl';
import {NAME} from '../constants/Constants';

class Header extends Component {
  render() {
    return <div className={styles.headerText}>{NAME}</div>;
  }
}

export default Header;
