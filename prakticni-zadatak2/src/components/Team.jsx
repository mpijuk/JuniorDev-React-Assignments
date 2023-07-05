import styles from "../styles/Team.module.css"

const Team = ({logo_url, name}) => {
    return (
        <div className={styles.team}>
            <img src={logo_url} width="180px" height="180px"></img>
            <h1 className={styles.name}>{name}</h1>
        </div>
    )
}

export default Team;