import { useState, useEffect } from 'react';
import axios from "axios";
import  ExpandMoreIcon  from "@mui/icons-material/ExpandMore";
import { nanoid } from "nanoid";
import { Typography, Button, Accordion, AccordionSummary, AccordionDetails, TextField } from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function AdminInfo(){
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

    function deleteProduct(e){
        axios.delete(`http://localhost:8081/admin/${e.target.name}`)
        .then(res => loadProducts())
        .then(products => setProducts(products))
        .catch(err => console.log(err));
    }

    function createData(name, email, product, date){ return {name, email, product, date}}
    const rows = logs? logs.map(log => createData(log.name, log.email, log.product, log.date)) : [];

    return (
        <>
            <Accordion>

                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    id={nanoid()}
                >
                    <div><Typography variant="h6">Products</Typography></div>

                </AccordionSummary>

                <AccordionDetails>

                    <form style={{
                        marginLeft:50
                    }}>
                        <label htmlFor="product"><Typography variant="body1">Add new product: </Typography></label>
    
                        <TextField name="product" id="product" value={name} variant="standard" onChange={(e)=>setName(e.target.value) } />

                        <Button style={{margin: 10}} color="success" onClick={addProduct}
                            variant="outlined"
                        >
                            Add
                        </Button>
                    </form>

                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell align="left" ><Typography variant="body1">Product Name</Typography></TableCell>
                                <TableCell align="center" ></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {products && products.map((product, index) => <Product index={index} product={product} deleteProduct={deleteProduct} />)}
                            
                        </TableBody>
                    </Table>

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
                            <TableCell align="left">Name</TableCell>
                            <TableCell align="center">Email&nbsp;</TableCell>
                            <TableCell align="center">Product&nbsp;(g)</TableCell>
                            <TableCell align="center">Date&nbsp;(g)</TableCell>
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

function Product(props){
    const { product, index, deleteProduct } = props;

    return (
        <TableRow key={index} >
            <TableCell><Typography>{product.name}</Typography></TableCell>
            <TableCell><Button name={product.name} onClick={deleteProduct} variant="contained" color="error" >Delete</Button></TableCell>
        </TableRow>
    );
}

function Row(props) {
    const { row } = props;

    return (
        <>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell align="left">{row.name}</TableCell>
                <TableCell align="center">{row.email}</TableCell>
                <TableCell align="center">{row.product.name}</TableCell>
                <TableCell align="center">{row.product.date}</TableCell>
            </TableRow>
        </>
    );
}