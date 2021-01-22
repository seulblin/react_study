import React from 'react';

function Hello({color, name, isSpecial}) {
  return (
    <div style={{
      color
    }}>
      {isSpecial && <b>*</b>}
      안녕하세요 {name}
    </div> //세미콜론은 있어도 없어도 차이가 없다.
  )
}


Hello.defaultProps = {
  name:'이름없음'
};

export default Hello;