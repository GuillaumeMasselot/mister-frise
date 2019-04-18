import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import { AppBar, Toolbar, Typography, Button, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import '../App.css';

class AppHeader extends Component {

    isActive = (path) => {
        const currentPath = this.props.location.pathname;
        const isHome = path === '/';
        const isCurrentPath = isHome ? currentPath === '/' : currentPath.includes(path);
        return { color: isCurrentPath ? '#ffffff' : '#cccccc' };
    }
    
    render = () => {
        const { routes, onOpen } = this.props;
        return (
            <div>
                <AppBar position="static" style={{backgroundColor: '#202124', color: 'white'}}>
                    <Toolbar>
                        <IconButton 
                            className="desktopHide"
                            style={{marginLeft: -12, marginRight: 20}}
                            color="inherit"
                            aria-label="Menu"
                            onClick={onOpen}>
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" color="inherit" style={{flexGrow: 1}}>
                            MISTER FRISE
                        </Typography>
                        <div className="mobileHide">
                            {
                                routes.map( (route, index) => {
                                    return (
                                        <Button
                                            color="inherit"
                                            component={Link}
                                            to={route.to}
                                            style={this.isActive(route.path)}
                                            key={index}>
                                            {route.name}    
                                        </Button>
                                    )
                                })
                            }
                        </div>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

export default withRouter(AppHeader);