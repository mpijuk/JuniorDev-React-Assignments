import { useState } from "react";
import { Box, useMediaQuery } from "@mui/material";
import OrderForm from "../components/OrderForm";
import { constructFormValues } from "../utils";
import ShowOrder from "../components/ShowOrder";

const Orderpage = () => {
    const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
    const [formValues, setFormValues] = useState(constructFormValues());
    const [isSubmit, setIsSubmit] = useState(false);

    return(
        <Box
          width={isNonMobileScreens ? "50%" : "70%"}
          p="2rem"
          m="4rem auto"
          borderRadius="1.5rem"
          backgroundColor="#DBECEB"
        >   
            {isSubmit ? <ShowOrder {...formValues} setSubmit={setIsSubmit}/> 
            : <OrderForm setForm={setFormValues} setSubmit={setIsSubmit}/>
            }
        </Box>
    );
}

export default Orderpage;