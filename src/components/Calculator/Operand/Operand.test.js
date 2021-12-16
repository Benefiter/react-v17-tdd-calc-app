import React  from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Operand from "./Operand";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders with assigned value", () => {
    const value = '10'
  act(() => {
    render(<Operand value={value}/>, container);
  });
  expect(container.textContent).toBe(value);
});

