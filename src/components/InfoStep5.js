import React, { Component } from 'react';

export default class InfoStep5 extends Component {
    render() {
        return (
            <React.Fragment>
                <a href="#total-cost" className="step step-total-cost">
                    <h3 className="step-total-cost-heading">Total Cost</h3>
                    <div className="step-total-cost-value">&pound;{this.props.total}</div>
                </a>
            </React.Fragment>
        );
    }
}