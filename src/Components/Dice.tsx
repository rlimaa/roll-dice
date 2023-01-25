import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./Dice.css"
import DiceProps from "../Interfaces/DiceProps";

class Dice extends React.Component<DiceProps, {}> 
{

    render() {
        return (
            <div className={this.props.rolling ? "Dice-rolling" : "Dice"}>
                <FontAwesomeIcon className="Dice-icon" icon={this.props.icon} />
            </div>
        );
    }

}

export default Dice;