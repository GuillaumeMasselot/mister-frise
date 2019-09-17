import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import Tags from './Tags';

import ReportProblemIcon from '@material-ui/icons/ReportProblem';

import './ArticlePreview.css';

export default class ArticlePreview extends Component {

    wipIcon() {
        const { wip } = this.props;
        if (wip) {
            return (
                <Avatar aria-label="work in progress" style={{backgroundColor: 'orangered'}}>
                    <ReportProblemIcon />
                </Avatar>
            )
        }
        return false;
    }

    formatedTitle() {
        const { title, wip } = this.props;
        if (wip) {
            return `[En cours d'écriture] ${title}`
        }
        return title;
    }

    render() {
        const { imgUrl, title, author, createdAt, intro, tags, _id } = this.props;
        const redirectUrl = `/articles/${_id}`;
        const createdDate = new Date(createdAt).toLocaleDateString();
        return (
            <Card style={{maxHeight: 420}}>
                <CardActionArea component={Link} to={redirectUrl}>
                    <CardHeader
                        title={this.formatedTitle()}
                        subheader={`Publié le ${createdDate} par ${author}`}
                        avatar={ this.wipIcon() }
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
