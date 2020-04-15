import React from "react"
import avatarImg from "../assets/navbar_avatar.jpg"

const SubmitPost = () => {
  return (
    <div className="submit-post">
      <div className="submit-post__avatar">
        <a className="submit-post__avatar-link" href="/">
          <img className="submit-post__avatar-img" src={avatarImg} alt="as" />
        </a>
      </div>
      <form className="submit-post__input-form">
        <input
          className="submit-post__input"
          placeholder="Что у Вас нового?"
          type="text"
        />
      </form>
      <div className="submit-post__buttons">
        <ul className="submit-post__list">
          <li className="submit-post__item">
            <a className="submit-post__link" href="/">
              <i className="submit-post__icon material-icons">photo_camera</i>
            </a>
          </li>
          <li className="submit-post__item">
            <a className="submit-post__link" href="/">
              <i className="submit-post__icon material-icons">theaters</i>
            </a>
          </li>
          <li className="submit-post__item">
            <a className="submit-post__link" href="/">
              <i className="submit-post__icon material-icons">music_note</i>
            </a>
          </li>
          <li className="submit-post__item">
            <a className="submit-post__link" href="/">
              <i className="submit-post__icon material-icons">library_books</i>
            </a>
          </li>
          <div className="submit-post__hr"/>
          <li className="submit-post__item">
            <a className="submit-post__link" href="/">
              <i className="submit-post__icon material-icons">
                brightness_auto
              </i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default SubmitPost
