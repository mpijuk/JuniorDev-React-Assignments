import AboutMe from "../components/aboutMe";
import Skills from "../components/skills";
import Projects from "../components/projects";
import { Box } from "@mui/material";
import data from "../data.json";

const Homepage = () => {
    return (
        <Box
          width="100%"
          display="flex"
          flexDirection="column"
          alignItems="center"
          padding="2rem 0rem"
          sx = {{backgroundColor: "#000000"}}
        >
            <AboutMe {...data.about}/>
            <Box m="0.5rem 0"/>
            <Skills {...data.skills}/>
            <Box m="0.5rem 0"/>
            <Projects />
        </Box>
    );
}

export default Homepage;