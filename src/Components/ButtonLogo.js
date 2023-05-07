import React from "react"
import Image from "./Image"
import logo from "../img/logoclear.png"

class ButtonLogo extends React.Component{
    render(){
        return(
            <button className="button">
                {this.props.title} 
                <Image title = {logo}/>
            </button>
        )
    }
}

export default ButtonLogo