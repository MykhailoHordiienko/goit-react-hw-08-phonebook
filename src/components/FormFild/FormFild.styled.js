import { Form } from 'formik';
import styled from 'styled-components';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
`;

export const Label = styled.label`
  display: flex;
  gap: 16px;
`;

export const Button = styled.button`
  width: 200px;
  height: 50px;
  padding: 10px;
  :hover,
  :focus {
    background-color: blue;
    color: white;
  }
`;
