import React from 'react';
import style from './Feature.module.scss';

const Feature = ({ text }) => {
  return (
    <div className={style.gpt3__define_withHr}>
      <div className={style.gpt3__header_lineMark} />
      <h3>{text}</h3>
    </div>
  );
};

export default Feature;
