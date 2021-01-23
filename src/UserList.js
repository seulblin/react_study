import React from 'react';

function User({ user }) {
  return(
    <div>
        <b>{user.username}</b> <span>({user.email})</span>
    </div>
  );
} 

function UserList(){
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


  return(
    <div>
      {
        users.map(
          user => (<User user={user} key={user.id} />)
        )
      }
    </div>
  );
}

export default UserList;