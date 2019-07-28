import React, { Component } from 'react';

import ArticlePreview from '../components/ArticlePreview';
import SectionTitle from '../components/SectionTitle';

export default class Home extends Component {
    state = {
        maxArticles: 3,
        firstThreeArticles: []
    }

    componentWillMount() {
        this.getArticles()
        .then(res => {
            res.sort(function(a,b){
                // Turn your strings into dates, and then subtract them
                // to get a value that is either negative, positive, or zero.
                return new Date(b.createdAt) - new Date(a.createdAt);
            });
            console.log(res);
            this.setState({
                firstThreeArticles: res.filter((i, index) => (index < this.state.maxArticles))
            });
        })
        .catch(err => console.log(err));
    }

    getArticles = async () => {
        const response = await fetch('/getarticles');
        const body = await response.json();

        if (response.status !== 200) {
          throw Error(body.message) 
        }
        return body;
    };

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
