import { useState } from "react"

import { TextField, Button, Typography, Box } from "@mui/material";
import { useNavigate } from 'react-router-dom';

export default function HomePage(){

    return (
        <Box
            sx={{
                paddingLeft: "10%",
                paddingRight: "10%",
                paddingTop: 3,
            }}
        >
            <center><AdminLoginForm /></center>
        </Box>
    );
}

function AdminLoginForm(){
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleNameChange = e => setUsername(e.target.value);

    const handlePasswordChange = e => setPassword(e.target.value);


    const logIn = (e) => {
        let un = username, p = password;
        setPassword(""); setUsername("");
        navigate(`/admin/${un}/${p}`);
        e.preventDefault();
    }

    return (
        <form>
            <label htmlFor="username">
                <Typography variant="body1" value={username} >Username: </Typography>
            </label>

            <TextField name="username" id="username"
            onChange={handleNameChange}
             variant="standard" value={username}/>
             
            <br />
            <br />
            
            <label htmlFor="password">
                <Typography variant="body1" >Password: </Typography>
            </label>

            <TextField name="password" id="password"
            onChange={handlePasswordChange}
             variant="standard" value={password} />


            <br />
            <br />

            <Button variant="contained" onClick={logIn}>Log In</Button>
        </form>
    );
}