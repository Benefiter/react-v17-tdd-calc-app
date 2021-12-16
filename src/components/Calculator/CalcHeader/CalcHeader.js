import './CalcHeader.css'

const CalcHeader = ({ operand, prevOperand }) => {
  return (
    <>
      <div className="calc-header">
        <div id='prevOperand'>{prevOperand}</div>
        <div id='operand'>{operand}</div>
      </div>
    </>
  );
};

export default CalcHeader;
