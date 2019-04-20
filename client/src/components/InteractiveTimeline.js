import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import SectionTitle from './SectionTitle';

export default class InteractiveTimeline extends Component {
    render() {
        return (
            <div>
                <SectionTitle>{this.props.title}</SectionTitle>
                <Card>
                    <CardContent>
                        <iframe 
                            title={this.props.title}
                            src={this.props.timelineUrl}
                            width='100%' 
                            height={350} 
                            webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen frameBorder='0'>
                        </iframe>
                    </CardContent>
                </Card>
            </div>
        )
    }
}
