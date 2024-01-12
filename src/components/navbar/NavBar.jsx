import React, { useState } from 'react';
import { RiCloseLine, RiMenu3Line } from 'react-icons/ri';
import { logo2 } from '../../assets/index';
import { navLinks } from '../../constants/constants';
import style from './NavBar.module.scss';

const Menu = () => {
  return (
    <>
      {navLinks.map((link, index) => (
        <a key={index} href={`#${link.nav}`}>
          {link.link}
        </a>
      ))}
    </>
  );
};
const Sign = () => {
  return (
    <div className={style.gpt3__navbar_sign}>
      <p>Sign in</p>
      <button>Sign up</button>
    </div>
  );
};
const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className={style.gpt3__navbar}>
      <div className={style.gpt3__navbar_links}>
        <div className={style.gpt3__navbar_links_logo}>
          <img src={logo2} alt='Logo' />
        </div>
        <div className={style.gpt3__navbar_links_container}>
          <Menu />
        </div>
      </div>
      <Sign />
      <div className={style.gpt3__navbar_menu}>
        {toggleMenu ? (
          <RiCloseLine
            color='#fff'
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color='#fff'
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div
            className={[
              style.gpt3__navbar_links_container,
              style.scale_up_center,
            ].join(' ')}
          >
            <Menu />
            <Sign />
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
