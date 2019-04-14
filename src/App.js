import React, { Component } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';

import TimelineArticle from './pages/TimelineArticle';

import data from './data';

import './App.css';

class App extends Component {
    state = {
        timeline: []
    }

    componentWillMount() {
        this.setState({
            timeline: data
        });
    }

    render() {
        return (
            <div className="root">
                <Header />
                <div name="content" style={{maxWidth: 1080, margin:'0 auto', padding: 10}}>
                    <TimelineArticle 
                        timelineSteps={this.state.timeline}
                        mainImg="https://static.lpnt.fr/images/2017/10/02/10529661lpw-10538214-article-gaulois-vercingetorix-alesia-cesar-jpg_4606330_660x281.jpg"
                        timelinejs="https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1mGgy8vLhvmV4jGSKTlwRrRYzEgoHRNAK2E9w99wz_0g&font=Default&lang=fr&hash_bookmark=true&initial_zoom=0&height=650"/>
                </div>
                <Footer />
            </div>
        );
    }
}

export default App;


//
//