import React from 'react';
import {
  topQuestion,
  middleSection,
  footerSection,
} from '../../constants/constants';
import style from './WhatGPT3.module.scss';
import Feature from '../../components/feature/Feature';
export const WhatGPT3 = () => {
  return (
    <div className={style.gpt3__define}>
      <div className={style.gpt3__define_container_head}>
        <Feature text={topQuestion.question} />
        <p className={style.gpt3__define_container_head_p}>
          {topQuestion.answer}
        </p>
      </div>
      <div className={style.gpt3__define_container_middle}>
        <h1 className='gradient__text'>{middleSection.context}</h1>
        <p>{middleSection.sideContext}</p>
      </div>
      <div className={style.gpt3__define_container_footer}>
        {footerSection.map((item, index) => {
          return (
            <div
              className={style.gpt3__define_container_footer_div}
              key={index}
            >
              <div>
                <Feature text={item.word} />
              </div>
              <p>{item.definition}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
