import React, { Component } from 'react';

import InteractiveTimeline from '../components/InteractiveTimeline';
import ArticlePreview from '../components/ArticlePreview';
import SectionTitle from '../components/SectionTitle';

export default class ArticlesHub extends Component {
    state = {
        articles: []
    }

    componentWillMount() {
        this.getArticles()
        .then(res => {
            this.setState({
                articles: res
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
        const timelineURL = 'https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1mGgy8vLhvmV4jGSKTlwRrRYzEgoHRNAK2E9w99wz_0g&font=Fjalla-Average&lang=fr&initial_zoom=2&start_at_slide=3&height=400';
        return (
            <div>
                <InteractiveTimeline 
                    title='Frise des articles et événements majeurs'
                    timelineUrl={timelineURL} />
                <br />
                <SectionTitle>Tous les articles</SectionTitle>
                <div style={{marginTop: 5}}>
                {
                    this.state.articles.map( (article, i) => {
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
