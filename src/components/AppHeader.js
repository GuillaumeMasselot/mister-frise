import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';

export default class AppHeader extends Component {
    
    render = () => {
        return (
            <AppBar position="static" style={{backgroundColor: '#202124', color: 'white'}}>
                <Toolbar>
                    <Typography variant="h6" color="inherit" style={{flexGrow: 1}}>
                        MISTER FRISE
                    </Typography>
                    <Button color="inherit" component={Link} to="/">accueil</Button>
                    <Button color="inherit" component={Link} to="/events">période & évenements</Button>
                    <Button color="inherit">personnages</Button>
                    <Button color="inherit">citations</Button>
                    <Button color="inherit">à propos</Button>
                </Toolbar>
            </AppBar>
        )
    }
}