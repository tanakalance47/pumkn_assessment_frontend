import React from 'react';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Search = () => {
    const navigate = useNavigate();
    const [searchText, setSearchText] = useState("")
    return (
        <div style={{ margin: 80 }}>
            <h1> Search Beer</h1>
            <form noValidate autoComplete="off">
                <TextField id="outlined-search" type="search" placeholder='Enter beer name' variant="outlined" onChange={(e) => setSearchText(e.target.value)} /> <br /><br />
                <Button variant="contained" color="primary" onClick={searchText.length > 0 ? (() => navigate(`/Search_Results/${searchText}`)) : <div> </div>}>Search</Button>
            </form>
        </div>
    );
};

export default Search;