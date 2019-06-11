import React from 'react';
import '../App.css';
import Message from './Message';
import PropTypes from 'prop-types';

const ChatLog = (props) => {
  const messageComponents = props.allMessages.map((messageFromArray, i) => {
      return (
        <Message
        key={i}
        sender={messageFromArray.sender}
        body={messageFromArray.body}
        time={messageFromArray.timeStamp} />);
  });

  return (
    <section className="">{messageComponents}</section>
  )
};

// NEED TO ADD PROPTYPES AND DEFAULT PROPS
ChatLog.propTypes = {
  // fullName: PropTypes.string.isRequired,
  // email: PropTypes.string,
}

ChatLog.defaultProps = {
  // email: 'no email on file',
}

export default ChatLog;
