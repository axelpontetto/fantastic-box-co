import React, { Component } from 'react';

export default class InfoStep2 extends Component {
    render() {
        return (
            <React.Fragment>
                <a href="#step-2" className="step step-2">
                    <div className="step-number">2</div>
                    <h3 className="step-heading">Cardboard Grade</h3>
                    <span className="step-value">{this.props.grade || '-'}</span>
                </a>
            </React.Fragment>
        );
    }
}