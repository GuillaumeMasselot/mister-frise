import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import AppHeader from './components/AppHeader';
import Footer from './components/Footer';

import articlesList from './data';

import './App.css';
import ScrollToTop from './components/ScrollToTop';
import HomeArticles from './pages/HomeArticles';
import TimelineArticle from './pages/TimelineArticle';
import Roadmap from './pages/Roadmap';

const HomePage = (props) => {
    return (
        <HomeArticles 
            timelineUrl="https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1mGgy8vLhvmV4jGSKTlwRrRYzEgoHRNAK2E9w99wz_0g&font=Default&lang=fr&initial_zoom=0&height=450"
            articles={props.articlesList}
        />
    )
}

const EventsPage = (props) => {
    return (
        <TimelineArticle
            title="Titre"
            timelineSteps={props.timeline}
            imgUrl="https://static.lpnt.fr/images/2017/10/02/10529661lpw-10538214-article-gaulois-vercingetorix-alesia-cesar-jpg_4606330_660x281.jpg"
            timelineUrl="https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1mGgy8vLhvmV4jGSKTlwRrRYzEgoHRNAK2E9w99wz_0g&font=Default&lang=fr&hash_bookmark=true&initial_zoom=0&height=450"
            summary={
                <span>
                    dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
                    id est laborum.
                </span>
            }
        />
    )
}

class App extends Component {
    state = {
        articles: []
    }

    componentWillMount() {
        this.setState({
            articles: articlesList
        });
    }

    render() {
        const firstEvent = this.state.articles[0].events;

        return (
            <Router>
                <ScrollToTop>
                    <div className="root">
                        <AppHeader />
                        <div name="content" style={{maxWidth: 1080, margin:'0 auto', padding: 10}}>
                            <Route exact path="/" render={ () => <HomePage articlesList={this.state.articles} /> } /> 
                            <Route exact path="/articles" render={ () => <EventsPage timeline={firstEvent}/> } />
                            <Route exact path="/roadmap" component={Roadmap} />
                        </div>
                        <br/>
                        <Footer />
                    </div>
                </ScrollToTop>
            </Router>
        );
    }
}

export default App;


//
//