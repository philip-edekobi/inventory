import { Button, TextField, Typography } from '@mui/material'

export default function PurchaseForm(){
    return (
        <form>
            <label htmlFor="name">
                <Typography variant="body1" >Name: </Typography>
            </label>

            <TextField name="name" id="name"
             variant="standard" value=""/>
             
            <br />
            <br />
            
            <label htmlFor="email">
                <Typography variant="body1" >Email: </Typography>
            </label>

            <TextField name="email" id="email"
             variant="standard" value=""/>


            <br />
            <br />

            <Button variant="contained">View Products</Button>
        </form>
    );
}