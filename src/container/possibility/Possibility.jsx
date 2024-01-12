import React from 'react';
import { possibilityConstants } from '../../constants/constants';
import style from './Possibility.module.scss';

const Possibility = () => {
  return (
    <div className={style.gpt3__possibility}>
      <div className={style.gpt3__possibility_container}>
        <div className={style.gpt3__possibility_container_image}>
          <img src={possibilityConstants.img} alt='possibility' />
        </div>
        <div className={style.gpt3__possibility_container_content}>
          <p>{possibilityConstants.request}</p>
          <h3 className='gradient__text'>{possibilityConstants.heading}</h3>
          <p>{possibilityConstants.para}</p>
          <p>{possibilityConstants.finalReq}</p>
        </div>
      </div>
    </div>
  );
};

export default Possibility;
