import React from "react"
import subImg from "../assets/friend.png"

const Subscribes = () => {
  return (
    <div className="subscribes">
      <div className="subscribes__header">
        <a href="/" className="subscribes__head-link">
          Подписки
        </a>
      </div>
      <div className="subscribes__list">
        <div className="subscribes__row">
          <div className="subscribes__item">
            <a className="subscribes__link" href="/">
              <img className="subscribes__image" src={subImg} alt="" />
              <div className="subscribes__info">
                <p className="subscribes__name">Lorem ipsum dolor sit</p>
                <p className="subscribes__desc">
                  accusantium culpa odit quod optio facilis laborum.
                </p>
              </div>
            </a>
          </div>
        </div>
        <div className="subscribes__row">
          <div className="subscribes__item">
            <a className="subscribes__link" href="/">
              <img className="subscribes__image" src={subImg} alt="" />
              <div className="subscribes__info">
                <p className="subscribes__name">Lorem ipsum dolor sit</p>
                <p className="subscribes__desc">
                  accusantium culpa odit quod optio facilis laborum.
                </p>
              </div>
            </a>
          </div>
        </div>
        <div className="subscribes__row">
          <div className="subscribes__item">
            <a className="subscribes__link" href="/">
              <img className="subscribes__image" src={subImg} alt="" />
              <div className="subscribes__info">
                <p className="subscribes__name">Lorem ipsum dolor sit</p>
                <p className="subscribes__desc">
                  accusantium culpa odit quod optio facilis laborum.
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Subscribes
