import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button, TextField, Typography } from '@mui/material'

export default function PurchaseForm(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const onNameChange = e => setName(e.target.value);
    const onEmailChange = e => setEmail(e.target.value);
    const navigate = useNavigate();

    const submit = (e) => {
        navigate(`/${name}/${email}`);
        setName(""); setEmail("");
        e.preventDefault();
    }

    return (
        <form>
            <label htmlFor="name">
                <Typography variant="body1" >Name: </Typography>
            </label>

            <TextField name="name" id="name"
            onChange={onNameChange}
             variant="standard" value={name}/>
             
            <br />
            <br />
            
            <label htmlFor="email">
                <Typography variant="body1" >Email: </Typography>
            </label>

            <TextField name="email" id="email"
            onChange={onEmailChange}
             variant="standard" value={email}/>


            <br />
            <br />

            <Button variant="contained" onClick={submit}>View Products</Button>
        </form>
    );
}