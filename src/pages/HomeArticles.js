import React, { Component } from 'react';
import { Typography, AppBar, Toolbar } from '@material-ui/core';

import InteractiveTimeline from '../components/InteractiveTimeline';
import Introduction from '../components/Introduction';
import ArticlePreview from '../components/ArticlePreview';

export default class HomeArticles extends Component {
    render() {
        return (
            <div>
                <Introduction title={this.props.title} imgUrl={this.props.imgUrl}>
                    Un petit résumé
                </Introduction>
                <br/>
                <InteractiveTimeline title="myFrise" timelineUrl={this.props.timelineUrl} />
                <br />
                <AppBar position="static" style={{backgroundColor: '#202124', color: 'white'}}>
                    <Toolbar>
                        <Typography variant="h6" color="inherit" style={{flexGrow: 1}}>
                            Derniers articles
                        </Typography>
                    </Toolbar>
                </AppBar>
                <div style={{marginTop: 5}}>
                {
                    this.props.articles.map( (step, i) => {
                        return (
                            <div>
                                <ArticlePreview imgUrl={step.url} key={i} />
                                <br />
                            </div>
                        )
                    })
                }
                </div>
            </div>
        )
    }
}
