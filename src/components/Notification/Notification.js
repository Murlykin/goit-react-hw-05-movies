import PropTypes from 'prop-types';
import styled from '@emotion/styled';

export const Notification = ({ message }) => {
  return <Message>{message}</Message>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

const Message = styled.p`
  color: #ff0000;
  font-weight: 700;
`;
