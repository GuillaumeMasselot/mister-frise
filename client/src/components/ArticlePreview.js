import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import { Card, CardMedia, CardHeader, CardContent, CardActionArea, Typography } from '@material-ui/core';
import Tags from './Tags';

import './ArticlePreview.css';

export default class ArticlePreview extends Component {

    render() {
        const { imgUrl, title, author, createdAt, intro, tags, _id } = this.props;
        const redirectUrl = `/articles/${_id}`;
        const createdDate = new Date(createdAt).toLocaleDateString();
        return (
            <Card style={{maxHeight: 420}}>
                <CardActionArea component={Link} to={redirectUrl}>
                    <CardHeader
                        title={title}
                        subheader={`Publié le ${createdDate} par ${author}`}
                    />
                    <CardMedia
                        component="img"
                        image={imgUrl}
                        title={title}
                        height="200"
                        style={{objectFit: 'cover'}}
                    />
                    <CardContent>
                        <Typography className='ellipsis'>
                            {intro}
                        </Typography>
                        <br/>
                        <Tags tags={tags} />
                    </CardContent>
                </CardActionArea>
            </Card>
        )
    }
}
