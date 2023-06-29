// Write your code here
import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {
    coinValue: 0,
    total: 0,
    heads: 0,
    tails: 0,
  }

  tossTheCoin = () => {
    const tossResult = Math.floor(Math.random() * 2)
    this.setState(prevState => ({
      total: prevState.total + 1,
      coinValue: tossResult,
    }))

    if (tossResult > 0) {
      this.setState(prevState => ({
        tails: prevState.tails + 1,
      }))
    } else {
      this.setState(prevState => ({
        heads: prevState.heads + 1,
      }))
    }
  }

  render() {
    const {coinValue, total, heads, tails} = this.state
    const headOrTailsUrl =
      coinValue > 0
        ? 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/heads-img.png'

    return (
      <div className="app-container">
        <div className="game-container">
          <h1 className="main-heading">Coin Toss Game</h1>
          <p className="head-or-tails">Heads (or) Tails</p>
          <img
            src={headOrTailsUrl}
            alt="toss result"
            className="heads-or-tails-img"
          />
          <button type="button" className="toss-btn" onClick={this.tossTheCoin}>
            Toss Coin
          </button>
          <div className="count-container">
            <p className="total">Total: {total}</p>
            <p className="heads">Heads: {heads}</p>
            <p className="tails">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
