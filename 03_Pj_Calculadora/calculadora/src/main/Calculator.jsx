import React, {Component} from 'react';
import './Calculator.css';
import Button from '../components/Button';
import Display from '../components/Display';

const initialState = {
  displayValue: '0',
  clearDisplay: false,
  operation: null,
  values: [0, 0],
  current: 0,
};

export default class Calculator extends Component {
  state = {...initialState};

  render() {
    return (
      <div className="calculator">
        <Display value={this.state.displayValue}/>

        <Button label="AC" click={this.clearMemory} triple/>
        <Button label="/" click={this.setOperation} operation/>

        <Button label="7" click={this.addDigit}/>
        <Button label="8" click={this.addDigit}/>
        <Button label="9" click={this.addDigit}/>
        <Button label="*" click={this.setOperation} operation/>

        <Button label="4" click={this.addDigit}/>
        <Button label="5" click={this.addDigit}/>
        <Button label="6" click={this.addDigit}/>
        <Button label="-" click={this.setOperation} operation/>

        <Button label="1" click={this.addDigit}/>
        <Button label="2" click={this.addDigit}/>
        <Button label="3" click={this.addDigit}/>
        <Button label="+" click={this.setOperation} operation/>

        <Button label="0" click={this.addDigit} double/>
        <Button label="." click={this.addDigit}/>
        <Button label="=" click={this.setOperation} operation/>
      </div>
    );
  }

  clearMemory = () => {
    console.log('Limpar');
    this.setState({...initialState});
  };

  setOperation = (operator) => {
    console.log('op:', operator);

    if (this.state.current === 0) {
      this.setState({
        operation: operator,
        current: 1,
        clearDisplay: true,
      });
      return;
    }

    const equal = operator === '=';
    const currentOperation = this.state.operation;

    const values = [...this.state.values];
    values[0] = {
      '+': (a, b) => a + b,
      '-': (a, b) => a - b,
      '*': (a, b) => a * b,
      '/': (a, b) => a / b,
    }[currentOperation](values[0], values[1]);
    values[1] = 0;

    this.setState({
      displayValue: values[0],
      operation: equal ? null : operator,
      current: equal ? 0 : 1,
      clearDisplay: !equal,
      values: values,
    });
  };

  addDigit = (digit) => {
    console.log('dig:', digit);
    if (digit === '.' && this.state.displayValue.includes('.')) {
      return;
    }

    const clearDisplay =
      this.state.displayValue === '0' ||
      this.state.clearDisplay;
    const currentValue = clearDisplay ? '' : this.state.displayValue;
    const displayValue = currentValue + digit;

    this.setState({displayValue, clearDisplay: false});

    if (digit !== '.') {
      const i = this.state.current;
      const newValue = parseFloat(displayValue);
      const values = [...this.state.values];
      values[i] = newValue;
      this.setState({values});
      console.log(values);
    }

  };
};
