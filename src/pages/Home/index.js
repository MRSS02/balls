import "./styles.css"
import { useState } from "react"
import { Link } from "react-router-dom"

export default function Home() {

  const [quantity, setQuantity] = useState([randomBall()])
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
    if (value < 2) value += " BALL"
     else value += " BALLS"
    return value
  }
  function moreBalls() {
    setQuantity([...quantity.slice(), randomBall()])
  }
  function randomBall() {
    let ballId = Math.floor(Math.random() * 10);
    let src = "/ball"
    src += ballId
    src += ".jpg"
    return <img src={src} className="balls" />
  }

  function noBalls() {
    setQuantity([])
  }

  return(
    <div>
     <p className="helloWorld">{getQuantity()}</p>
     <Link className="button add" to={getLink()} onClick={moreBalls}>More balls!</Link>
     <Link className="button delete" to="/" onClick={noBalls}>Drop balls...</Link>
     <div className="ballsContainer">
       {quantity.map((item) => {
          return item
       })}
     </div>

    </div>
  )
}
