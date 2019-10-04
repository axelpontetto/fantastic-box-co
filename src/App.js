import React, {Component} from 'react';
import Header from './components/Header';
import InfoStep1 from './components/InfoStep1';
import InfoStep2 from './components/InfoStep2';
import InfoStep3 from './components/InfoStep3';
import InfoStep4 from './components/InfoStep4';
import InfoStep5 from './components/InfoStep5';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import Step4 from './components/Step4';
import Step5 from './components/Step5';

class App extends Component {

  constructor() {
    super();
    this.state = {
      currentStep: 1,
      width: (0).toFixed(2),
      height: (0).toFixed(2),
      length: (0).toFixed(2),
      quantity: (0).toFixed(2),
      grade: null,
      quality: null,
      extra: null,
      total: (0).toFixed(2),
    }
  }

  handleWidthChange(event) {
    const width = parseFloat(event.target.value).toFixed(2);
    this.setState({
      width: width,
    });
  }

  handleHeightChange(event) {
    const height = parseFloat(event.target.value).toFixed(2);
    this.setState({
      height: height,
    });
  }

  handleLengthChange(event) {
    const length = parseFloat(event.target.value).toFixed(2);
    this.setState({
      length: length,
    });
  }

  handleQuantityChange(event) {
    const quantity = parseFloat(event.target.value).toFixed(2);
    this.setState({
      quantity: quantity,
    });
  }

  handleNextStep() {
    this.setState((prevState) => {
      return {currentStep: prevState.currentStep + 1}
    });
  }

  handleBackStep() {
    console.log('hola')
    this.setState((prevState) => {
      return {currentStep: prevState.currentStep - 1} 
    });
    console.log(this.state.currentStep)
  }

  handleSelectGrade() {
  }

  render() {
    return (
      <div>
        <Header />
        <main>
          <div className="container">
            <aside>
              <ul className="progress">              
                <li>
                  <InfoStep1 
                    width={this.state.width}
                    height={this.state.height}
                    length={this.state.length}
                    quantity={this.state.quantity}
                    isActive = {this.state.currentStep === 1}
                  />
                </li>
                <li>
                  <InfoStep2 
                    grade={this.state.grade}
                  />
                </li>
                <li>
                  <InfoStep3 
                    grade={this.state.quality}
                  />
                </li>
                <li>
                  <InfoStep4
                    extras={this.state.extra}
                  />
                </li>
                <li>
                  <InfoStep5
                    total={this.state.total}
                  />
                </li>
              </ul>
            </aside>
            <section>
              { this.state.currentStep === 1 &&
                <Step1
                  width={this.state.width}
                  height={this.state.height}
                  length={this.state.length}
                  quantity={this.state.quantity}
                  handleWidth={(event) => this.handleWidthChange(event)}
                  handleHeight={(event) => this.handleHeightChange(event)}
                  handleLength={(event) => this.handleLengthChange(event)}
                  handleQuantity={(event) => this.handleQuantityChange(event)}
                  handleNext={() => this.handleNextStep()}
                />
              }
              {
                this.state.currentStep === 2 &&
                <Step2
                  handleBack={() => this.handleBackStep()}
                  handleNext={() => this.handleNextStep()}
                />
              }
              {
                this.state.currentStep === 3 &&
                <Step3 
                  handleBack={() => this.handleBackStep()}
                  handleNext={() => this.handleNextStep()}
                />
              }
              {
                this.state.currentStep === 4 &&
                <Step4 
                  handleBack={() => this.handleBackStep()}
                  handleNext={() => this.handleNextStep()}
                />
              }
              {
                this.state.currentStep === 5 &&
                <Step5
                  handleBack={() => this.handleBackStep()}
                  handleNext={() => this.handleNextStep()}
                />
              }
            </section>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
