import React, { Component } from 'react';

export default class InfoStep3 extends Component {
    render() {
        return (
            <React.Fragment>
                <a href="#step-3" className="step step-3">
                    <div className="step-number">3</div>
                    <h3 className="step-heading">Print Quality</h3>
                    <span className="step-value">{this.props.quality || '-'}</span>
                </a>
            </React.Fragment>
        );
    }
}