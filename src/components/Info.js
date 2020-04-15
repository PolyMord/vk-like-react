import React from "react"

const Info = () => {
  return (
    <div className="info">
      <div className="info__about">
        <div className="info__status">
          <div className="info__top">
            <h1 className="info__name">Имя Фамилия</h1>
            <span className="info__was">заходил тогда-то</span>
          </div>
          <div className="info__bot">
            <a className="info__status-link" href="/">
              изменить статус
            </a>
          </div>
        </div>
        <div className="info__live">
          <div className="info__city">
            <div className="info__city-where">Город:</div>
            <a className="info__city-name" href="/">
              Нур-Султан
            </a>
          </div>
          <div className="info__more-info">
            <a className='info__more-link' href="/">Показать подробную информацию</a>
          </div>
        </div>
      </div>
      <div className="info__counts">
        <div className="info__item">
          <a href="/" className="info__link">
            <h2 className="info__head-link">322</h2>
            <span className="info__foot-link">друзей</span>
          </a>
        </div>
        <div className="info__item">
          <a href="/" className="info__link">
            <h2 className="info__head-link">228</h2>
            <span className="info__foot-link">подписчиков</span>
          </a>
        </div>
        <div className="info__item">
          <a href="/" className="info__link">
            <h2 className="info__head-link">14</h2>
            <span className="info__foot-link">фотографии</span>
          </a>
        </div>
        <div className="info__item">
          <a href="/" className="info__link">
            <h2 className="info__head-link">88</h2>
            <span className="info__foot-link">аудиозаписи</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Info
