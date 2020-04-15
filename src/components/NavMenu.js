import React from "react"

const NavMenu = () => {

  const mouseOverHandle = (event) => {
    const one = document.getElementById("nav-one")
    const two = document.getElementById("nav-two")
    const three = document.getElementById("nav-three")
    const four = document.getElementById("nav-four")
    const five = document.getElementById("nav-five")
    const six = document.getElementById("nav-six")
    const seven = document.getElementById("nav-seven")
    const eight = document.getElementById("nav-eight")
    const nine = document.getElementById("nav-nine")
    const ten = document.getElementById("nav-ten")
    const eleven = document.getElementById("nav-eleven")

    switch (true) {
      case event.currentTarget.classList.contains("nav-one"):
        return (one.style.opacity = "1")
      case event.currentTarget.classList.contains("nav-two"):
        return (two.style.opacity = "1")
      case event.currentTarget.classList.contains("nav-three"):
        return (three.style.opacity = "1")
      case event.currentTarget.classList.contains("nav-four"):
        return (four.style.opacity = "1")
      case event.currentTarget.classList.contains("nav-five"):
        return (five.style.opacity = "1")
      case event.currentTarget.classList.contains("nav-six"):
        return (six.style.opacity = "1")
      case event.currentTarget.classList.contains("nav-seven"):
        return (seven.style.opacity = "1")
      case event.currentTarget.classList.contains("nav-eight"):
        return (eight.style.opacity = "1")
      case event.currentTarget.classList.contains("nav-nine"):
        return (nine.style.opacity = "1")
      case event.currentTarget.classList.contains("nav-ten"):
        return (ten.style.opacity = "1")
      case event.currentTarget.classList.contains("nav-eleven"):
        return (eleven.style.opacity = "1")
      default:
        return null
    }
  }
  const mouseOutHandle = (event) => {
    const one = document.getElementById("nav-one")
    const two = document.getElementById("nav-two")
    const three = document.getElementById("nav-three")
    const four = document.getElementById("nav-four")
    const five = document.getElementById("nav-five")
    const six = document.getElementById("nav-six")
    const seven = document.getElementById("nav-seven")
    const eight = document.getElementById("nav-eight")
    const nine = document.getElementById("nav-nine")
    const ten = document.getElementById("nav-ten")
    const eleven = document.getElementById("nav-eleven")

    switch (true) {
      case event.currentTarget.classList.contains("nav-one"):
        return (one.style.opacity = "0")
      case event.currentTarget.classList.contains("nav-two"):
        return (two.style.opacity = "0")
      case event.currentTarget.classList.contains("nav-three"):
        return (three.style.opacity = "0")
      case event.currentTarget.classList.contains("nav-four"):
        return (four.style.opacity = "0")
      case event.currentTarget.classList.contains("nav-five"):
        return (five.style.opacity = "0")
      case event.currentTarget.classList.contains("nav-six"):
        return (six.style.opacity = "0")
      case event.currentTarget.classList.contains("nav-seven"):
        return (seven.style.opacity = "0")
      case event.currentTarget.classList.contains("nav-eight"):
        return (eight.style.opacity = "0")
      case event.currentTarget.classList.contains("nav-nine"):
        return (nine.style.opacity = "0")
      case event.currentTarget.classList.contains("nav-ten"):
        return (ten.style.opacity = "0")
      case event.currentTarget.classList.contains("nav-eleven"):
        return (eleven.style.opacity = "0")
      default:
        return null
    }
  }

  return (
    <div className="left-menu">
      <nav className="nav">
        <ul className="nav__list">
          <li
            className="nav__item nav-one"
            onMouseOver={mouseOverHandle}
            onMouseOut={mouseOutHandle}
          >
            <div className="nav__settings">
              <i
                className="nav__icon nav__icon-setting material-icons"
                id="nav-one"
              >
                settings
              </i>
            </div>
            <a className="nav__link one" href="/">
              <i className="nav__icon nav__icon-menu material-icons">home</i>
              <span>Моя страница</span>
            </a>
          </li>
          <li
            className="nav__item nav-two"
            onMouseOver={mouseOverHandle}
            onMouseOut={mouseOutHandle}
          >
            <div className="nav__settings">
              <i
                className="nav__icon nav__icon-setting material-icons"
                id="nav-two"
              >
                settings
              </i>
            </div>
            <a className="nav__link" href="/">
              <i className="nav__icon nav__icon-menu material-icons">
                content_paste
              </i>
              <span>Новости</span>
            </a>
          </li>
          <li
            className="nav__item nav-three"
            onMouseOver={mouseOverHandle}
            onMouseOut={mouseOutHandle}
          >
            <div className="nav__settings">
              <i
                className="nav__icon nav__icon-setting material-icons"
                id="nav-three"
              >
                settings
              </i>
            </div>
            <a className="nav__link" href="/">
              <i className="nav__icon nav__icon-menu material-icons">message</i>
              <span>Сообщения</span>
            </a>
          </li>
          <li
            className="nav__item nav-four"
            onMouseOver={mouseOverHandle}
            onMouseOut={mouseOutHandle}
          >
            <div className="nav__settings">
              <i
                className="nav__icon nav__icon-setting material-icons"
                id="nav-four"
              >
                settings
              </i>
            </div>
            <a className="nav__link" href="/">
              <i className="nav__icon nav__icon-menu material-icons">
                accessible
              </i>
              <span>Друзья</span>
            </a>
          </li>
          <li
            className="nav__item nav-five"
            onMouseOver={mouseOverHandle}
            onMouseOut={mouseOutHandle}
          >
            <div className="nav__settings">
              <i
                className="nav__icon nav__icon-setting material-icons"
                id="nav-five"
              >
                settings
              </i>
            </div>
            <a className="nav__link" href="/">
              <i className="nav__icon nav__icon-menu material-icons">
                supervisor_account
              </i>
              <span>Сообщества</span>
            </a>
          </li>
          <li
            className="nav__item nav-six"
            onMouseOver={mouseOverHandle}
            onMouseOut={mouseOutHandle}
          >
            <div className="nav__settings">
              <i
                className="nav__icon nav__icon-setting material-icons"
                id="nav-six"
              >
                settings
              </i>
            </div>
            <a className="nav__link" href="/">
              <i className="nav__icon nav__icon-menu material-icons">
                photo_camera
              </i>
              <span>Фотографии</span>
            </a>
          </li>
          <li
            className="nav__item nav-seven"
            onMouseOver={mouseOverHandle}
            onMouseOut={mouseOutHandle}
          >
            <div className="nav__settings">
              <i
                className="nav__icon nav__icon-setting material-icons"
                id="nav-seven"
              >
                settings
              </i>
            </div>
            <a className="nav__link" href="/">
              <i className="nav__icon nav__icon-menu material-icons">
                music_note
              </i>
              <span>Музыка</span>
            </a>
          </li>
          <li
            className="nav__item nav-eight"
            onMouseOver={mouseOverHandle}
            onMouseOut={mouseOutHandle}
          >
            <div className="nav__settings">
              <i
                className="nav__icon nav__icon-setting material-icons"
                id="nav-eight"
              >
                settings
              </i>
            </div>
            <a className="nav__link" href="/">
              <i className="nav__icon nav__icon-menu material-icons">
                local_movies
              </i>
              <span>Видео</span>
            </a>
          </li>
          <li
            className="nav__item nav-nine"
            onMouseOver={mouseOverHandle}
            onMouseOut={mouseOutHandle}
          >
            <div className="nav__settings">
              <i
                className="nav__icon nav__icon-setting material-icons"
                id="nav-nine"
              >
                settings
              </i>
            </div>
            <a className="nav__link" href="/">
              <i className="nav__icon nav__icon-menu material-icons">games</i>
              <span>Игры</span>
            </a>
          </li>
          <div className="nav__hr" />
          <li
            className="nav__item nav-ten"
            onMouseOver={mouseOverHandle}
            onMouseOut={mouseOutHandle}
          >
            <div className="nav__settings">
              <i
                className="nav__icon nav__icon-setting material-icons"
                id="nav-ten"
              >
                settings
              </i>
            </div>
            <a className="nav__link" href="/">
              <i className="nav__icon nav__icon-menu material-icons">grade</i>
              <span>Закладки</span>
            </a>
          </li>
          <li
            className="nav__item nav-eleven"
            onMouseOver={mouseOverHandle}
            onMouseOut={mouseOutHandle}
          >
            <div className="nav__settings">
              <i
                className="nav__icon nav__icon-setting material-icons"
                id="nav-eleven"
              >
                settings
              </i>
            </div>
            <a className="nav__link" href="/">
              <i className="nav__icon nav__icon-menu material-icons">class</i>
              <span>Документы</span>
            </a>
          </li>
          <div className="nav__hr" />
        </ul>
      </nav>
      <div className="footer">
        <a className="footer__link" href="/">
          Блог
        </a>
        <a className="footer__link" href="/">
          Разработчикам
        </a>
        <a className="footer__link" href="/">
          Реклама
        </a>
        <nav className="footer__nav">
          <a className="footer__nav-link" href="/">
            Еще
            <i className="footer__icon material-icons">expand_more</i>
          </a>
        </nav>
      </div>
    </div>
  )
}

export default NavMenu
