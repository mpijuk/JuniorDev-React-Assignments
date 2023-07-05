import axios from "axios";
import styles from "../styles/Filter.module.css"

const Filter = ({ refreshView }) => {

    const handleChange = async(event) => {
        const filter = event.target.value;
        const result = await axios.get(`http://localhost:3001/clothes?clothPiece.type=${filter}`);
        refreshView(result.data);
    }

    return(
        <div className={styles.divContainer}>
            <p className={styles.pText}>Filter: </p>
            <label><input type="radio" id="pants" value="pants" name="filter" onChange={handleChange} />Pants</label>
            <label><input type="radio" id="sweater" value="sweater" name="filter" onChange={handleChange} />Sweaters</label>
            <label><input type="radio" id="T-shirt" value="T-shirt" name="filter" onChange={handleChange} />T-shirts</label>
        </div>
    );
}

export default Filter;