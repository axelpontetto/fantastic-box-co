import React, { Component } from 'react';

export default class Step4 extends Component{
    render() {
        return (
            <React.Fragment>
                <div id="step-4" className="content-step">
                    <h2>Step 4 - Optional Extras</h2>

                    <ol className="btn-radios-list">
                        <li>
                        <label>
                            <input type="checkbox" name="optional-extras" value="handles"></input>
                            <span className="btn btn-radio">
                            Handles<br></br>&pound;0.10 per box
                            </span>
                        </label>
                        </li>
                        <li>
                        <label>
                            <input type="checkbox" name="optional-extras" value="reinforced-bottom"></input>
                            <span className="btn btn-radio">
                            Reinforced bottom<br></br>&pound;0.05 per box<br></br>
                            <small>(only available with grade A cardboard)</small>
                            </span>
                        </label>
                        </li>
                    </ol>

                    <div className="form-actions">
                        <button type="button" className="btn btn-back" onClick={this.props.handleBack}>
                        back
                        </button>
                        <button type="button" className="btn btn-primary btn-next" onClick={this.props.handleNext}>
                        Finish
                        </button>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}