import React, { useState } from 'react';
import { io } from 'socket.io-client';
import { useDispatch, useSelector } from 'react-redux';
import {setUserName} from "../../redux/appSlice";

interface UserNameSelectorProps {}

const UserNameSelector: React.FC<UserNameSelectorProps> = () => {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();
  
  const socket = io('http://localhost:3001');

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handleUsernameSubmit = () => {
    socket.emit('setUsername', username);
    dispatch(setUserName(username));
  };

  return (
    <div>
      <input
        type="text"
        value={username}
        onChange={handleUsernameChange}
        placeholder="Enter your username"
      />
      <button onClick={handleUsernameSubmit}>Submit</button>
    </div>
  );
};

export default UserNameSelector;
