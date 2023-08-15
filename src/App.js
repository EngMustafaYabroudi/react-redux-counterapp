import './App.css';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const globalState = useSelector((state) => state);
  const handlerCounterValue = (value) => {
    if (value < 1) {
      return 'No Number';
    }
    return value;
  }
  const counterOperation = (type, payload) => {
    dispatch({ type,payload });
  }
  const toggleCounter = () => {
    dispatch({ type: "toggleCounter" });
  }
  return (
    <div className='App'>
      <h1>Hello Redux Basic</h1>
      {
        globalState.showCounter &&
        <>
          <div className='counter'>Counter: {handlerCounterValue(globalState.value)}</div>
          <div>
            <button className='btn' onClick={() => counterOperation("increase", 2)}>increase +</button>
            <button className='btn' onClick={() => counterOperation("decrease", 1)}>decrease -</button>
          </div>
        </>

      }

      <div>
        <button className='btn' onClick={toggleCounter}>Hide / Show Counter Number</button>
      </div>
    </div>
  );
}

export default App;
