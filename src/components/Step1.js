import React, { Component } from 'react';

export default class Step1 extends Component{

    buttonDisabled() {
        // let disabled = !!this.props.width && !!this.props.height && !!this.props.length && !!this.props.quantity;

        if(this.props.width <= 0) {
            return true;
        }
        if(this.props.height <= 0) {
            return true;
        }
        if(this.props.length <= 0) {
            return true;
        }
        if(this.props.quantity <= 0) {
            return true;
        }
        return false;
        // return disabled;
    }

    render() {
        return (
            <React.Fragment>
                <div id="step-1" className="content-step">
                    <h2>Step 1 - Dimensions &amp; Quantity</h2>

                    <p className="intro">
                        Enter the width, height, length and quantity of the box(es) you require.
                    </p>

                    <div className="form-row">
                        <label htmlFor="width">Width:</label>
                        <input type="number" name="width" id="width" value={this.props.width} onChange={this.props.handleWidth} min="0" step="0.01"></input>
                    </div>

                    <div className="form-row">
                        <label htmlFor="height">Height:</label>
                        <input type="number" name="height" id="height" value={this.props.height} onChange={this.props.handleHeight} min="0" step="0.01"></input>
                    </div>

                    <div className="form-row">
                        <label htmlFor="length">Length:</label>
                        <input type="number" name="length" id="length" value={this.props.length} onChange={this.props.handleLength} min="0" step="0.01"></input>
                    </div>

                    <div className="form-row">
                        <label htmlFor="quantity">Quantity:</label>
                        <input type="number" name="quantity" id="quantity" value={this.props.quantity} onChange={this.props.handleQuantity} min="0" step="1"></input>
                    </div>

                    <div className="form-actions">
                        <button type="button" className="btn btn-primary btn-next" onClick={this.props.handleNext} disabled={this.buttonDisabled()}>
                        Next
                        </button>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}