import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import CalculatorButton from './CalculatorButton';

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

it('renders with assigned button text', () => {
  act(() => {
    render(<CalculatorButton text={'+'} />, container);
  });
  expect(container.textContent).toBe('+');
});

it('Calls click handler with text value', () => {
  const clickHandler = jest.fn();
  const text = '+';
  act(() => {
    render(<CalculatorButton text={text} click={clickHandler} />, container);
  });
  const calcButton = document.querySelector('[id="calcbutton+"]');

  act(() => {
    calcButton.dispatchEvent(new MouseEvent('click', { bubbles: true }));
  });

  expect(clickHandler).toHaveBeenCalledWith(text);
});
