import React, { Component } from 'react';

import InteractiveTimeline from '../components/InteractiveTimeline';
import ArticlePreview from '../components/ArticlePreview';
import SectionTitle from '../components/SectionTitle';

export default class HomeArticles extends Component {
    
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    
    render() {
        return (
            <div>
                <div style={{textAlign: 'center'}}>
                    <h3>BIENVENUE SUR MISTER FRISE</h3>
                    <p style={{fontSize: "130%"}}>
                        <em>
                            <span>« Celui qui ne connaît pas l'histoire est condamné à la revivre. »</span>
                            <br/>
                            <strong style={{fontStyle: 'normal'}}>Karl Marx</strong>
                        </em>
                    </p>
                </div>
                <InteractiveTimeline title="Timeline globale" timelineUrl={this.props.timelineUrl} />
                <br />
                <SectionTitle>Les derniers articles</SectionTitle>
                <div style={{marginTop: 5}}>
                {
                    this.props.articles.map( (step, i) => {
                        return (
                            <div key={i} >
                                <ArticlePreview imgUrl={step.url}/>
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
