import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import { Card, CardMedia, CardHeader, Typography, CardContent, Avatar, Chip, CardActionArea } from '@material-ui/core';
import { Person, Grade, HourglassEmptySharp } from '@material-ui/icons';

export default class ArticlePreview extends Component {
    render() {
        const { imgUrl } = this.props;
        return (
            <Card style={{maxHeight: 450}}>
                <CardActionArea component={Link} to="/events/">
                    <CardHeader
                        avatar={
                            <Avatar aria-label="lala" style={{backgroundColor: "darkred"}}>
                                E
                            </Avatar>
                        }
                        title="Some article"
                        subheader="September 14, 2018"
                    />
                    <CardMedia
                        component="img"
                        image={imgUrl}
                        title="imgH"
                        height="200"
                        style={{objectFit: 'cover'}}
                    />
                    <CardContent>
                        <Typography component="p" style={{maxHeight: 60, overflow: "hidden"}}>
                            Gengis Khan, littéralement : « souverain universel », d'abord nommé Temüdjin, 
                            né vers 1155/1162 pendant le Khamag Mongol, dans ce qui correspond à l'actuelle province de Khentii en Mongolie, 
                            mort en août 1227 dans l'actuel Xian de Qingshui, est le fondateur de l'Empire mongol, le plus vaste empire continu de tous les temps.
                        </Typography>
                    </CardContent>
                    <CardContent>
                        <Chip label="Bataille" icon={<Grade />} style={{marginRight: 10}} />
                        <Chip label="Personnage" icon={<Person />} style={{marginRight: 10}} />
                        <Chip label="Période" icon={<HourglassEmptySharp />} style={{marginRight: 10, flexGrow: 1}} />
                    </CardContent>
                </CardActionArea>
            </Card>
        )
    }
}
