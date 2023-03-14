import styled from '@emotion/styled';

const Section = styled.section`
  padding-top: 36px;
  padding-bottom: 36px;
  text-align: center;
`;

const Container = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  margin-left: auto;
  margin-right: auto;
  width: 1280px;
`;

const Form = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin: 0 auto;
  margin-bottom: 36px;
  width: 510px;
  border-radius: 4px;
`;
const Field = styled.div`
  position: relative;
`;

const Label = styled.label`
  position: absolute;
  top: 50%;
  left: 16px;
  transform: translateY(-50%);
  padding: 0 4px;
  font-size: 16px;
  color: rgb(255, 107, 8);
  pointer-events: none;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  Input:focus ~ &,
  Input:not(:placeholder-shown) ~ & {
        transform: translateY(-50px) scale(0.9);
    color: rgb(255, 107, 8);
      }

  Input:not(:focus) ~ & {
    color: rgb(255, 107, 8);
  }
`;

const Input = styled.input`
  width: 100%;
  height: 50px;
  padding: 8px 16px;
  padding-right: 42px;
  font-size: 16px;
  letter-spacing: 1.4px;
  color: rgb(255, 107, 8);
  background-color: transparent;
  border: 1px solid rgb(255, 107, 8);
  border-radius: 10px;
  outline: none;
  transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:focus {
    border-color: rgb(255, 107, 8);
       box-shadow: 0 8px 8px  rgb(255, 107, 8);
  }

  &:not(:focus) {
    color: rgb(255, 107, 8);
  }
`;

const Button = styled.button`
  position: absolute;
  top: 30%;
  right: 16px;
  padding: 0;
  color:  rgb(255, 107, 8);
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: #f6fa18;
  }

  animation: button 3000ms infinite;

  @keyframes button {
    0% {
      transform: scale(1.5);
    }
    50% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.5);
    }
  }
`;

export { Section, Container, Form, Field, Label, Input, Button };
