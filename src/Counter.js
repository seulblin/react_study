import React, { useState } from 'react';

function Counter () {
  const [number, setNumber] = useState(0); //현재 '0'이 기본값이고 '5'로 변경되면 '5'가 기본값이 된다.
  //number: 번호는 0으로 하겠다. setNumber: 현재 숫자(상태)를 업데이트 하겠다.

  const onIncrease = () => { //화살표 함수 : function키워드 대신 함수를 구현
    setNumber(prevNumber => prevNumber + 1); //함수형 업데이트 (최적화와 관련) 'prevNumber'는 다른 이름으로 지어도 됨.
  }
  const onDecrease = () => {
    setNumber(prevNumber => prevNumber - 1);
  }

  return(
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  )
}

export default Counter;