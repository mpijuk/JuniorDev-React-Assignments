import ColorInput from "./ColorInput";
import { useState, useEffect } from "react";
import axios from "axios";
import { processBody } from "../utils";
import styles from "../styles/Form.module.css"

const initialState = {
    type: "",
    size: "",
    color: {
        r: "0",
        g: "0",
        b: "0",
        a: "100",
    },
    picture: "",
  };

const Form = ({refreshView}) => {

    const [input, setInput] = useState(initialState);
    const [types, setTypes] = useState([]);
    const [sizes, setSizes] = useState([]);

    useEffect(() => {
        Promise.all([
          axios.get("http://localhost:3001/types"),
          axios.get("http://localhost:3001/sizes"),
        ])
          .then(([responseTypes, responseSizes]) => {
            setTypes(responseTypes.data);
            setSizes(responseSizes.data);
          })
          .catch((err) => console.log(err));
      }, []);

    const inputChange = (event) => {
      const { name, value } = event.target;
    
      setInput({ ...input, [name]: value });
    };

    const addNewClothes = async(event) => {
      event.preventDefault();
      const requestBody = processBody(input);
      
      await axios.post("http://localhost:3001/clothes", requestBody);
      const result = await axios.get("http://localhost:3001/clothes");
      refreshView(result.data);
      setInput(initialState);
    };

    return(
      <>
        <form onSubmit={addNewClothes} className={styles.formContainer}>
          <p>Add new clothes</p>
          <div className={styles.inputContainer}>
            <label>Type: </label>
            <select
              name="type"
              value={input.type}
              onChange={inputChange}
              required
            >
                  <option value="">Chose Type</option>
                	{types.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
            </select>
          </div>
          <div className={styles.inputContainer}>
            <label>Size: </label>
            <select
              name="size"
              value={input.size}
              onChange={inputChange}
              required
            >
              <option value="">Chose size</option>
              {sizes.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </div>
          <div className={styles.colorLabel}>
            <label>Color: </label>
            <ColorInput input={input} setInput={setInput}/>
          </div>
          
          <div className={styles.inputContainer}>
            <label>Picture: </label>
            <input
              type="text"
              name="picture"
              value={input.picture}
              onChange={inputChange}
              required
            />
          </div>
          <button className={styles.click} style={{backgroundColor:"#3EB489"}}>Save</button>
        </form>
      </>
    )
}

export default Form 