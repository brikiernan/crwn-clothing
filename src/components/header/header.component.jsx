import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assetts/crown.svg';
import './header.styles.scss';

export default function Header() {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" title="CRWN CLT" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>
      </div>
    </div>
  );
}
