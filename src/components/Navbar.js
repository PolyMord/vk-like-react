import React from "react"
import navbarAvatar from "../assets/navbar_avatar.jpg"

const Navbar = () => {
  const inputFocus = () => {
    document
      .getElementsByClassName("navbar__input-label")[0]
      .classList.add("focused")

    document
      .getElementsByClassName("navbar__input-text")[0]
      .classList.add("plholder")
  }

  const inputFocusout = () => {
    document
      .getElementsByClassName("navbar__input-label")[0]
      .classList.remove("focused")

    document
      .getElementsByClassName("navbar__input-text")[0]
      .classList.remove("plholder")
  }

  return (
    <header className="navbar">
      <div className="navbar__wrapper container">
        <div className="navbar__logo">
          <a className="navbar__logo-link" href="/">
            <i className="navbar__logo-icon material-icons">home</i>
            <span className="navbar__logo-span">#лучшетома</span>
          </a>
        </div>
        <form className="navbar__input-form">
          <label className="navbar__input-label" htmlFor="head-search">
            <button
              className="navbar__input-btn material-icons"
              type="submit"
            >
              search
            </button>
            <input
              className="navbar__input-text"
              type="text"
              placeholder="Поиск"
              id="head-search"
              onFocus={inputFocus}
              onBlur={inputFocusout}
            />
          </label>
        </form>
        <div className="navbar__bell">
          <a className="navbar__bell-link" href="/">
            <i className="navbar__bell-icon material-icons">
              notifications
            </i>
          </a>
        </div>
        <div className="navbar__player">
          <button className="navbar__player-btn navbar__player-btn-prev material-icons">
            skip_previous
          </button>
          <button className="navbar__player-btn navbar__player-btn-play material-icons">
            play_arrow
          </button>
          <button className="navbar__player-btn navbar__player-btn-next material-icons">
            skip_next
          </button>
          <div className="navbar__player-text">Пистолетов - Новый пират</div>
        </div>
        <div className="navbar__nav-btn">
          <a className="navbar__nav-btn-link" href="/">
            <span className="navbar__nav-btn-name">Станислав</span>
            <div className="navbar__nav-btn-right">
              <img className="navbar__nav-btn-img" src={navbarAvatar} alt="☺" />
              <i className="navbar__nav-btn-icon material-icons">expand_more</i>
            </div>
          </a>
        </div>
      </div>
    </header>
  )
}

export default Navbar
