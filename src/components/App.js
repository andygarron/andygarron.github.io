// @flow
import React, {Component} from 'react';
import DesktopApp from './DesktopApp';
import PhoneApp from './PhoneApp';
import {DesktopBreakpoint, PhoneBreakpoint} from '../util/Breakpoint';

class App extends Component {

  render() {
    return (
      <div>
        <DesktopBreakpoint>
          <DesktopApp/>
        </DesktopBreakpoint>
        <PhoneBreakpoint>
          <PhoneApp/>
        </PhoneBreakpoint>
      </div>
    );
  }
}

export default App;
