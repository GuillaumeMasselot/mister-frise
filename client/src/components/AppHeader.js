import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
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
                        <Typography variant="h6" color="inherit" style={{flexGrow: 1}} className="mobileCenter">
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