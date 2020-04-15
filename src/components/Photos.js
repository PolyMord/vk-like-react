import React from "react"

const Photos = () => {
  const mouseOverHandle = (event) => {
    const one = document.getElementById("close-one")
    const two = document.getElementById("close-two")
    const three = document.getElementById("close-three")

    switch (true) {
      case event.currentTarget.classList.contains("close-one"):
        return (one.style.opacity = ".9")
      case event.currentTarget.classList.contains("close-two"):
        return (two.style.opacity = ".9")
      case event.currentTarget.classList.contains("close-three"):
        return (three.style.opacity = ".9")
      default:
        return null
    }
  }
  const mouseOutHandle = (event) => {
    const one = document.getElementById("close-one")
    const two = document.getElementById("close-two")
    const three = document.getElementById("close-three")

    switch (true) {
      case event.currentTarget.classList.contains("close-one"):
        return (one.style.opacity = "0")
      case event.currentTarget.classList.contains("close-two"):
        return (two.style.opacity = "0")
      case event.currentTarget.classList.contains("close-three"):
        return (three.style.opacity = "0")
      default:
        return null
    }
  }

  return (
    <div className="photos">
      <div className="photos__head">
        <a className="photos__head-link" href="/">
          Мой фотографии<span className="photos__head-span">4</span>
        </a>
        <a className="photos__show-map" href="/">
          показать на карте
        </a>
      </div>
      <div className="photos__images">
        <a
          className="photos__item close-one"
          onMouseOver={mouseOverHandle}
          onMouseOut={mouseOutHandle}
          href="/"
        >
          <img className="photos__img photos__img-one" alt="" />
          <div className="photos__close" id="close-one">
            <i className="photos__close-icon material-icons">
              close
            </i>
          </div>
        </a>
        <a
          className="photos__item close-two"
          onMouseOver={mouseOverHandle}
          onMouseOut={mouseOutHandle}
          href="/"
        >
          <img className="photos__img photos__img-two" alt="" />
          <div className="photos__close" id="close-two">
            <i className="photos__close-icon material-icons">
              close
            </i>
          </div>
        </a>
        <a
          className="photos__item close-three"
          onMouseOver={mouseOverHandle}
          onMouseOut={mouseOutHandle}
          href="/"
        >
          <img className="photos__img photos__img-three" alt="" />
          <div className="photos__close" id="close-three">
            <i className="photos__close-icon material-icons">
              close
            </i>
          </div>
        </a>
      </div>
    </div>
  )
}

export default Photos
