import React from 'react'
import {blogConstants} from '../../constants/constants';
import style from './Blog.module.scss';
import Article from '../../components/article/Article';

const Blog = () => {
  return (
    <div className={style.gpt3__blog}>
      <div className={style.gpt3__blog_container}>
        <h3 className={`gradient__text ${style.gpt3__blog_container_h3}`}>{blogConstants.head}</h3>
        <div className={style.gpt3__blog_container_cards}>
          <div className={style.gpt3__blog_container_cards_A}>
            <Article title={blogConstants.blogCard[0].title} image={blogConstants.blogCard[0].image}/>
          </div>
          <div className={style.gpt3__blog_container_cards_B}>
            {
              blogConstants.blogCard.map((item,index)=>{
                return(
                  index!==0 && <Article key={index} title={item.title} image={item.image}/>)
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog