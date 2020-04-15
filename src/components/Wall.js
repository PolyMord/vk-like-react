import React from "react"
import postImage from '../assets/no_posts.png'

const Wall = () => {
  return (
    <div className="wall">
      <div className="wall__head">
        <a className="wall__head-link" href="/">Нет записей</a>
      </div>
      <div className="wall__post">
        <div className="wall__no-post">
          <img className="wall__img" src={postImage} alt="asd" />
          <span className="wall__span">На стене пока нет ни одной записи</span>
        </div>
      </div>
    </div>
  )
}

export default Wall
