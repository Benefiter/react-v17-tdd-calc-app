import { useHistory } from 'react-router-dom';

const TBD = () => {
  const history = useHistory();

  return (
    <div className='tbd'>
      <h1>To be implemented</h1>
        <button className="border border-primary p-2 rounded-3" onClick={() => history.goBack()}>Go Back</button>
    </div>
  );
};

export default TBD;
