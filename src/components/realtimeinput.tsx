import React, { ChangeEvent } from 'react';

interface RealtimeinputProps {
  onInputChange: (value: string) => void;
}

export const Realtimeinput: React.FC<RealtimeinputProps> = ({ onInputChange }) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    onInputChange(value);
  };

  return <input type="text" onChange={handleChange} />;
};
