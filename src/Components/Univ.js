import React from "react";

class Univ extends React.Component{
    render(){
        return(
            <h1 className="blend">
                {this.props.txt}
            </h1> 
        )
    }
}

export default Univ