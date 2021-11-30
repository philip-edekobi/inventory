import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

export default function NavBar(){
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/admin")
    }

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                    Inventory
                </Typography>
                <Button color="inherit" onClick={() => navigate("/")} >Home</Button>
                <Button color="inherit"onClick={handleClick}>Login(Admin)</Button>
            </Toolbar>
        </AppBar>
    );
}