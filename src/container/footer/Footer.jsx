import React from 'react'
import { footerConstants } from '../../constants/constants';
import style from './Footer.module.scss';

const Footer = () => {
  return (
    <div className={style.gpt3__footer}>
      <div className={style.gpt3__footer_container}>
        <h3 className='gradient__text'>{footerConstants.heading}</h3>
        <button>{footerConstants.buttonContent}</button>
        <div className={style.gpt3__footer_container_links}>
          <div className={style.gpt3__footer_container_links_col1}>
            <img src={footerConstants.name} alt='GPT-3'/>
            <p>{footerConstants.context}</p>
          </div>
          <div className={style.gpt3__footer_container_links_col2}>
            <h4>Links</h4>
            <div>
              {
                footerConstants.links.map((item,index)=>(<p key={index}>{item}</p>))
              }
            </div>
          </div>
          <div className={style.gpt3__footer_container_links_col3}>
            <h4>Company</h4>
            <div>
              {
                footerConstants.Company.map((item,index)=>(<p key={index}>{item}</p>))
              }
            </div>
          </div>
          <div className={style.gpt3__footer_container_links_col4}>
            <h4>Get in touch</h4>
            <div>
              {
                footerConstants['Get in touch'].map((item,index)=>(<p key={index}>{item}</p>))
              }
            </div>
          </div>
        </div>
        <p>{footerConstants['Copy rights']}</p>
      </div>
    </div>
  )
}

export default Footer