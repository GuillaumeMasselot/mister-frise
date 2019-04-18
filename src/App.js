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
import Quotes from './pages/Quotes';
import AppDrawer from './components/AppDrawer';

const routes = [{
    name: 'Accueil',
    path: '/',
    to: '/'
}, {
    name: 'Articles',
    path: '/articles',
    to: '/articles/2'
}, {
    name: 'Citations',
    path: '/quotes',
    to: '/quotes'
}, {
    name: 'Roadmap',
    path: '/roadmap',
    to: '/roadmap'
}]

class App extends Component {
    state = {
        articles: [],
        open: false
    }

    componentWillMount() {
        this.setState({
            articles: articlesList
        });

    }

    handleDrawerOpen = () => {
        this.setState({ open: true });
    };

    handleDrawerClose = () => {
        this.setState({ open: false });
    };

    render() {

        const {open} = this.state;

        return (
            <Router>
                <ScrollToTop>
                    <div className="root">
                        <AppHeader routes={routes} onOpen={this.handleDrawerOpen} />
                        <AppDrawer routes={routes} open={open} onClose={this.handleDrawerClose} />
                        
                        <div name="content" style={{maxWidth: 1080, margin:'0 auto', padding: 10}}>
                            <Route exact path="/" component={HomeArticles} /> 
                            <Route exact path="/articles/:id" component={TimelineArticle} />
                            <Route exact path="/quotes" component={Quotes} />
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