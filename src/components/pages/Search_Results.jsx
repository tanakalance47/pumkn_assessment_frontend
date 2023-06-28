import React from 'react';
import axios from 'axios';
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import { useParams } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import { DataGrid } from '@mui/x-data-grid';

//Define columns.
const tableColumns = [
    {
        field: 'id',
        headerName: 'Id',
        width: 150,
    },
    {
        field: 'name',
        headerName: 'Name',
        width: 150,
    },
    {
        field: 'description',
        headerName: 'Description',
        width: 300,
    },
    {
        field: 'tagline',
        headerName: 'Tagline',
        width: 150,
    },
    {
        field: 'first_brewed',
        headerName: 'First Brewed',
        width: 150,
    },
    {
        field: 'brewers_tips',
        headerName: 'Brewers Tips',
        width: 150,
    },
    {
        field: 'contributed_by',
        headerName: 'Contributed by',
        width: 200,
    }
];


const Search_Results = () => {

    const [results, setResults] = useState();
    const { searchText } = useParams();

    //Get search results from the backend API using the provided search text
    useEffect(() => {
        axios.get(`https://localhost:7087/search?query=${searchText}`)
            .then((res) => {
                const responseBeers = res.data;
                setResults(responseBeers.data);
            })
            .catch((error) => {
                console.error('Error fetching beers:', error);
            });
    }, [searchText]);

    return (
        <div style={{ margin: 80 }}>
            <h1>Search Results</h1>

            {results ? (
                <div style={{ height: 400, width: '100%' }}>
                    <DataGrid
                        rows={results}
                        columns={tableColumns}
                        initialState={{
                            pagination: {
                                paginationModel: { page: 0, pageSize: 5 },
                            },
                        }}
                        pageSizeOptions={[5, 10]}
                      
                    />
                </div>
            ) : <CircularProgress />}
        </div>
    );
};

export default Search_Results;