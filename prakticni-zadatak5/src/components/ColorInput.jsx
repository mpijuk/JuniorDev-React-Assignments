import React from 'react'
import { SketchPicker } from 'react-color'
import { useState } from 'react'
import styles from "../styles/ColorInput.module.css"

const ColorInput = ({input, setInput}) => {
  
  const [color, setColor] = useState(input.color);
  const [displayColorPicker, setDisplayColorPicker] = useState(false);

  const handleClick = () => {
    setDisplayColorPicker(!displayColorPicker);
  };

  const handleClose = () => {
    setDisplayColorPicker(false)
  };

  const handleChange = (color) => {
    setColor(color.rgb)
    setInput({...input, color: color.rgb});
  };

  return (
      <div>
        <div className={styles.swatch} onClick={handleClick}>
          <div className={styles.color} style={{backgroundColor:`rgba(${color.r }, ${color.g }, ${color.b }, ${color.a })`}} />
        </div>
        { displayColorPicker ? 
          <div className={ styles.popover}>
            <div className={styles.cover} onClick={handleClose}/>
            <SketchPicker color={color} onChange={handleChange } />
          </div> 
        : null }
      </div>
  )
}

export default ColorInput