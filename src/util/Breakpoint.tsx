import React from 'react';
import MediaQuery from 'react-responsive';

const Breakpoints = {
  Desktop: '(min-width: 768px)',
  Phone: '(max-width: 767px)',
};

type Props = {
  breakpoint: string,
  children: object,
}

function Breakpoint(props: Props) {
  console.log(props, props.breakpoint);
  return (
    <MediaQuery query={props.breakpoint} {...props} >
      {props.children}
    </MediaQuery >
 );
}

export function DesktopBreakpoint(children: object) {
  console.log(Breakpoints.Desktop);
  return (
    <Breakpoint breakpoint={Breakpoints.Desktop}>
      {children}
    </Breakpoint>
  );
}

export function PhoneBreakpoint(children: object) {
  return (
    <Breakpoint breakpoint={Breakpoints.Phone}>
      {children}
    </Breakpoint>
  );
}
