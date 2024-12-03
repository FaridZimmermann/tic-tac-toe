import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { User, addInitialUsers } from '../../redux/appSlice';
import { RootState } from '../../redux/store';
import { socket } from '../../socket/socket';
import UserNameSelector from './UserNameSelector';


interface Props {};

const MultiplayerSelector: React.FC<Props> = () => {
  const dispatch = useDispatch();
  const connectedUsers = useSelector((state: RootState) => state.app.connectedUsers);
  const username = useSelector((state: RootState) => state.app.username);



  useEffect(() => {
    socket.on("receiveConnectedUsers", (users: User[]) => {
      dispatch(addInitialUsers(users))
    })

    // Fetch initial list of connected users
    console.log(socket)
    socket.emit("getConnectedUsers");

    return () => {
      socket.off("receiveConnectedUsers");
    };


  }, [socket]);

  const handleUserClick = (user: User) => {
  };

  return (
    <>
    {username.length ? 
    <div>
      <h2>Connected Users:</h2>
      <ul>
        {connectedUsers.map((user) => (
          <li key={user.id} onClick={() => handleUserClick(user)}>
            {user.name}
          </li>
        ))}
      </ul>
    </div>

    :     <UserNameSelector />}
    </>
  );
};

export default MultiplayerSelector;
