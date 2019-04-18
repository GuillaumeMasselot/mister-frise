import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import { IconButton, Drawer, Divider, List, ListItem, ListItemText } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

const drawerWidth = 240;

const styles = theme => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  }
});

class AppDrawer extends Component {

    render() {

        const { classes, routes, open, onClose } = this.props;

        return (
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={onClose}>
                        <ChevronLeftIcon />
                    </IconButton>
                </div>
                <Divider />
                <List>
                {
                    routes.map((route, index) => (
                    <ListItem
                        button
                        key={index}
                        component={Link}
                        to={route.to}
                        onClick={onClose}
                    >
                        <ListItemText primary={route.name} />
                    </ListItem>
                ))}
                </List>
            </Drawer>
        )
    }
}

AppDrawer.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles, { withTheme: true})(AppDrawer);