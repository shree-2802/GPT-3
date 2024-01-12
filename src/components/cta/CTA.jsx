//call to action - CTA

import React from 'react';
import { ctaConstants } from '../../constants/constants';
import style from './CTA.module.scss';

const CTA = () => {
  return (
    <div className={style.gpt3__cta}>
      <div className={style.gpt3__cta_container}>
        <div className={style.gpt3__cta_container_text}>
          <p>{ctaConstants.desc}</p>
          <h3>{ctaConstants.mainDesc}</h3>
        </div>
        <div className={style.gpt3__cta_container_button}>
          <button>{ctaConstants.buttonContent}</button>
        </div>
      </div>
    </div>
  );
};

export default CTA;
