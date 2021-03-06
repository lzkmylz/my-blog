import React from 'react';
import { Link } from 'react-router-dom';
import { Input } from 'antd';

const Header = () => (
  <div className="three-row-box">
    <div className="header-left-context">
      <div className="search-box">
        <div className="image-container">
          <Link to="/">
            <img
              className="search-logo"
              src="/images/headerSearchLogo.jpg"
              alt="search-logo"
            />
          </Link>
        </div>
        <div className="search-input-container">
          <Input
            type="text"
            className="search-input"
            placeholder="Articles/Games/..."
            size="default"
          />
        </div>
      </div>
    </div>
    <div className="header-center-context">
      <div className="title">
        <p>lzkmylz的个人博客</p>
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
