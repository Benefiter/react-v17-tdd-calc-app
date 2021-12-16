import { actions } from './actions';

export const calcReducer = (state, action) => {
  switch (action.type) {
    case actions.button:
      return handleButton(state, action);
  }

  return state;
};

const handleButton = (state, action) => {
  const { operator, operand, prevOperand } = state;

  switch (action.payload) {
    case 'AC':
      return {
        ...state,
        operator: '',
        operand: '',
        prevOperand: '',
      };
    case 'Del':
      if (operand !== '') {
        return {
          ...state,
          operand: operand.slice(0, operand.length - 1),
        };
      } else {
        return {
          ...state,
          operator: '',
        };
      }
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
    case '0':
    case '.':
      return {
        ...state,
        operand:
          action.payload === '.' && state.operand.includes(action.payload)
            ? state.operand
            : `${state.operand}${action.payload}`,
      };
    case '+':
    case '-':
    case '*':
    case '/':
    case '=': {
      if (action.payload === '=' && operand != '' && prevOperand === '') {
        return state;
      }
      

      if (operator != '' && operand != '' && prevOperand != '') {
        const newState = { ...execute(state) };
        return {
          ...newState,
          operator: action.payload === '=' ? '' : action.payload,
          prevOperand:
            action.payload === '='
              ? `${newState.prevOperand}`
              : `${newState.prevOperand} ${action.payload}`,
        };
      }

      if (operator != '' && operand === '' && prevOperand != '') {
        return {
          ...state,
          operator: action.payload === '=' ? '' : action.payload,
          prevOperand: `${getPrevOperand(prevOperand)} ${action.payload}`,
        };
      }

      const updatedState = { ...state };
      updatedState.prevOperand = `${operand} ${action.payload}`;
      updatedState.operator = action.payload;
      updatedState.operand = '';
      return {
        ...updatedState,
      };
    }
  }
};

const getPrevOperand = prevOperand => {
  if (prevOperand === '') return '';

  return Number(prevOperand.slice(0, prevOperand.length - 2));
};

const execute = state => {
  const operand = Number(state.operand);
  const prevOperand = Number(getPrevOperand(state.prevOperand));
  switch (state.operator) {
    case '+':
      return {
        ...state,
        operand: '',
        prevOperand: `${operand + prevOperand}`,
      };
    case '-':
      return {
        ...state,
        operand: '',
        prevOperand: `${prevOperand - operand}`,
      };
    case '*':
      return {
        ...state,
        operand: '',
        prevOperand: `${operand * prevOperand}`,
      };
    case '/':
      return {
        ...state,
        operand: '',
        prevOperand: `${prevOperand / operand}`,
      };
  }
  return state;
};
