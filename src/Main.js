import { Component } from "react"
import HornedBeast from "./HornedBeast";
import './main.css'

class Main extends Component {
  render() {
    return <main className="main">
      <HornedBeast title={"title1"} imgUrl={"logo512.png"} description={"This is the description2"}/>
      <HornedBeast title={"title2"} imgUrl={"logo192.png"} description={"This is the description2"}/>
    </main>
  }
}

export default Main;