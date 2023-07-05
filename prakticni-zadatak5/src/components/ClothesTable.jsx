import ClothesRow from "./ClothesRow";
import styles from "../styles/ClothesTable.module.css"

const ClothesTable = ({ clothes, refreshView }) => {
    return (
      <>
          <p className={styles.pText}>List of clothes</p>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Type</th>
                <th>Size</th>
                <th>Color</th>
                <th>Picture</th>
                <th>Options</th>
              </tr>
            </thead>
            <tbody>
              {clothes?.map((clothPiece) => (
                <ClothesRow key={clothPiece.id} clothPiece={clothPiece} refanje={refreshView}/>
              ))}
            </tbody>
          </table>
        </>
      );
}

export default ClothesTable 