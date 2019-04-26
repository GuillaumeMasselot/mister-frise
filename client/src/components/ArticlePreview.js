import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
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
