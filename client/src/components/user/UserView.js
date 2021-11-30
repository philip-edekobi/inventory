import { Typography, Accordion, AccordionSummary } from "@mui/material";
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react'
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function UserView(){
    const { name } = useParams();
    const [logs, setLogs] = useState(null);

    async function loadLogs(){
        let response = await axios.get(`http://localhost:8081/user/${name}`);
        response = response.data.result;
        return response;
    }

    useEffect(() => {
        loadLogs().then(res => {
            setLogs(res);
        })
        .catch(err => console.log("Error" , err));
    }, []);

    function createData(name, email, product){ return {name, email, product}}
    const rows = logs? logs.map(log => createData(log.name, log.email, log.product)) : [];

    return (
        <div>
            <Accordion>
                <AccordionSummary
                >
                    <Typography variant="h6">History for {name[0].toUpperCase() + name.slice(1)} </Typography>
                </AccordionSummary>
            </Accordion>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow sx={{ '& > *': { borderBottom: 'unset', backgroundColor: '#3399cc' } }}>
                            <TableCell align="left">Product Name</TableCell>
                            <TableCell align="right">Date of Purchase</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map(row => (
                            <Row key={row.name} row={row} />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

function Row(props) {
    const { row } = props;

    return (
        <>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell align="left">{row.product.name}</TableCell>
                <TableCell align="right">{row.product.date}</TableCell>
            </TableRow>
        </>
    );
}