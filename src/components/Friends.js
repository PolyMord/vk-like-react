import React from "react"
import friendImg from "../assets/friend.png"

const Friends = () => {
  return (
    <div className="friends">
      <div className="friends__header">
        <a href="/" className="friends__left-link">
          Друзья
        </a>
        <a href="/" className="friends__right-link">
          обновления
        </a>
      </div>
      <div className="friends__list">
        <div className="friends__row">
          <div className="friends__item">
            <a className="friends__link" href="/">
              <img className="friends__image" src={friendImg} alt="" />
              <div className="friends__name">Name</div>
            </a>
          </div>
          <div className="friends__item">
            <a className="friends__link" href="/">
              <img className="friends__image" src={friendImg} alt="" />
              <div className="friends__name">Name</div>
            </a>
          </div>
          <div className="friends__item">
            <a className="friends__link" href="/">
              <img className="friends__image" src={friendImg} alt="" />
              <div className="friends__name">Name</div>
            </a>
          </div>
        </div>
        <div className="friends__row">
          <div className="friends__item">
            <a className="friends__link" href="/">
              <img className="friends__image" src={friendImg} alt="" />
            </a>
            <div className="friends__name">Name</div>
          </div>
          <div className="friends__item">
            <a className="friends__link" href="/">
              <img className="friends__image" src={friendImg} alt="" />
              <div className="friends__name">Name</div>
            </a>
          </div>
          <div className="friends__item">
            <a className="friends__link" href="/">
              <img className="friends__image" src={friendImg} alt="" />
              <div className="friends__name">Name</div>
            </a>
          </div>
        </div>
        <div className="friends__hr" />
        <div className="friends__online-head">
          <a href="/" className="friends__online-link">
            Друзья онлайн<span>2</span>
          </a>
        </div>
        <div className="friends__online-body">
          <div className="friends__online-item">
            <a className="friends__link" href="/">
              <img className="friends__image" src={friendImg} alt="" />
              <div className="friends__name">Name</div>
            </a>
          </div>
          <div className="friends__item">
            <a className="friends__link" href="/">
              <img className="friends__image" src={friendImg} alt="" />
              <div className="friends__name">Name</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Friends
