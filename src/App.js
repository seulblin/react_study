import React, {useRef} from 'react';
import UserList from './UserList';

function App() {
  const users = [
    {
     id: 1,
     username: '이슬빈',
     email: 'userone@example.com' 
    },
    {
      id: 2,
      username: '스루빙',
      email: 'usertwo@example.com' 
     },
     {
      id: 3,
      username: '홍시삥',
      email: 'userthree@example.com' 
     }
  ];

  const nextId = useRef(4);
  const onCreate = () => {

    console.log(nextId.current); ///nextId의 값을 호출하고 싶을 때
    nextId.current += 1; // 값이 바뀌고 싶을 때.
  }

  return (
   <UserList users={users} />
  );
}

export default App;
