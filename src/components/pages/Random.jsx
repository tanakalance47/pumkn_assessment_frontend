import React from 'react';
import axios from 'axios';
import { useState, useEffect } from "react";
import CircularProgress from '@mui/material/CircularProgress';
import { Button } from '@mui/material';
import { useNavigate } from "react-router-dom"

const Random = () => {

    const [beer, setBeer] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('https://localhost:7087/beer/random')
            .then((res) => {
                const responseBeers = res.data;
                setBeer(responseBeers.data);
            })
            .catch((error) => {
                console.error('Error fetching random beer:', error);
            });
    }, []);

    const { contributed_by,
        brewers_tips,
        food_pairing,
        ingredients,
        method,
        boil_volume,
        volume,
        attenuation_level,
        ph,
        srm,
        ebc,
        target_og,
        target_fg,
        ibu,
        abv,
        image_url,
        description,
        first_brewed,
        tagline,
        name
    } = beer || {};

    return (
        <div style={{ margin: 80 }}>
            <h1> Random Beer</h1>

            {beer ? (
                <div>
                    <img src={image_url} alt="Beer" style={{ height: 300, width: 300 }} />

                    <h3>General</h3>

                    <p>Name: {name}</p>
                    <p>Description: {description}</p>
                    <p>tagline: {tagline}</p>
                    <p>First Brewed {first_brewed}</p>
                    <p>Brewers Tips: {brewers_tips}</p>
                    <p>Contributed by: {contributed_by}</p>

                    <h3>Specifics</h3>

                    <p>ABV: {abv}</p>
                    <p>IBU:  {ibu}</p>
                    <p>Target FG: {target_fg}</p>
                    <p>Target OG: {target_og}</p>
                    <p>EBC: {ebc}</p>
                    <p>SRM:  {srm}</p>
                    <p>PH: {ph}</p>
                    <p>Attenuation level: {attenuation_level}</p>

                    <h3>Food Pairing</h3>
                    {food_pairing ? (food_pairing.map((item) => (
                        <p>{item}</p>
                    ))) : <CircularProgress />}

                    <Button variant="contained" color="primary" onClick={() => navigate("/")}>Go Back</Button>
                </div>
            ) : <CircularProgress />}
        </div>
    );
};

export default Random;