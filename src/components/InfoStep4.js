import React, { Component } from 'react';

export default class InfoStep2 extends Component {
    render() {
        return (
            <React.Fragment>
                <a href="#step-4" className="step step-4">
                    <div className="step-number">4</div>
                    <h3 className="step-heading">Optional Extras</h3>
                    <span className="step-value">{this.props.extras || '-'}</span>
                </a>
            </React.Fragment>
        );
    }
}