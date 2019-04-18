import React, { Component } from 'react';

import InteractiveTimeline from '../components/InteractiveTimeline';
import ArticlePreview from '../components/ArticlePreview';
import SectionTitle from '../components/SectionTitle';

// temp
import articlesList from '../data';

export default class HomeArticles extends Component {
    state = {
        maxArticles: 3,
        firstThreeArticles: []
    }

    componentWillMount() {
        this.setState({
            firstThreeArticles: articlesList.filter((i, index) => (index < this.state.maxArticles))
        });
    }
    
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    
    render() {
        
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
                <InteractiveTimeline 
                    title="Timeline globale"
                    timelineUrl="https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1mGgy8vLhvmV4jGSKTlwRrRYzEgoHRNAK2E9w99wz_0g&font=Default&lang=fr&hash_bookmark=true&initial_zoom=0&height=350" />
                <br />
                <SectionTitle>Les derniers articles</SectionTitle>
                <div style={{marginTop: 5}}>
                {
                    this.state.firstThreeArticles.map( (article, i) => {
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
