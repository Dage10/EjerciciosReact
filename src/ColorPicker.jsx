import React, {useState} from 'react';

function ColorPicker(){

    const [color,setColor] = useState("#FFFFFF");

    function handleColorChange(event){
        setColor(event.target.value);
    }

    return ( <div className="color-picker-container">
             <h1 className="color-picker">Color Picker</h1>

             <div className="color-display" style={{backgroundColor: color}}>
                <p>Select Color: {color}</p>
             </div>
             <label className="color-pick">Select Color:</label>
             <input type="color" value={color} onChange={handleColorChange}></input>
    </div>)

}

export default ColorPicker