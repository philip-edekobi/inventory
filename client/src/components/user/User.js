import { Box, Button } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { nanoid } from "nanoid"

export default function User(){
    const { name, email } = useParams();
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        // @ts-ignore
        loadProducts().then(result => setProducts(result))
        .catch(err => console.log(err));
    }, []);

    async function loadProducts(){
        let response = await axios.get("/admin/");
        response = response.data.result;
        return response;
    }

    function createData(productName){ return {name, email, product: { _id: nanoid(), name: productName, __v: 0, date: new Date().toLocaleString() }}}

    let data = products.map(product => {
        return (
            <>
            <FormControlLabel className="check" control={<Checkbox />} label={product.name} value={product.name} />
            <br />
            </>
        );
    });

    // @ts-ignore
    function handleSubmit(e){
        let checks = document.getElementsByTagName("input");
        let checkArr = Array.from(checks);
        checkArr = checkArr.filter(check => check.checked);
        let productNames = checkArr.map(check => check.value)  
        if(productNames && productNames.length === 0) {
            alert("Please select a product");
            return;
        }
        let data = productNames.map(name => createData(name));
        for(let dataObj of data){
            axios.post(
                "/user/", 
                dataObj
            )
            .catch(err => console.log(err));
        }
        for(let box of checkArr){
            box.click();
        }
        alert("Purchase successful");
        e.preventDefault();
    }

    function showHistory(){
        navigate(`/${name}/${email}/history`);
    }

    return (
        <>
        <Button variant="outlined" onClick={showHistory} style={{
            marginTop: 10,
        }}>View history</Button>
        <Box sx={{
            border: "1px solid grey",
            margin: 5,
            height: 300,
            padding: "2rem 1rem"
        }}>
            <FormGroup id="form">
                <fieldset>
                    <legend>Choose a product</legend>
                    {data}
                </fieldset>
                {/* @ts-ignore*/}
                <center><Button 
                    variant="contained" 
                    style ={{ 
                        margin: "1rem",
                        width: "40%",
                        height: 50,
                    }}
                    onClick={handleSubmit}
                >
                    Purchase Product(s)
                {/* @ts-ignore*/}
                </Button></center>
            </FormGroup>
        </Box>
        </>
    );
}