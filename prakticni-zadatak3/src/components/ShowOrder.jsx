import { Typography, Divider, Button} from "@mui/material";
import ShowData from "./ShowData";
import { generateRandomNumber } from "../utils";

const ShowOrder = ({
  email,
  firstName,
  lastName,
  country,
  address,
  paymentMethod,
  acceptTerms,
  setSubmit
}) => {
    return(
        <>
            <Typography color="#0b5394" fontWeight="800" fontSize="24px" marginBottom="2rem">You have successfully placed your order</Typography>
            <Typography color="#0b5394" fontWeight="800" fontSize="24px" marginBottom="2rem">Order number {generateRandomNumber()}</Typography>
            <Divider/>
            <ShowData dataName="Email" dataValue={email}/>
            <ShowData dataName="First name" dataValue={firstName}/>
            <ShowData dataName="Last name" dataValue={lastName}/>
            <ShowData dataName="Country" dataValue={country}/>
            <ShowData dataName="Address" dataValue={address}/>
            <ShowData dataName="Payment method" dataValue={paymentMethod}/>
            <ShowData dataName="Accepted Trems" dataValue={acceptTerms ? "Yes" : "No"}/>
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
                onClick={() => setSubmit((prev) => !prev)}
              >
                Continue shopping
              </Button>
        </>
    );
}

export default ShowOrder;