import './CalculatorButton.css'

const CalculatorButton = ({ text, click }) => {
  return (
      <div className="calc-button" id={`calcbutton${text}`} onClick={() => click(text)}>
        {text}
      </div>
  );
};

export default CalculatorButton;
