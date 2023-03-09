import './App.css';
import { useState, useReducer } from 'react';
import Page from './components/Page';
import { ThemeContext } from './context/ThemeContext';
import { UserContext } from './context/UserContext';

// reducer - state를 업데이트하는 역할 (은행 )
// dispatch - state 업데이트를 위한 요구
// action - 요구의 내용

const ACTION_TYPES = {
  deposit: 'deposit',
};

const reducer = (state, action) => {
  console.log('reducer가 일을 합니다.', state, action);
  switch (action.type) {
    case ACTION_TYPES.deposit:
      return state + action.payload;
    case 'withdraw':
      return state - action.payload;
    default:
      return state;
  }
};

function App() {
  const [isDark, setIsDark] = useState(false);
  const [number, setNumber] = useState(0);
  const [money, dispatch] = useReducer(reducer, 0);

  return (
    <UserContext.Provider value={'사용자'}>
      <ThemeContext.Provider value={{ isDark, setIsDark }}>
        <h2>useReducer 은행에 오신 것을 환영합니다.</h2>
        <p>잔고 : {money}원</p>
        <input type='number' value={number} step='1000' onChange={(e) => setNumber(parseInt(e.target.value))} />
        <button
          onClick={() => {
            dispatch({ type: ACTION_TYPES.deposit, payload: number });
          }}
        >
          예금
        </button>
        <button
          onClick={() => {
            dispatch({ type: 'withdraw', payload: number });
          }}
        >
          출금
        </button>
        <Page />
      </ThemeContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
