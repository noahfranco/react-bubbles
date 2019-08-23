import React from "react"; 

const ColorCard = (props) => {
console.log(props)
return(
    <>
    <p> { props.colors.color } </p>
    </>
)
}

export default ColorCard; 