import React, { Component } from "react"
import Dice from "./Dice";
import "./RollDice.css"
import { faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix } from '@fortawesome/free-solid-svg-icons'

class RollDice extends Component {
    diceArr = [faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix ];
    state = {
        diceOne: 0,
        diceTwo: 0,
        rolling: false
    }

    roll() {
        this.setState({
            diceOne: Math.floor((Math.random() * 6)),
            diceTwo: Math.floor((Math.random() * 6)),
            rolling: true
        })

        setTimeout(() => this.setState({rolling: false}), 500)
    }

    render() {
        return (
            <div className="RollDice">
                <div className="RollDice-dice-container">
                    <Dice icon={this.diceArr[this.state.diceOne]} rolling={this.state.rolling} />
                    <Dice icon={this.diceArr[this.state.diceTwo]} rolling={this.state.rolling}/>
                </div>
                <button 
                    className={this.state.rolling ? "RollDice-rolling-button" : "RollDice-roll-button"} 
                    onClick={() => this.roll()}
                    disabled={this.state.rolling}
                    >
                        { this.state.rolling 
                            ? "Rolling ..."
                            : "Roll"
                        }
                </button>
            </div>
        );
    }
}

export default RollDice;