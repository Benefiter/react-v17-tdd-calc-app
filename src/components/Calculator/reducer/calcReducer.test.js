import { calcReducer } from './calcReducer';
import { calcState } from './calcState';
import { renderHook, act } from '@testing-library/react-hooks';
import { useReducer } from 'react';
import { actions } from './actions';

let result;
let dispatch;
let dispatchButton;

beforeEach(() => {
  result = renderHook(() => useReducer(calcReducer, { ...calcState })).result;
  dispatch = result.current[1];
  dispatchButton = button =>
    dispatch({ type: actions.button, payload: button });
});

it('button sequence "1" should set operand in calculator state to 1', () => {
  act(() => {
    dispatchButton('1');
  });

  expect(result.current[0]).toEqual({
    operand: '1',
    operator: '',
    prevOperand: '',
  });
});

it('button sequence "11" should set operand in calculator state to 11', () => {
  act(() => {
    dispatchButton('1');
    dispatchButton('1');
  });

  expect(result.current[0]).toEqual({
    operand: '11',
    operator: '',
    prevOperand: '',
  });
});

it('button sequence "1+" should clear operand, set operator to "+" and set prevOperand to "1 +"', () => {
  act(() => {
    dispatchButton('1');
    dispatchButton('+');
  });

  expect(result.current[0]).toEqual({
    operand: '',
    operator: '+',
    prevOperand: '1 +',
  });
});

it('button sequence "1+2" should set operand to "1", set operator to "+" and set prevOperand to "2"', () => {
  act(() => {
    dispatchButton('1');
    dispatchButton('+');
    dispatchButton('2');
  });

  expect(result.current[0]).toEqual({
    operand: '2',
    operator: '+',
    prevOperand: '1 +',
  });
});

it('button sequence "11+22" should set operand to 22, set operator to "+" and set prevOperand to 11 +', () => {
  act(() => {
    dispatchButton('1');
    dispatchButton('1');
    dispatchButton('+');
    dispatchButton('2');
    dispatchButton('2');
  });

  expect(result.current[0]).toEqual({
    operand: '22',
    operator: '+',
    prevOperand: '11 +',
  });
});

it('button sequence "11+22-" should clear operand, set operator to "-" and set prevOperand to 33 -', () => {
  act(() => {
    dispatchButton('1');
    dispatchButton('1');
    dispatchButton('+');
    dispatchButton('2');
    dispatchButton('2');
    dispatchButton('-');
  });

  expect(result.current[0]).toEqual({
    operand: '',
    operator: '-',
    prevOperand: '33 -',
  });
});

it('button sequence "11+22-+" should clear operand, set operator to "+" and set prevOperand to 33 +', () => {
  act(() => {
    dispatchButton('1');
    dispatchButton('1');
    dispatchButton('+');
    dispatchButton('2');
    dispatchButton('2');
    dispatchButton('-');
    dispatchButton('+');
  });

  expect(result.current[0]).toEqual({
    operand: '',
    operator: '+',
    prevOperand: '33 +',
  });
});

it('button sequence "11+2.2-" should clear operand, set operator to "-" and set prevOperand to 13.2 -', () => {
  act(() => {
    dispatchButton('1');
    dispatchButton('1');
    dispatchButton('+');
    dispatchButton('2');
    dispatchButton('.');
    dispatchButton('2');
    dispatchButton('-');
  });

  expect(result.current[0]).toEqual({
    operand: '',
    operator: '-',
    prevOperand: '13.2 -',
  });
});

it('button sequence "11+2..2-" should clear operand, set operator to "-" and set prevOperand to 13.2 -', () => {
  act(() => {
    dispatchButton('1');
    dispatchButton('1');
    dispatchButton('+');
    dispatchButton('2');
    dispatchButton('.');
    dispatchButton('.');
    dispatchButton('2');
    dispatchButton('-');
  });

  expect(result.current[0]).toEqual({
    operand: '',
    operator: '-',
    prevOperand: '13.2 -',
  });
});

it('button sequence "11+2.2-AC" should clear operand, prevOperand and operator', () => {
  act(() => {
    dispatchButton('1');
    dispatchButton('1');
    dispatchButton('+');
    dispatchButton('2');
    dispatchButton('.');
    dispatchButton('2');
    dispatchButton('-');
    dispatchButton('AC');
  });

  expect(result.current[0]).toEqual({
    operand: '',
    operator: '',
    prevOperand: '',
  });
});

it('button sequence "1=" should ignore = operator', () => {
  act(() => {
    dispatchButton('1');
    dispatchButton('=');
  });

  expect(result.current[0]).toEqual({
    operand: '1',
    operator: '',
    prevOperand: '',
  });
});

it('button sequence "1+1=" should clear operand, and operator and set prevOperand to 1 + ', () => {
  act(() => {
    dispatchButton('1');
    dispatchButton('+');
    dispatchButton('1');
    dispatchButton('=');
  });

  expect(result.current[0]).toEqual({
    operand: '',
    operator: '',
    prevOperand: '2',
  });
});

it('button sequence "11111Del" should set operand to 1111', () => {
  act(() => {
    dispatchButton('1');
    dispatchButton('1');
    dispatchButton('1');
    dispatchButton('1');
    dispatchButton('1');
    dispatchButton('Del');
  });

  expect(result.current[0]).toEqual({
    operand: '1111',
    operator: '',
    prevOperand: '',
  });
});

it('button sequence "11111+DelDelDelDelDelDel" should clear operand', () => {
  act(() => {
    dispatchButton('1');
    dispatchButton('1');
    dispatchButton('1');
    dispatchButton('1');
    dispatchButton('1');
    dispatchButton('Del');
    dispatchButton('Del');
    dispatchButton('Del');
    dispatchButton('Del');
    dispatchButton('Del');
    dispatchButton('Del');
  });

  expect(result.current[0]).toEqual({
    operand: '',
    operator: '',
    prevOperand: '',
  });
});

it('button sequence "3+4+5+6+7+8+9+0=" should clear operand set prevOperand to 42 and clear the operator', () => {
  act(() => {
    dispatchButton('3');
    dispatchButton('+');
    dispatchButton('4');
    dispatchButton('+');
    dispatchButton('5');
    dispatchButton('+');
    dispatchButton('6');
    dispatchButton('+');
    dispatchButton('7');
    dispatchButton('+');
    dispatchButton('8');
    dispatchButton('+');
    dispatchButton('9');
    dispatchButton('+');
    dispatchButton('0');
    dispatchButton('=');
  });

  expect(result.current[0]).toEqual({
    operand: '',
    operator: '',
    prevOperand: '42',
  });
});

it('button sequence "2*3/4=" should clear operand set prevOperand to 1.5 and clear the operator', () => {
  act(() => {
    dispatchButton('2');
    dispatchButton('*');
    dispatchButton('3');
    dispatchButton('/');
    dispatchButton('4');
    dispatchButton('=');
  });

  expect(result.current[0]).toEqual({
    operand: '',
    operator: '',
    prevOperand: '1.5',
  });
});

it('button sequence "2*3/4=DelDel" should clear operand, prevOperand remains at 1.5 and operator remains cleared', () => {
  act(() => {
    dispatchButton('2');
    dispatchButton('*');
    dispatchButton('3');
    dispatchButton('/');
    dispatchButton('4');
    dispatchButton('=');
    dispatchButton('Del');
    dispatchButton('Del');
  });

  expect(result.current[0]).toEqual({
    operand: '',
    operator: '',
    prevOperand: '1.5',
  });
});

it('button sequence "2*4=+6" operand=6, prevOperand is "8 +" and operator is +', () => {
  act(() => {
    dispatchButton('2');
    dispatchButton('*');
    dispatchButton('4');
    dispatchButton('=');
    dispatchButton('+');
    dispatchButton('6');
    dispatchButton('*');
  });

  expect(result.current[0]).toEqual({
    operand: '',
    operator: '*',
    prevOperand: '14 *',
  });
});

it('button sequence "12+3=" operand="", prevOperand is "15" and operator is ""', () => {
  act(() => {
    dispatchButton('1');
    dispatchButton('2');
    dispatchButton('+');
    dispatchButton('3');
    dispatchButton('=');
  });

  expect(result.current[0]).toEqual({
    operand: '',
    operator: '',
    prevOperand: '15',
  });
});

it('button sequence "12+3==" operand="", prevOperand is "15" and operator is ""', () => {
  act(() => {
    dispatchButton('1');
    dispatchButton('2');
    dispatchButton('+');
    dispatchButton('3');
    dispatchButton('=');
    dispatchButton('=');
  });

  expect(result.current[0]).toEqual({
    operand: '',
    operator: '',
    prevOperand: '15',
  });
});

it('button sequence "12+3=.89" operand="", prevOperand is "15" and operator is ""', () => {
  act(() => {
    dispatchButton('1');
    dispatchButton('2');
    dispatchButton('+');
    dispatchButton('3');
    dispatchButton('=');
    dispatchButton('.');
    dispatchButton('8');
    dispatchButton('9');
  });

  expect(result.current[0]).toEqual({
    operand: '',
    operator: '',
    prevOperand: '15',
  });
});

it('button sequence "36*=" operand="", prevOperand is "36" and operator is "*"', () => {
  act(() => {
    dispatchButton('3');
    dispatchButton('6');
    dispatchButton('*');
    dispatchButton('=');
  });

  expect(result.current[0]).toEqual({
    operand: '',
    operator: '*',
    prevOperand: '36 *',
  });
});