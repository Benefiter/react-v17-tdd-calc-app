const CalculatorButton = ({ text, click }) => {
  return (
      <div id={`calcbutton${text}`} onClick={() => click(text)}>
        {text}
      </div>
  );
};

export default CalculatorButton;
