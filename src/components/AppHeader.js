import React, { Component } from 'react';

import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';

export default class AppHeader extends Component {
    
    render = () => {
        return (
            <AppBar position="static" style={{backgroundColor: '#202124', color: 'white'}}>
                <Toolbar>
                    <Typography variant="h6" color="inherit" style={{flexGrow: 1}}>
                        Mister Frise
                    </Typography>
                    <Button color="inherit" href="/">accueil</Button>
                    <Button color="inherit" href="/events">période & évenements</Button>
                    <Button color="inherit">personnages</Button>
                    <Button color="inherit">citations</Button>
                    <Button color="inherit">à propos</Button>
                </Toolbar>
            </AppBar>
        )
    }
}