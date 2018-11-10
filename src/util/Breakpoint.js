import React from 'react';
import MediaQuery from 'react-responsive';

const Breakpoints = {
  Desktop: '(min-width: 1025px)',
  Tablet: '(min-width: 768px) and (max-width: 1024px)',
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

export function DesktopBreakpoint(props) {
  console.log(Breakpoints.Desktop);
  return (
    <Breakpoint breakpoint={Breakpoints.Desktop}>
      {props.children}
    </Breakpoint>
  );
}

export function TabletBreakpoint(props) {
  return (
    <Breakpoint breakpoint={Breakpoints.Tablet}>
      {props.children}
    </Breakpoint>
  );
}

export function PhoneBreakpoint(props) {
  return (
    <Breakpoint breakpoint={Breakpoints.Phone}>
      {props.children}
    </Breakpoint>
  );
}