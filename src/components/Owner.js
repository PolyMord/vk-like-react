import React from "react"
import avatar from "../assets/avatar.jpg"

const Owner = () => {
  return (
    <div className="owner">
      <div className="owner__wrapper">
        <div className="owner__avatar">
          <img className="owner__image" src={avatar} alt="avatar" />
        </div>
        <div className="owner__actions">
          <div className="owner__edit">
            <a className="owner__edit-text" href="/">
              Редактировать
            </a>
          </div>
          <div className="owner__dots">
            <a className="owner__dots-link" href="/">
              <i className='owner__dot material-icons'>more_horiz</i>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Owner
