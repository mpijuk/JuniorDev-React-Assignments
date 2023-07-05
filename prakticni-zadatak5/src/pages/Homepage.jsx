import { useState, useEffect } from "react"
import ClothesTable from "../components/ClothesTable";
import axios from "axios";
import Form from "../components/Form";
import Filter from "../components/Filter";
import styles from "../styles/Homepage.module.css";

const Homepage = () => {

    const [clothes, setClothes] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3001/clothes").then((res) => {
            setClothes(res.data);
        });
    }, [])

    return(
        <>
            <div className={styles.header}>
                <p>My wardrobe</p>
            </div>
            <div className={styles.container}>
                <Form refreshView={setClothes}/>
                <div className={styles.right}>
                    <Filter refreshView={setClothes}/>
                    <ClothesTable clothes={clothes} refreshView={setClothes}/>
                </div> 
            </div>
        </>
    )
}

export default Homepage