import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Beer_item = (props) => {

    const { beer } = props;
    const { id, description, name, image_url } = beer;

    return (
        <Card sx={{ maxWidth: 350 }}>
            <CardMedia
                component="img"
                alt="image"
                height="140"
                image={image_url}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">View</Button>
            </CardActions>
        </Card>
    );
}

export default Beer_item;