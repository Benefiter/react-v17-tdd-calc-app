import React from 'react';
import CalcHeader from './CalcHeader/CalcHeader';
import './Calculator.css';
import CalculatorButton from './CalculatorButton.js/CalculatorButton';
import { CalculatorButtonContext } from './CalculatorButton.js/models/calculatorButtons';
import { calcReducer } from './reducer/calcReducer';
import { calcState } from './reducer/calcState';
import { actions } from './reducer/actions';

const Calculator = () => {
  const [state, dispatch] = React.useReducer(calcReducer, calcState)
  const {operand, prevOperand} = state;
  return (
    <>
      <h1 className='title'>Calculator</h1>
      <div className='calc-container'>
        <CalcHeader operand={operand} prevOperand={prevOperand}/>
        {CalculatorButtonContext.map(b => (
          <div key={b.buttonName} className={`${b.className} center-text` }>
            <CalculatorButton text={b.buttonName} click={button => dispatch({ type: actions.button, payload: button })}/>
          </div>
        ))}
        </div>
    </>
  );
};

export default Calculator;
