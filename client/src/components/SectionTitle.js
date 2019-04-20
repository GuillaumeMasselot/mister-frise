import React, { Component } from 'react';

export default class SectionTitle extends Component {
    render() {
        return (
            <h3 style={{marginLeft: 5, textTransform: 'uppercase'}}>{this.props.children}</h3>
        )
    }
}
