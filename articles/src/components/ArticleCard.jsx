import React from 'react'

export default function ArticleCard(props){
    return (
        <div className="card">
              <div className="card-image">
                <img src={props.article.image} title={props.article.title} alt={props.article.title}/>
              </div>
              <div className="card-content">
                  <div className="title">{props.article.title}</div>
                  <div className="category">{props.article.category}</div>
              </div>
          </div>
    )
}