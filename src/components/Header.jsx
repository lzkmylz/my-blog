import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <div className="headerBox">
    <div className="headerLeftContext">
      <div className="headerSearchLogoBox">
        <img
          className="headerSearchLogoImg"
          src="/images/headerSearchLogo.jpg"
          alt="Header logo"
        />
      </div>
      <div className="headerSearchBox">
        <input
          type="text"
          className="headerSearchInput"
          placeholder="Search"
        />
      </div>
    </div>
    <div className="headerCenterContext">
      <div className="centerBox">
        <div className="topCenterBox">
          <p>lzkmylz的个人博客</p>
        </div>
        <div className="topBottomBox">
          <p>Blog of lzkmylz</p>
        </div>
      </div>
    </div>
    <div className="headerRightContext">
      <ul>
        <li><Link className="headerLink" to="/games">博文</Link></li>
        <li><Link className="headerLink" to="/articles">小游戏</Link></li>
        <li><Link className="headerLink" to="/photos">照片</Link></li>
        <li><Link className="headerLink" to="/git">Github</Link></li>
      </ul>
    </div>
  </div>
);

export default Header;
