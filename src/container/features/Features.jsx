import React from 'react';
import { featureConstants, featureStack } from '../../constants/constants';
import FeatureComponent from '../../components/feature/Feature';
import style from './Feature.module.scss';

const Feature = () => {
  return (
    <div className={style.gpt3__feature_top}>
      <div className={style.gpt3__feature}>
        <div className={style.gpt3__feature_description}>
          <h3 className='gradient__text'>{featureConstants.feature}</h3>
          <p>{featureConstants.text}</p>
        </div>
        <div className={style.gpt3__feature_descriptionBox}>
          {featureStack.map((item, index) => {
            return (
              <div
                key={index}
                className={style.gpt3__feature_descriptionBox_content}
              >
                <FeatureComponent text={item.name} />
                {/* <h3>{item.name}</h3> */}
                <p>{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Feature;
