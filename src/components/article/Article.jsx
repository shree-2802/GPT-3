import React from 'react'
import style from './Article.module.scss'
const Article = ({title,image}) => {
  return (
    <div className={style.gpt3__article}>
      <div className={style.gpt3__article_container}>
          <div >        
            <img src={image} alt="blogImage" className={style.gpt3__article_container_image}/>
            <div className={style.gpt3__article_container_text}>
              <p>Sep 26, 2021</p>
              <h3>{title}</h3>
            </div>
          </div>
          <a href='#'>Read Full Article</a>
      </div>
    </div>
  )
}

export default Article