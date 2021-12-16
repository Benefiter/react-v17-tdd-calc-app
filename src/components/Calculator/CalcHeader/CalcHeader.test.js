import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import CalcHeader from './CalcHeader';

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('renders operand to be blank with no prop supplied', () => {
  const operandValue = '';
  act(() => {
    render(<CalcHeader />, container);
  });

  const operand = document.querySelector('[id=operand]');

  expect(operand.innerHTML).toBe(operandValue);
});

it('renders prevOperand to be blank with no prop supplied', () => {
  const prevOperandValue = '';
  act(() => {
    render(<CalcHeader />, container);
  });

  const prevOperand = document.querySelector('[id=prevOperand]');

  expect(prevOperand.innerHTML).toBe(prevOperandValue);
});

it('renders specified operand', () => {
  const operandValue = '10';
  act(() => {
    render(<CalcHeader operand={operandValue} />, container);
  });

  const operand = document.querySelector('[id=operand]');

  expect(operand.innerHTML).toBe(operandValue);
});

it('renders specified prevOperand', () => {
  const prevOperandValue = '20';
  act(() => {
    render(<CalcHeader prevOperand={prevOperandValue} />, container);
  });

  const prevOperand = document.querySelector('[id=prevOperand]');

  expect(prevOperand.innerHTML).toBe(prevOperandValue);
});
