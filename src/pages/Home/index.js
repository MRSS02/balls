import "./styles.css"
import { useState } from "react"
import { Link } from "react-router-dom"

export default function Home() {

  const [quantity, setQuantity] = useState(["a"])
  function getLink() {
    let link = "";
    quantity.map(() => {
      link += "/balls"
    })
    return link;
  }
  function getQuantity() {
    let value = 0;
    quantity.map(() => {
      value += 1
    })
    return value;
  }
  function moreBalls() {
    setQuantity([...quantity.slice(), "a"])
  }
  function randomBall() {
    let ballId = Math.floor(Math.random() * 10);
    let src = "/ball"
    src += ballId
    src += ".jpg"
    return src
  }

  return(
    <div>
     <p className="helloWorld">{getQuantity()} BALLS</p>
     <Link to={getLink()} onClick={moreBalls}>More balls!</Link>
     <div>
       {quantity.map(() => {
          return <img src={randomBall()} className="balls" />
       })}
     </div>

    </div>
  )
}
