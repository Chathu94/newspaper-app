import React from 'react';

import NavBar from './NavBar';
import RightContent from './RightContent';
import HeaderActive from './HeaderActive';
import HeaderLink from './HeaderLink';
import HeaderTitle from './HeaderTitle';
import Search from './Search';
import Button from '../Button';
import Carousel from './Carousel';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <NavBar>
          {/* Links */}
          <HeaderTitle to="/">
            <i className="far fa-newspaper"></i>
            &nbsp;&nbsp;Newspaper Bucket
          </HeaderTitle>
          <HeaderActive to="/">
            Home
          </HeaderActive>
          <HeaderLink to="/features">
            All Newspapers
          </HeaderLink>
          <HeaderLink to="/features">
            Newspaper Agents
          </HeaderLink>
          <HeaderLink to="/features">
            About Us
          </HeaderLink>
          <HeaderLink to="/features">
            Contact Us
          </HeaderLink>
          {/* Search */}
          <RightContent>
            <Search />
            <Button handleRoute="/logout">Logout</Button>
          </RightContent>
        </NavBar>
        <Carousel />
      </div>
    );
  }
}

export default Header;
