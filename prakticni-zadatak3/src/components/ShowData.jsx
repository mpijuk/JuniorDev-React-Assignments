import FlexBetween from "../styles/FlexBetween";
import { Typography } from "@mui/material";

const ShowData = ({dataName, dataValue}) => {
    return(
        <FlexBetween>
            <Typography color="#0b5394" fontWeight="600" fontSize="20px">{dataName}:</Typography>
            <Typography color="grey" fontWeight="600" fontSize="24px">
                {dataValue}
            </Typography>
        </FlexBetween>
    );
}

export default ShowData;