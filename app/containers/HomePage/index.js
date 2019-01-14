/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
// import { FormattedMessage } from 'react-intl';
// import messages from './messages';
import Logo from './styled/Logo';
import Splash from './styled/Splash';
import Button from './styled/Button';

/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.PureComponent {
  render() {
    return (
      <div className="background">
        <div className="gradient"> </div>
        <div className="landing">
          <Button className="button">About</Button>
          <Button className="button">Contact</Button>
          <Splash />
          <Logo>Gebo</Logo>
        </div>
      </div>
    );
  }
}
