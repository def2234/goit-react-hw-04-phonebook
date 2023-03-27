import styled from 'styled-components';

export const Section = -styled.section`
  padding: 0 20px;
`;

export const Form = styled.form`
  max-width: 350px;
  max-height: 400px;
`;

export const Btn = styled.button`
  display: inline-block;
  border-radius: 3px;
  border: none;
  outline: 1px solid;
  cursor: pointer;
  background-color: #f7fafa;
  &:hover {
    background-color: #ddfcd2;
  }
  &:focus {
    background-color: #c0f3fa;
  }
`;

export const Label = styled.label`
  display: block;

  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;

export const P = styled.p`
  margin: 0;
  &:not(:last-child) {
    margin-bottom: 5px;
  }
`;

export const Input = styled.input`
  &:focus {
    border: 3px solid #4ce8fc;
    box-shadow: 1px 1px 2px 0 #4ce8fc;
  }
`;
