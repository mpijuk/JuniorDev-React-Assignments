import axios from "axios";
import { useState, useEffect } from "react";
import ColorInput from "./ColorInput";
import { processBody } from "../utils";
import styles from "../styles/ClothesRow.module.css"

const ClothesRow = ({
    clothPiece: {
        id,
        clothPiece: {type, size, color, picture}
    },
    refanje
}) => {

  const [input, setInput] = useState({
    type: type,
    size: size,
    color: {
        r: color.r,
        g: color.g,
        b: color.b,
        a: color.a,
    },
    picture: picture,
  });
  const [types, setTypes] = useState([]);
  const [sizes, setSizes] = useState([]);
  const[isEditing, setIsEditing] = useState(false);

  const inputChange = (event) => {
    const { name, value } = event.target;
  
    setInput({ ...input, [name]: value });
  };

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
  }, [isEditing==true]);


  const editClothes = async(event) => {
    event.preventDefault();
    const requestBody = processBody(input);
    
    await axios.put(`http://localhost:3001/clothes/${id}`, requestBody);
    const result = await axios.get("http://localhost:3001/clothes");
    setIsEditing(false);
    refanje(result.data);
  };

  const deleteClothes = async() => {
    
    const accept = confirm("Are you sure you want to delete this item?");
    if(accept) {
      await axios.delete(`http://localhost:3001/clothes/${id}`);
      const result = await axios.get("http://localhost:3001/clothes");
      
      refanje(result.data);
    }
    
  };


    return (
      <>
        { isEditing ? 
          <tr>
            <td>
              {id}
            </td>
            <td>
              <div>
                <select
                  name="type"
                  value={input.type}
                  onChange={inputChange}
                  required
                >
                      {types.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                </select>
              </div>
            </td>
            <td>
              <div>
                <select
                  name="size"
                  value={input.size}
                  onChange={inputChange}
                  required
                >
                      {sizes.map((size) => (
                        <option key={size} value={size}>
                          {size}
                        </option>
                      ))}
                </select>
              </div>
            </td>
            <td>
              <ColorInput input={input} setInput={setInput}/>
            </td>
            <td>
              <input
                type="text"
                name="picture"
                value={input.picture}
                onChange={inputChange}
                required
              />
            </td>
            <td>
              <button onClick={editClothes} className={styles.click} style={{backgroundColor:"#3EB489"}}>Save</button>
              <button onClick={deleteClothes} className={styles.click}>Delete</button>
            </td>
          </tr>

        
        : <tr>
            <td>{id}</td>
            <td>{type}</td>
            <td>{size}</td>
            <td style={{backgroundColor: `rgba(${ color.r }, ${ color.g }, ${ color.b }, ${ color.a })`}}></td>
            <td><img src={`${picture}`} width="80px" height="80px" style={{paddingTop:"13px"}}></img></td>
            <td>
              <button onClick={() => setIsEditing(true)} className={styles.click}>Edit</button>
              <button onClick={deleteClothes} className={styles.click}>Delete</button>
            </td>
          </tr>}
      </>
      );
}

export default ClothesRow