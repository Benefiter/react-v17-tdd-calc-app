const CalcHeader = ({ operand, prevOperand }) => {
  return (
    <>
      <div id='prevOperand'>{prevOperand}</div>
      <div id='operand'>{operand}</div>
    </>
  );
};

export default CalcHeader;
