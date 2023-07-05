import { Box, Typography, Divider} from "@mui/material";
import reactLogo from '../assets/react.svg';
import ComponentWrapper from '../styles/ComponentWrapper';
import FlexBetween from '../styles/FlexBetween';

const AboutMe = ({address, email, github, phone, text}) => {

    return(
        <ComponentWrapper>
            <FlexBetween
              gap="2rem"
              p="1rem 3rem"
              mb="2rem"
            >
                <img 
                  style={{ objectFit: "fill"}}
                  width="150px"
                  height="150px"
                  alt="user"
                  src={reactLogo}
                />
                <Box>
                        <Typography
                          variant="h3"
                          color="#8A2BE2"
                          fontWeight="600"
                        >
                            Stipe Horvat
                        </Typography>
                </Box>
            </FlexBetween>
            <Divider />
            <Box pt="1rem">
                <FlexBetween mb="1rem">
                    <Typography color="#8A2BE2" fontWeight="600">Address:</Typography>
                    <Typography color="grey">
                        {address}
                    </Typography>
                </FlexBetween>
                <FlexBetween mb="1rem">
                    <Typography color="#8A2BE2" fontWeight="600">Email:</Typography>
                    <Typography color="grey">
                        {email}
                    </Typography>
                </FlexBetween>
                <FlexBetween mb="1rem">
                    <Typography color="#8A2BE2" fontWeight="600">Github:</Typography>
                    <Typography color="grey">
                       {github}
                    </Typography>
                </FlexBetween>
                <FlexBetween mb="1rem">
                    <Typography color="#8A2BE2" fontWeight="600">Phone:</Typography>
                    <Typography color="grey">
                        {phone}
                    </Typography>
                </FlexBetween>
            </Box>
            <Divider />
            <Box p="1rem 0">
                <Typography 
                  color="grey" 
                  fontWeight="600"
                  p="0rem 0.5rem"
                >
                    {text}
                </Typography>
            </Box>
        </ComponentWrapper>
    );
}

export default AboutMe;