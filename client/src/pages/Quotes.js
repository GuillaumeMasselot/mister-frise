import React, { Component } from 'react';
import Quote from '../components/Quote';

import SectionTitle from '../components/SectionTitle';

export default class Quotes extends Component {

    state = {
        quotes: []
    }

    componentWillMount() {
        this.getQuotes()
        .then(res => {
            this.setState({
                quotes: res
            });
        })
        .catch(err => console.log(err));
    }

    getQuotes = async () => {
        const response = await fetch('/quotes');
        const body = await response.json();
    
        if (response.status !== 200) {
          throw Error(body.message) 
        }
        return body;
    };

    render() {
        const { quotes } = this.state;

        return (
            <div>
                <SectionTitle>Citations</SectionTitle>
                {
                    quotes.map( (quote, index) => {
                        return (
                            <div key={index} >
                                <Quote {...quote} />
                                <br />
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
