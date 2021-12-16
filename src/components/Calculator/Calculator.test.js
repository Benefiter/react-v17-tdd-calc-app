import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import Calculator from './Calculator';

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

it('renders CalcHeader', () => {
  act(() => {
    render(<Calculator />, container);
  });
  const prevOperand = document.querySelector('[id=prevOperand]');
  const operand = document.querySelector('[id=operand]');

  expect(prevOperand).toBeTruthy();
  expect(operand).toBeTruthy();
});

it('renders CalcHeader', () => {
  act(() => {
    render(<Calculator />, container);
  });
  const prevOperand = document.querySelector('[id=prevOperand]');
  const operand = document.querySelector('[id=operand]');

  expect(prevOperand).toBeTruthy();
  expect(operand).toBeTruthy();
});

it('renders CalcHeader', () => {
  act(() => {
    render(<Calculator />, container);
  });
  const prevOperand = document.querySelector('[id=prevOperand]');
  const operand = document.querySelector('[id=operand]');

  expect(prevOperand).toBeTruthy();
  expect(operand).toBeTruthy();
});

// it('renders AC calculator button', () => {
//   act(() => {
//     render(<Calculator />, container);
//   });
//   const calcButton = document.querySelector('[id=calcbuttonAC]');

//   expect(calcButton).toBeTruthy();
// });
