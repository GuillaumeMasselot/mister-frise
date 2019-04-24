import React, { Component } from 'react';

import TimelineDetails from '../components/TimelineDetails';
import InteractiveTimeline from '../components/InteractiveTimeline';
import DecoratedTextBlock from '../components/DecoratedTextBlock';
import SimpleTextBlock from '../components/SimpleTextBlock';

export default class Article extends Component {

    state = {
        article: {},
        loaded: false
    }

    componentWillMount () {

        this.getArticle()
        .then(res => {
            this.setState({
                article: res,
                loaded: true
            });
        })
        .catch(err => console.log(err));
    }

    getArticle = async () => {
        const { id } = this.props.match.params;

        const response = await fetch(`/getarticle/${id}`);
        const body = await response.json();

        if (response.status !== 200) {
          throw Error(body.message) 
        }
        return body;
    };

    render() {
        const { loaded } = this.state;
        const { imgUrl, title, intro, events, notes, links, sources } = this.state.article;
        return loaded ? (
            <div>
                <DecoratedTextBlock imgUrl={imgUrl} title={title}>
                    {intro}
                </DecoratedTextBlock>
                <br/>
                    <InteractiveTimeline title="Timeline" article={this.state.article} />
                <br/>
                <TimelineDetails timelineSteps={events} title="Timeline"/>
                {
                    notes.length > 0 &&
                    <div>
                        <br/>
                        <SimpleTextBlock title="Notes">
                            {notes}
                        </SimpleTextBlock>
                    </div>
                }
                {
                    (sources.length > 0 || links.length > 0) &&
                    <div>
                        <br />
                        <SimpleTextBlock title="Sources & liens">
                            {
                                sources.map( (source, index) => <a href={source} key={index}>{source}</a> )
                            }
                            <br/>
                            {
                                links.map( (link, index) => <a href={link} key={index}>{link}</a> )
                            }
                        </SimpleTextBlock>
                    </div>
                }
            </div>
        ) : <div>Loading...</div>
    }
}