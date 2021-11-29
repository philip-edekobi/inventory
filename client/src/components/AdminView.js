import { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Typography, Button, Accordion, AccordionSummary, AccordionDetails, TextField } from "@mui/material";
import  ExpandMoreIcon  from "@mui/icons-material/ExpandMore";
import { nanoid } from "nanoid";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

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
    const [products, setProducts] = useState(null);
    const [logs, setLogs] = useState(null);
    const [name, setName] = useState("");

    async function loadProducts(){
        let response = await axios.get("http://localhost:8081/admin/");
        response = response.data.result;
        return response;
    }
    async function loadLogs(){
        let response = await axios.get("http://localhost:8081/admin/logs");
        response = response.data.result;
        return response;
    }

    useEffect(() => {
        loadProducts().then(res => setProducts(res))
        .catch(err => console.log("Error" , err));
    }, []);

    useEffect(() => {
        loadLogs().then(res => {
            setLogs(res);
        })
        .catch(err => console.log("Error" , err));
    }, []);

    const addProduct = (e) => {
        axios.post("http://localhost:8081/admin", {
            "name": name
        }).then(res => {
            setName("");
            loadProducts().then(result => setProducts(result));
        }).catch(err => console.log(err));
        e.preventDefault();
    }

    function createData(name, email, product){ return {name, email, product}}
    const rows = logs? logs.map(log => createData(log.name, log.email, log.product)) : [];

    return (
        <>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    id={nanoid()}
                >
                    <Typography variant="h6">Products</Typography>
                    <form >
                        <label htmlFor="product"></label>
                        <br />
                        <TextField style={{marginLeft: "40%"}}
                         name="product" id="product" value={name}
                         variant="standard" onChange={(e)=>setName(e.target.value) } />
                    <Button style={{marginLeft: "100%"}} color="success"
                    onClick={addProduct}
                     variant="contained">
                         Add
                    </Button>
                    </form>
                </AccordionSummary>
                <AccordionDetails>
                    <ul>
                        {products && products.map((product, index) => <Product index={index} product={product} />)}
                    </ul>
                </AccordionDetails>
            </Accordion>
            <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                id={nanoid()}
            >
                <Typography variant="h6">Log History</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell allign="left">Name</TableCell>
                            <TableCell align="right">Email&nbsp;</TableCell>
                            <TableCell align="right">Product&nbsp;(g)</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map(row => (
                            <Row key={row.name} row={row} />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            </AccordionDetails>
            </Accordion>
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

function Product(props){
    const { product, index } = props;

    return (
        <li key={index} style={{listStyleType: "*",}}>
            <Typography>{product.name}</Typography>
        </li>
    );
}

function Row(props) {
    const { row } = props;

    return (
        <>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell align="left">{row.name}</TableCell>
                <TableCell align="right">{row.email}</TableCell>
                <TableCell align="right">{row.product.name}</TableCell>
            </TableRow>
        </>
    );
}