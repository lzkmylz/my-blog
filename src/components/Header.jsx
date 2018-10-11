import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <div className="three-row-box">
    <div className="header-left-context">
      <div className="search-logo-container">
        <img
          className="search-logo-img"
          src="/images/headerSearchLogo.jpg"
          alt="Header logo"
        />
      </div>
      <div className="search-input-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
        />
      </div>
    </div>
    <div className="header-center-context">
      <div className="two-col-box">
        <div className="top-box">
          <p>lzkmylz的个人博客</p>
        </div>
        <div className="bottom-box">
          <p>Blog of lzkmylz</p>
        </div>
      </div>
    </div>
    <div className="header-right-context">
      <ul>
        <li><Link className="header-link" to="/articles">博文</Link></li>
        <li><Link className="header-link" to="/games">小游戏</Link></li>
        <li><Link className="header-link" to="/photos">照片</Link></li>
        <li><Link className="header-link" to="/git">Github</Link></li>
      </ul>
    </div>
  </div>
);

export default Header;
