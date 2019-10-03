import React, { Component } from 'react';

export default class Step1 extends Component{
    render() {
        return (
            <React.Fragment>
                <div id="step-1" class="content-step">
                    <h2>Step 1 - Dimensions &amp; Quantity</h2>

                    <p class="intro">
                        Enter the width, height, length and quantity of the box(es) you require.
                    </p>

                    <div class="form-row">
                        <label for="width">Width:</label>
                        <input type="number" name="width" id="width" value="0" min="0" step="0.01"></input>
                    </div>

                    <div class="form-row">
                        <label for="height">Height:</label>
                        <input type="number" name="height" id="height" value="0" min="0" step="0.01"></input>
                    </div>

                    <div class="form-row">
                        <label for="length">Length:</label>
                        <input type="number" name="length" id="length" value="0" min="0" step="0.01"></input>
                    </div>

                    <div class="form-row">
                        <label for="quantity">Quantity:</label>
                        <input type="number" name="quantity" id="quantity" value="0" min="0" step="1"></input>
                    </div>

                    <div class="form-actions">
                        <button type="button" class="btn btn-primary btn-next" disabled>
                        Next
                        </button>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}