import React from "react";

const Text = (props) => {
  const style = {
    color: props.color,
    textTransform: 'uppercase',
    }

    return (
        <div className='text'>
          <p style={style}>algum texto qualquer</p>
        </div>
    )
}


export default Text