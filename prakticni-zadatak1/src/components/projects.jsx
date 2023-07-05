import { Box, Typography, Divider} from "@mui/material";
import ComponentWrapper from '../styles/ComponentWrapper';
import FlexBetween from '../styles/FlexBetween';
import flutter from '../assets/flutterlogo.png';
import python from '../assets/pythonlogo.png';
import cplusplus from '../assets/c++logo.png';
import firebase from '../assets/firebaselogo.png';


const Projects = () => {

    return(
        <ComponentWrapper>
            <Box
              display="flex"
              justifyContent="center"
            >
                <Typography
                  color="#8A2BE2"
                  fontWeight="600"
                  variant="h4"
                  pb="1rem"
                >
                    Projects
                </Typography>
            </Box>
            <Divider />
            <Box>
                <FlexBetween p="3rem 7rem">                    
                      <img 
                        style={{ objectFit: "fill", borderRadius: "30%"}}
                        width="150px"
                        height="150px"
                        alt="flutter"
                        src={flutter}
                    />
                    <img 
                      style={{ objectFit: "fill", borderRadius: "30%"}}
                      width="150px"
                      height="150px"
                      alt="firebase"
                      src={firebase}
                    />
                </FlexBetween>
                <FlexBetween p="0rem 7rem 3rem 7rem">
                    <img 
                      style={{ objectFit: "fill", borderRadius: "30%"}}
                      width="150px"
                      height="150px"
                      alt="python"
                      src={python}
                    />
                    <img 
                      style={{ objectFit: "fill", borderRadius: "30%"}}
                      width="150px"
                      height="150px"
                      alt="cpluplus"
                      src={cplusplus}
                    />
                </FlexBetween>
            </Box>
        </ComponentWrapper>
    );
}

export default Projects;