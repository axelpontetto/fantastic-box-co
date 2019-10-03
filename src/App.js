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
      width: 0,
      height: 0,
      length: 0,
      quantity: 0,
    }
  }

  render() {
    return (
      <div>
        <Header />
        <main>
          <div class="container">
            <aside>
              <ul class="progress">
                <li>
                  <InfoStep1 
                    width={this.state.width}
                    height={this.state.height}
                    length={this.state.length}
                    quantity={this.state.quantity}
                  />
                </li>
                <li>
                  <InfoStep2 />
                </li>
                <li>
                  <InfoStep3 />
                </li>
                <li>
                  <InfoStep4 />
                </li>
                <li>
                  <InfoStep5 />
                </li>
              </ul>
            </aside>
            <section>
              <Step1 />
              <Step2 />
              <Step3 />
              <Step4 />
              <Step5 />
            </section>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
