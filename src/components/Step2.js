import React, { Component } from 'react';

export default class Step2 extends Component{
    render() {
        return (
            <React.Fragment>
                <div id="step-2" class="content-step">
                    <h2>Step 2 - Cardboard Grade</h2>

                    <p class="intro">
                        <strong>FantasticBoxCo</strong> offer a variety of grades of cardboard, each altering the price per m<sup>2</sup>:
            ​         </p>

                    <ol class="btn-radios-list">
                        <li>
                            <label>
                                <input type="radio" name="cardboard-grade" value="A"></input>
                                <span class="btn btn-radio">
                                A Grade<br></br>&pound;0.20 m<sup>2</sup>
                                </span>
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type="radio" name="cardboard-grade" value="B"></input>
                                <span class="btn btn-radio">
                                B Grade<br></br>&pound;0.10 m<sup>2</sup>
                                </span>
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type="radio" name="cardboard-grade" value="C"></input>
                                <span class="btn btn-radio">
                                C Grade<br></br>&pound;0.05 m<sup>2</sup>
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