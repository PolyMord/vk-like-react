import React from "react"
import audioImg from '../assets/friend.png'

const Audios = () => {
  return (
    <div className="audios">
      <div className="audios__header">
        <a href="/" className="subscribes__head-link">
          Подписки
        </a>
      </div>
      <div className="audios__list">
        <div className="audios__row">
          <div className="audios__item">
            <a className="audios__link" href="/">
              <img className="audios__image" src={audioImg} alt="" />
              <div className="audios__info">
                <p className="audios__name">Новый пират</p>
                <p className="audios__artist">А. Пистолетов</p>
              </div>
            </a>
          </div>
        </div>
        <div className="audios__row">
          <div className="audios__item">
            <a className="audios__link" href="/">
              <img className="audios__image" src={audioImg} alt="" />
              <div className="audios__info">
                <p className="audios__name">Новый пират</p>
                <p className="audios__artist">А. Пистолетов</p>
              </div>
            </a>
          </div>
        </div>
        <div className="audios__row">
          <div className="audios__item">
            <a className="audios__link" href="/">
              <img className="audios__image" src={audioImg} alt="" />
              <div className="audios__info">
                <p className="audios__name">Новый пират</p>
                <p className="audios__artist">А. Пистолетов</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Audios
