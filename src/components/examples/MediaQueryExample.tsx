
import React from 'react';
import {DesktopBreakpoint, PhoneBreakpoint} from '../../util/Breakpoint';

export const MediaQueryExample = () => (
  <div>
    <DesktopBreakpoint>
      <div>
        this is a desktop
      </div>
    </DesktopBreakpoint>
    <PhoneBreakpoint>
      <div>
        this is a phone
      </div>
    </PhoneBreakpoint>
  </div>
);
