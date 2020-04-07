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

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <main className="main">
        <NavMenu />
        <Owner />
        <Gifts />
        <Friends />
        <Subscribes />
        <Audios />
        <Info />
        <Wall />
      </main>
    </div>
  )
}

export default App
