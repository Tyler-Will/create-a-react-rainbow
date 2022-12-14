import React from 'react'
function ColorBlock(props){
    return (
        <div className="colorBlock"
        style={{'backgroundColor': props.colorval}}>
            <p>{props.colorval}</p>
        </div>
    )
}

// Do not forget to export your component once you have built it!
export default ColorBlock

//1. ColorBlock must be child component of another component
//2. Colorblock passed in properties must have a key named color.