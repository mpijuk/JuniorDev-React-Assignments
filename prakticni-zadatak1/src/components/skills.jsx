import { Box, Typography, Divider} from "@mui/material";
import ComponentWrapper from '../styles/ComponentWrapper';
import FlexBetween from '../styles/FlexBetween';

const Skills = ({skill1, skill2, skill3, programmingLanguages, storageTechnologies, frameworksLibraries}) => {

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
                    Skills
                </Typography>
            </Box>
            <Divider />
            <Box color="grey">
                <ul>
                    <li>{skill1}</li>
                    <li>{skill2}</li>
                    <li>{skill3}</li>
                </ul>
            </Box>
            <Divider />
            <Box p="1rem 0">
                <FlexBetween mb="1rem">
                    <Typography color="#8A2BE2" fontWeight="600">Programming languages:</Typography>
                    <Typography color="grey">
                        {programmingLanguages}
                    </Typography>
                </FlexBetween>
                <FlexBetween mb="1rem">
                    <Typography color="#8A2BE2" fontWeight="600">Storage technologies:</Typography>
                    <Typography color="grey">
                        {storageTechnologies}
                    </Typography>
                </FlexBetween>
                <FlexBetween>
                    <Typography color="#8A2BE2" fontWeight="600">Frameworks/Libraries:</Typography>
                    <Typography color="grey">
                        {frameworksLibraries}
                    </Typography>
                </FlexBetween>
            </Box>
        </ComponentWrapper>
    );
}

export default Skills;