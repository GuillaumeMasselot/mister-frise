import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import { Card, CardMedia, CardHeader, CardContent, Avatar, CardActionArea, Typography } from '@material-ui/core';
import Tags from './Tags';

export default class ArticlePreview extends Component {
    render() {
        const { imgUrl, title, metadatas, intro } = this.props;
        return (
            <Card style={{maxHeight: 450}}>
                <CardActionArea component={Link} to="/articles">
                    <CardHeader
                        avatar={
                            <Avatar aria-label="author" style={{backgroundColor: "darkred"}}>
                                E
                            </Avatar>
                        }
                        title={title}
                        subheader={`Publié le ${metadatas.date} par ${metadatas.author}`}
                    />
                    <CardMedia
                        component="img"
                        image={imgUrl}
                        title={title}
                        height="200"
                        style={{objectFit: 'cover'}}
                    />
                    <CardContent>
                        <Typography component="p" style={{maxHeight: 60, overflow: "hidden"}}>
                            {intro}
                        </Typography>
                        <br/>
                        <Tags tags={metadatas.tags} />
                    </CardContent>
                </CardActionArea>
            </Card>
        )
    }
}
