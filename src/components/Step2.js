import React, { Component } from 'react';

export default class Step2 extends Component{
    render() {
        return (
            <React.Fragment>
                <div id="step-2" className="content-step">
                    <h2>Step 2 - Cardboard Grade</h2>

                    <p className="intro">
                        <strong>FantasticBoxCo</strong> offer a variety of grades of cardboard, each altering the price per m<sup>2</sup>:
            ​         </p>

                    <ol className="btn-radios-list">
                        <li>
                            <label>
                                <input type="radio" name="cardboard-grade" value="A"></input>
                                <span className="btn btn-radio">
                                A Grade<br></br>&pound;0.20 m<sup>2</sup>
                                </span>
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type="radio" name="cardboard-grade" value="B"></input>
                                <span className="btn btn-radio">
                                B Grade<br></br>&pound;0.10 m<sup>2</sup>
                                </span>
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type="radio" name="cardboard-grade" value="C"></input>
                                <span className="btn btn-radio">
                                C Grade<br></br>&pound;0.05 m<sup>2</sup>
                                </span>
                            </label>
                        </li>
                    </ol>

                    <div className="form-actions">
                        <button type="button" className="btn btn-back" onClick={this.props.handleBack}>
                        back
                        </button>
                        <button type="button" className="btn btn-primary btn-next" onClick={this.props.handleNext}>
                        Next
                        </button>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}