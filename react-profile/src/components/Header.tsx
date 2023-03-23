import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header: React.FC = () => {
  return (
    <header>
      <h1>自己紹介サイト</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/diary">Diary</Link>
      </nav>
    </header>
  );
};

export default Header;
