import React from "react"
import Header from "./Components/Header"
import Content from "./Components/Content"
import "./css/main.css"

class App extends React.Component{
    render(){
        return(
            <div>
            <Header />
            <Content />
            </div>
        )
    }
}

export default App