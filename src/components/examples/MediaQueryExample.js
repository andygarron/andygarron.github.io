
import React from 'react';
import {DesktopBreakpoint, PhoneBreakpoint, TabletBreakpoint} from '../../util/Breakpoint';

export const MediaQueryExample = () => (
  <div>
    <DesktopBreakpoint>
      <div>
        this is a desktop
      </div>
    </DesktopBreakpoint>
    <TabletBreakpoint>
      <div>
        this is a tablet
      </div>
    </TabletBreakpoint>
    <PhoneBreakpoint>
      <div>
        this is a phone
      </div>
    </PhoneBreakpoint>
  </div>
);
