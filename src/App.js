import React, {useRef, useState} from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';

function App() {
  const [inputs, setInputs] = useState({
    username:'',
    email: '',
  });
  //1. username 과 email 추출하기
  const{ username, email} = inputs;
  //2. onChange는 이벤트를 가져와서 name과 value를 e.target에서 가져오기
  const onChange = e => {
    const { name, value } = e.target;
    //3. setInputs 불러오기
    setInputs({
      //4. ...inputs라고 해서 기존의 배열을 불러온다.
      ...inputs,
      //5. name 값을 value로 덮어 씌운다.
      [name]: value
    });
  };

  const [users, setUsers] = useState([
    {
     id: 1,
     username: '이슬빈',
     email: 'userone@example.com',
     active: true,
    },
    {
      id: 2,
      username: '스루빙',
      email: 'usertwo@example.com',
      active: false,
     },
     {
      id: 3,
      username: '홍시삥',
      email: 'userthree@example.com',
      active: false,
     }
  ]);

  const nextId = useRef(4);
  const onCreate = () => {
    const user = {
      id: nextId.current,
      ...inputs,
    }
    setUsers(users.concat(user));

    //버튼이 클릭 될 때 inputs에 있는 값 지우기
    setInputs({
      username: '',
      email: ''
    });

    console.log(nextId.current); ///nextId의 값을 호출하고 싶을 때
    nextId.current += 1; // 값이 바뀌고 싶을 때.
  };

  const onRemove = id => {
    setUsers(users.filter(user => user.id !== id));
  };

  const onToggle = id => {
    setUsers(users.map(
      user => user.id === id
      ? {...user, active: !user.active}
      : user
    ));
  };


  return (
    <>
    <CreateUser 
      username={username} 
      email={email}
      onChange={onChange}
      onCreate={onCreate}
     />
    <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
    </>
  );
}

export default App;
