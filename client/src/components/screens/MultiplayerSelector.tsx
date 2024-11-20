import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { User, addInitialUsers } from '../../redux/appSlice';
import { RootState } from '../../redux/store';
import { socket } from '../../socket/socket';



interface Props {};

const MultiplayerSelector: React.FC<Props> = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    socket.on("receiveConnectedUsers", (users: User[]) => {
      dispatch(addInitialUsers(users))
    })

    // Fetch initial list of connected users
    socket.emit("getConnectedUsers");

    return () => {
      socket.off("receiveConnectedUsers");
    };


  }, [socket]);
  const connectedUsers = useSelector((state: RootState) => state.app.connectedUsers);

  const handleUserClick = (user: User) => {
  };

  return (
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
  );
};

export default MultiplayerSelector;
