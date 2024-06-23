import React from 'react';

const Message = ({ message }) => {
  return (
    <div className="message">
      <strong>{message.user}</strong>: {message.text}
    </div>
  );
};

export default Message;
