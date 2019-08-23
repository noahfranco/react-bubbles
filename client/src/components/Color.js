import React from "react"; 
import axiosWithAuth from "../utils/axiosWithAuth"
import ColorCard from "./ColorCard";

class Color extends React.Component {
    state= {
        color: []
    }

    componentDidMount() {
        this.colorData(); 
    }

    colorData = () => {
        axiosWithAuth()
        .get("http://localhost:5000/api/login/api/colors")
        .then(res => {
            console.log("testing .get aixos call",res)
            this.setState({color: res.data})
        })
        .catch(error => {
            console.log("ERROR", error)
        }, []); 
    }

render() {
    return(
        <>
        <div> Color List </div>
       { this.state.color.map(colors => {
           return <ColorCard key={colors} colors={colors} /> 
       }) }
       </> 
    )
}

}; 

export default Color; 