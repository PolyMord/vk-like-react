import React from "react"
import Navbar from "./components/Navbar"
import NavMenu from "./components/NavMenu"
import Owner from "./components/Owner"
import Gifts from "./components/Gifts"
import Friends from "./components/Friends"
import Subscribes from "./components/Subscribes"
import Audios from "./components/Audios"
import Info from "./components/Info"
import Wall from "./components/Wall"
import Photos from "./components/Photos"
import SubmitPost from "./components/SubmitPost"

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <main className="main">
        <div className='main__wrapper container'>
          <NavMenu />
          <section className="narrow-content">
            <Owner />
            <Gifts />
            <Friends />
            <Subscribes />
            <Audios />
          </section>
          <section className="wide-content">
            <Info />
            <Photos />
            <SubmitPost />
            <Wall />
          </section>
        </div>
      </main>
    </div>
  )
}

export default App
