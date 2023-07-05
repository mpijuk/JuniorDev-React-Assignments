import {
    Box,
    Button,
    TextField,
    Radio,
    RadioGroup,
    FormControlLabel,
    Checkbox,
    FormHelperText,
    FormControl,
    Typography,
} from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";

const orderSchema = yup.object().shape({
    email: yup.string().email("invalid email").required("email is required"),
    firstName: yup.string().min(2, 'name too short').required("first name is required"),
    lastName: yup.string().required("last name is required"),
    country: yup.string().required("country is required"),
    address: yup.string().min(6, 'address too short').required("address is required"),
    paymentMethod: yup.string().required("required"),
    acceptTerms: yup.boolean().oneOf([true], "Please accept our terms.").required("Please accept our terms."),
});

const initialValuesOrder = {
    email: "",
    firstName: "",
    lastName: "",
    country: "",
    address: "",
    paymentMethod: "debit card",
    acceptTerms: false,
};


const OrderForm = ({setForm, setSubmit}) => {

    const handleFormSubmit = (values, onSubmitProps) => {
        console.log(values);
        setForm({...values});
        setSubmit((prev) => !prev);
        onSubmitProps.resetForm();
    };

    return (
        <Formik
          onSubmit={handleFormSubmit}
          initialValues={initialValuesOrder}
          validationSchema={orderSchema}  
        >
            {({
              values,
              errors,
              touched,
              handleBlur,
              handleChange,
              handleSubmit,
            }) => (
                <form onSubmit={handleSubmit}>
                    <Box
                      display="grid"
                      gap = "25px"
                      gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                    >
                        <Typography color="#0b5394" fontWeight="800" fontSize="30px" gridColumn="span 4">Payment</Typography>
                        <Typography color="#0b5394" fontWeight="600" fontSize="18px" gridColumn="span 4">Contact</Typography>
                        <TextField
                          label="Email"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.email}
                          name="email"
                          error={Boolean(touched.email) && Boolean(errors.email)}
                          helperText={touched.email && errors.email}
                          sx={{ gridColumn: "span 4" }}
                        />
                        <Typography color="#0b5394" fontWeight="600" fontSize="18px" gridColumn="span 4">Personal data</Typography>
                        <TextField
                          label="First Name"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.firstName}
                          name="firstName"
                          error={Boolean(touched.firstName) && Boolean(errors.firstName)}                                
                          helperText={touched.firstName && errors.firstName}
                          sx={{ gridColumn: "span 4" }}
                        />
                        <TextField
                          label="Last Name"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.lastName}
                          name="lastName"
                          error={Boolean(touched.lastName) && Boolean(errors.lastName)}                                
                          helperText={touched.lastName && errors.lastName}
                          sx={{ gridColumn: "span 4" }}
                        />
                        <TextField
                          label="Country"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.country}
                          name="country"
                          error={Boolean(touched.country) && Boolean(errors.country)}                                
                          helperText={touched.country && errors.country}
                          sx={{ gridColumn: "span 4" }}
                        />
                        <TextField
                          label="Address"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.address}
                          name="address"
                          error={Boolean(touched.address) && Boolean(errors.address)}                                
                          helperText={touched.address && errors.address}
                          sx={{ gridColumn: "span 4" }}
                        />
                        <Typography color="#0b5394" fontWeight="600" fontSize="18px" gridColumn="span 4">Payment method</Typography>
                        <RadioGroup
                          onChange={handleChange}
                          value={values.paymentMethod}
                          name = "paymentMethod"
                          sx={{ 
                            gridColumn: "span 4",
                          }}
                        >
                            <FormControlLabel value="debit card" label="Debit Card" control={<Radio />}></FormControlLabel>
                            <FormControlLabel value="cash on delivery" label="Cash on Delivery" control={<Radio />}></FormControlLabel>
                        </RadioGroup>
                        <Typography color="#0b5394" fontWeight="600" fontSize="18px" gridColumn="span 4">Terms agreement</Typography>
                        <FormControl 
                          error={!!errors.acceptTerms} 
                          sx={{ 
                           gridColumn: "span 4",
                          }}
                          >
                            <FormControlLabel 
                              label="I accept the terms" 
                              onChange={handleChange}
                              value={values.acceptTerms}
                              name="acceptTerms"
                              control={<Checkbox />} 
                            />
                            <FormHelperText>
                                {errors.acceptTerms}
                            </FormHelperText>
                        </FormControl>
                    </Box>
                    <Box>
                        <Button
                          fullWidth
                          type="submit"
                          sx={{
                            m: "2rem 0",
                            p: "1rem",
                            backgroundColor: "#0b5394",
                            color: "white",
                            "&:hover": { color: "#0b5394" },
                          }}
                        >
                          Order
                        </Button>
                    </Box>
                </form>
            )}
        </Formik>
    );
}

export default OrderForm;