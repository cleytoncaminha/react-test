import React from "react";

const Button = (props) => {    

    function showLabel(){
        alert(`a label do botão é = ${props.label}`)
    }

      return (<button onClick={showLabel}>Ver Label</button>)
 }
  
  
  export default Button