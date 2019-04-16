import React, { Component } from 'react'
import { Typography, Card, CardContent } from '@material-ui/core';
import SectionTitle from './SectionTitle';

export default class SimpleTextBlock extends Component {
    render() {
        return (
            <div>
                <SectionTitle>{this.props.title}</SectionTitle>
                <Card>
                    <CardContent>
                        <Typography variant="p">
                            {this.props.children}
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        )
    }
}
