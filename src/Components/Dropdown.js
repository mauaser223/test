import React from "react";

class Dropdown extends React.Component{
    render(){
        return(
            <div className="dropdown">
                <span>Mouse over me</span>
                <p className="dropdown-content">INFORMATION</p>
            </div>
        )
    }
}

export default Dropdown