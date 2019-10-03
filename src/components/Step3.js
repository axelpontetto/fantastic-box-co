import React, { Component } from 'react';

export default class Step3 extends Component{
    render() {
        return (
            <React.Fragment>
                <div id="step-3" class="content-step">
                    <h2>Step 3 - Print Quality</h2>

                    <p class="intro">
                        A variety of printing options are available for any branding / logos which are required:
                    </p>

                    <ol class="btn-radios-list">
                        <li>
                        <label>
                            <input type="radio" name="print-quality" value="3-color"></input>
                            <span class="btn btn-radio">
                            3 colours<br></br>&pound;0.20 m<sup>2</sup>
                            </span>
                        </label>
                        </li>
                        <li>
                        <label>
                            <input type="radio" name="print-quality" value="2-color"></input>
                            <span class="btn btn-radio">
                            2 colours<br></br>&pound;0.10 m<sup>2</sup>
                            </span>
                        </label>
                        </li>
                        <li>
                        <label>
                            <input type="radio" name="print-quality" value="black-only"></input>
                            <span class="btn btn-radio">
                            Black only<br></br>&pound;0.05 m<sup>2</sup>
                            </span>
                        </label>
                        </li>
                        <li>
                        <label>
                            <input type="radio" name="print-quality" value="no-printing"></input>
                            <span class="btn btn-radio">
                            No printing<br></br>&pound;0.00
                            </span>
                        </label>
                        </li>
                        <li>
                        <label>
                            <input type="radio" name="print-quality" value="FantasticBoxCo-branding"></input>
                            <span class="btn btn-radio">
                            <strong>FantasticBoxCo</strong> branding<br></br>5% discount on total price
                            </span>
                        </label>
                        </li>
                    </ol>

                    <div class="form-actions">
                        <button type="button" class="btn btn-back">
                        back
                        </button>
                        <button type="button" class="btn btn-primary btn-next">
                        Next
                        </button>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}