import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import AppHeader from './components/AppHeader';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Quotes from './pages/Quotes';
import AppDrawer from './components/AppDrawer';
import Home from './pages/Home';
import Article from './pages/Article';
import Roadmap from './pages/Roadmap';
import ArticlesHub from './pages/ArticlesHub';

import './App.css';

const routes = [
    {
        name: 'Accueil',
        path: '/',
        to: '/'
    }, {
        name: 'Articles',
        path: '/articles',
        to: '/articles'
    }, {
        name: 'Citations',
        path: '/quotes',
        to: '/quotes'
    }, {
        name: 'Roadmap',
        path: '/roadmap',
        to: '/roadmap'
    }
]

class App extends Component {
    state = {
        open: false
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
                            <Route exact path="/" component={Home} /> 
                            <Route exact path="/articles" component={ArticlesHub} />
                            <Route exact path="/articles/:id" component={Article} />
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
