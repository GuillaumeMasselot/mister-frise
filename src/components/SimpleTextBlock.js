import React, { Component } from 'react'
import { Card, CardContent } from '@material-ui/core';
import SectionTitle from './SectionTitle';

export default class SimpleTextBlock extends Component {
    render() {
        return (
            <div>
                <SectionTitle>{this.props.title}</SectionTitle>
                <Card>
                    <CardContent>
                        {this.props.children}
                    </CardContent>
                </Card>
            </div>
        )
    }
}
