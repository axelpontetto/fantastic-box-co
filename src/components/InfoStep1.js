import React, { Component } from 'react'

export default class InfoStep1 extends Component {
    render() {
        return (
            <React.Fragment>
                <a href="#step-1" className="step step-1 is-active">
                    <div className="step-number">1</div>
                    <h3 className="step-heading">Dimensions &amp; Quantity</h3>
                    <dl>
                        <dt>Width:</dt>
                        <dd>{this.props.width}m</dd>
                        <dt>Height:</dt>
                        <dd>{this.props.height}m</dd>
                        <dt>Length:</dt>
                        <dd>{this.props.length}m</dd>
                        <dt>Quantity:</dt>
                        <dd>{this.props.quantity}</dd>
                    </dl>
                </a>
            </React.Fragment>
        );
    }
}