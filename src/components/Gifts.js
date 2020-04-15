import React from "react"
import giftImg from '../assets/gift.png'

const Gifts = () => {
  return (
    <div className="gifts">
      <div className="gifts__header">
        <a href="/" className="gifts__head-link">
          Подарки
          <span className="gifts__head-item">3</span>
        </a>
      </div>
      <div className="gifts__list">
        <div className="gifts__item">
          <a className='gifts__link' href="/">
            <img className="gifts__image" src={giftImg} alt="" />
          </a>
        </div>
        <div className="gifts__item">
          <a className='gifts__link' href="/">
            <img className="gifts__image" src={giftImg} alt="" />
          </a>
        </div>
        <div className="gifts__item">
          <a className='gifts__link' href="/">
            <img className="gifts__image" src={giftImg} alt="" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Gifts
