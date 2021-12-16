import Operand from '../Operand/Operand';
import './CalcHeader.css';

const CalcHeader = ({ operand, prevOperand }) => {
  return (
    <>
      <div className='calc-header'>
        <div className='prevoperand'>
          <Operand value={prevOperand} />
        </div>
        <div className='operand'>
          <Operand value={operand} />
        </div>
      </div>
    </>
  );
};

export default CalcHeader;
