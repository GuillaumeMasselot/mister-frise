import React, { Component } from 'react';

import InteractiveTimeline from '../components/InteractiveTimeline';
import ArticlePreview from '../components/ArticlePreview';
import SectionTitle from '../components/SectionTitle';

export default class HomeArticles extends Component {
    
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    
    render() {
        const maxArticles = 3;
        const firstThreeArticles = this.props.articles.filter((i, index) => (index < maxArticles));
        return (
            <div>
                <div style={{textAlign: 'center'}}>
                    <h3>BIENVENUE SUR MISTER FRISE</h3>
                    <p style={{fontSize: "130%"}}>
                        <em>« Celui qui ne connaît pas l'histoire est condamné à la revivre. »</em>
                        <br/>
                        <strong style={{fontStyle: 'normal'}}>Karl Marx</strong>
                    </p>
                </div>
                <InteractiveTimeline title="Timeline globale" timelineUrl={this.props.timelineUrl} />
                <br />
                <SectionTitle>Les derniers articles</SectionTitle>
                <div style={{marginTop: 5}}>
                {
                    firstThreeArticles.map( (article, i) => {
                        return (
                            <div key={i} >
                                <ArticlePreview {...article} />
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
