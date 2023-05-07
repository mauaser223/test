import React from "react"

class Image extends React.Component{
    render(){
        return(
            <img src={this.props.title} className={this.props.className}></img>
        )
    }
}
export default Image