import React, { Component } from 'react';

import ArticlePreview from '../components/ArticlePreview';
import SectionTitle from '../components/SectionTitle';

// temp
import articlesList from '../data';

export default class Home extends Component {
    state = {
        maxArticles: 3,
        firstThreeArticles: []
    }

    componentWillMount() {
        this.setState({
            firstThreeArticles: articlesList.filter((i, index) => (index < this.state.maxArticles))
        });
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
