import React, { useState } from 'react'
import './Colorboxes.css'

const Colors = [
        "Aqua", "Black", "BlanchedAlmond", "Blue", "Chocolate", "DodgerBlue",
  "Lavender", "LawnGreen", "Peru", "Plum", "SpringGreen", "SteelBlue", "Tan",
  "Teal", "Thistle", "Tomato", "Turquoise", "Violet", "Yellow", "YellowGreen",
]
const Colorboxes = ({colors = Colors, numBoxes = 16}) =>{
    const genBoxes = () =>{
        return Array.from({length: numBoxes},()=>colors[Math.floor(Math.random()*numBoxes)]);
    }
    const [boxes, setBoxes] = useState(genBoxes);
    
    const handleClick =() =>{
        setBoxes(boxes=>{
            let index = Math.floor(Math.random()*numBoxes);
            let boxCopy = [...boxes];
            boxCopy[index] = colors[Math.floor(Math.random()*numBoxes)];
            console.log(boxCopy);
            return boxCopy;
        })
    }
    const boxComponents = boxes.map((color, i) => 
    <div className="Box" key={i} style={{backgroundColor :color}}></div>)
    
    return (
        <>
        <div className='Colorboxes'>
            {boxComponents}
        </div>
        <button onClick={handleClick}>Change</button>
        </>
        
    )
}

export default Colorboxes;