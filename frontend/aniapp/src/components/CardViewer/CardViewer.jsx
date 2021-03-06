import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useState, useEffect } from 'react';
import recommended from './recommended.json';
import "./card-viewer.css";
import imagenDePrueba from "../../img/g1.jpg";

import animedb from "../../data/animedb.json"


export default function CardViewer(props) {
    const { recommendations, handleFinished } = props;
    const [ selected, setSelected] = useState([]);
    const [ genre, setGenre ] = useState(recommendations[0]);
    const [ listID, setListID ] = useState([]);

    /*const getIDs = () => {
        
    }

    const searchByGenre = () => {
        for(var i = 0; i<10000; i++)
        if (animedb['animes'][i][''] === ){

        }
    }*/
    
    const handleSelection = (anime) =>{
        return () => {
            if( selected.length <= recommendations.length){
                setSelected([ anime , ...selected])
                setGenre(recommendations[1])
            }
        }
    }

    useEffect(
        () => {
            if( selected.length === recommendations.length) handleFinished(selected)
        }
    );

    return (
        <div className = "card-viewer">
        {
            recommended[genre].map( ({anime, description}, key) => {
              return (
                <Card sx={{ maxWidth: 345 }} onClick = {handleSelection(anime)}>
                    <CardActionArea className = "card-content">
                    <CardMedia
                        component="img"
                        height="140"
                        image={imagenDePrueba}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" >
                        {anime}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        {description}
                        </Typography>
                    </CardContent>
                    </CardActionArea>
                </Card>
              )
            })
        }
        </div>
    );
  }
