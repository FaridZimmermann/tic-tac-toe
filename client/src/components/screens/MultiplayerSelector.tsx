import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { User } from '../../redux/appSlice';
import { RootState } from '../../redux/store';



interface Props {
}

const MultiplayerSelector: React.FC<Props> = () => {
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
