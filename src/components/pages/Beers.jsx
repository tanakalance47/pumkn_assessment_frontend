import React from 'react';
import axios from 'axios';
import { useState, useEffect } from "react";
import BeerItem from './Beer_Item';
import CircularProgress from '@mui/material/CircularProgress';

const Beers = () => {
    const [beers, setBeers] = useState([]);

    useEffect(() => {
        axios.get('https://localhost:7087/beer/menu')
            .then((res) => {
                const responseBeers = res.data;
                setBeers(responseBeers.data);
            })
            .catch((error) => {
                console.error('Error fetching beers:', error);
            });
    }, []);

    return (
        <div style={{ margin: 80 }} >
            <h1>Beer Menu</h1>

            {beers.length > 0 ? (
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                    {beers.map((item) => (
                        <BeerItem key={item.id} beer={item} />
                    ))}
                </div>
            ) : (
                <CircularProgress />
            )}
        </div>
    );
};

export default Beers;
