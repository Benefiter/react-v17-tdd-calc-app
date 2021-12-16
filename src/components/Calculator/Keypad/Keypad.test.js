import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import Keypad from './Keypad';

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

const testCalcButton = text => {
  act(() => {
    render(<Keypad />, container);
  });
  const calcButton = document.querySelector(`[id="calcbutton${text}"]`);

  expect(calcButton).toBeTruthy();
};

it('renders AC calculator button', () => {
  testCalcButton('AC');
});

it('renders Del calculator button', () => {
    testCalcButton('Del');
});

it('renders / calculator button', () => {
    testCalcButton('/');
});

it('renders 1 calculator button', () => {
    testCalcButton('1');
});

it('renders 2 calculator button', () => {
    testCalcButton('2');
});

it('renders 3 calculator button', () => {
    testCalcButton('3');
});

it('renders * calculator button', () => {
    testCalcButton('*');
});

it('renders 4 calculator button', () => {
    testCalcButton('4');
});

it('renders 5 calculator button', () => {
    testCalcButton('5');
});

it('renders 6 calculator button', () => {
    testCalcButton('6');
});

it('renders + calculator button', () => {
    testCalcButton('+');
});

it('renders 7 calculator button', () => {
    testCalcButton('7');
});

it('renders 8 calculator button', () => {
    testCalcButton('8');
});

it('renders 9 calculator button', () => {
    testCalcButton('9');
});

it('renders - calculator button', () => {
    testCalcButton('-');
});

it('renders . calculator button', () => {
    testCalcButton('.');
});

it('renders 0 calculator button', () => {
    testCalcButton('0');
});

it('renders = calculator button', () => {
    testCalcButton('=');
});

