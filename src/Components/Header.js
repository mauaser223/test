import React from "react"
import ButtonLogo from "./ButtonLogo"
import Button from "./Button"

class Header extends React.Component{
    render(){
        return(
            <header className="header">
                <ButtonLogo />
                <Button title = "HALL BOOKING"/>
            </header>
        )
    }
}

export default Header