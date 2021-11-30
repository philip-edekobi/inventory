import { Typography, Box } from "@mui/material";
import PurchaseForm from "../user/PurchaseForm"

export default function HomePage(){
    return (
        <center><Box
            sx={{
                paddingLeft: "10%",
                paddingRight: "10%",
                paddingTop: 3,
                marginTop: 5
            }}
        >
            <Typography variant="h5" gutterBottom component="main">
                <span class="form-head">Purchase Form</span>
            </Typography>

            <br />

            <PurchaseForm />
        </Box></center>
    );
}