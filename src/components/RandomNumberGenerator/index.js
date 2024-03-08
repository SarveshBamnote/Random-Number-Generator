import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {randomNum: 0}

  onGenerateRanNum = () => {
    const ranNum = Math.ceil(Math.random() * 100)
    this.setState({randomNum: ranNum})
  }

  render() {
    const {randomNum} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Random Number</h1>
          <p className="desc">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            className="button"
            type="button"
            onClick={this.onGenerateRanNum}
          >
            Generate
          </button>
          <p className="randomNum">{randomNum}</p>
        </div>
      </div>
    )
  }
}
export default RandomNumberGenerator
