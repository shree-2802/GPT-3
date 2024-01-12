import React from 'react';
import style from './Header.module.scss';
import { headerContent, headerSponsor } from '../../constants/constants';
const Header = () => {
  return (
    <header className={style.gpt3__header}>
      <div className={style.gpt3__header_container}>
        <div className={style.gpt3__header_container_text}>
          <h1
            className={`${style.gpt3__header_container_text_head} gradient__text`}
          >
            {headerContent.mainHeading}
          </h1>
          <p>{headerContent.paragraph}</p>
          <div className={style.gpt3__header_container_text_input}>
            <input
              type='email'
              placeholder={headerContent.inputBoxPlaceHolder}
            />
            <button>{headerContent.buttonContent}</button>
          </div>
          <div className={style.gpt3__header_container_text_stat}>
            <img src={headerContent.peopleImage} alt='people' />
            <p>1,600 people requested access a visit in last 24 hours</p>
          </div>
        </div>
        <div className={style.gpt3__header_container_image}>
          <img src={headerContent.img} alt='ai' />
        </div>
      </div>
      <div className={style.gpt3__header_sponsor}>
        {headerSponsor.map((image, index) => (
          <img key={index} src={image} alt={'sponsor'} />
        ))}
      </div>
    </header>
  );
};

export default Header;
