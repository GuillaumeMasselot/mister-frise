import React, { Component } from 'react';
import Quote from '../components/Quote';

import { quotesList } from '../data';
import SectionTitle from '../components/SectionTitle';

export default class Quotes extends Component {

    render() {
        return (
            <div>
                <SectionTitle>Citations</SectionTitle>
                {
                    quotesList.map( (quote, index) => {
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
