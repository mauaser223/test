import React from "react";
import Univ from "./Univ";
import Dropdown from "./Dropdown";

class Content extends React.Component{
    render(){
        return(
            <div>
            <div className = {"picture1"} >  
            <Univ txt = "Гоголя"/> 
            <Dropdown />
            </div>
            <div className = {"picture2"} >  
            <Univ txt = "Университетская"/>      
            </div>
            <div className = {"picture3"} >  
            <Univ txt = "Голландия"/>     
            </div>
            </div>
        )
    }
}

export default Content