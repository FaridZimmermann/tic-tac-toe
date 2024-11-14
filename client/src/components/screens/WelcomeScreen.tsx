import React from 'react';

interface WelcomeScreenProps {
  title?: string;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ title }) => {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
};

export default WelcomeScreen;
