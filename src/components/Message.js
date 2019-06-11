import React from 'react';
import '../App.css';
import Timestamp from './Timestamp';
import PropTypes from 'prop-types';

const Message = (props) => {

  return(
    <article className="">
      <p>{props.sender}</p>
      <p>{props.body}</p>
      <p><Timestamp time={props.time} /></p>
    </article>
  )
};

// NEED TO ADD PROPTYPES AND DEFAULT PROPS
Message.propTypes = {
  // fullName: PropTypes.string.isRequired,
  // email: PropTypes.string,
}

Message.defaultProps = {
  // email: 'no email on file',
}

export default Message
