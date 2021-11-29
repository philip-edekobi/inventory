import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Typography, Button } from "@mui/material";

export default function AdminView(){
    const { username, password } = useParams();

    let allow = username === "admin" && password === "12345" ;

    let component = allow ? <AdminInfo /> : <Error />

    return (
        <>
          {component}  
        </>
    );
}

function AdminInfo(){
    return (
        <>
            <p></p>
        </>
    );
}

function Error(){
    const navigate = useNavigate();
    return (
    <div style = {{padding: 40,}}>
      <Typography> You entered an incorrect password or username. </Typography>  
      <Button variant="outlined" color="error" onClick={() => navigate("/admin")} >Go Back</Button>
    </div>
    );
}