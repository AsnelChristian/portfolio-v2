import styled from 'styled-components/macro';
import { css } from 'styled-components';

export const Container = styled.div`
  grid-column: center-start/center-end;
  margin: 0 8rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 12rem;
  margin-bottom: 12rem;
`;
export const FormContainer = styled.div`
  width: 100%;
  position: relative;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  border-radius: 3rem;
  overflow: hidden;
  background: white;
`;

export const Form = styled.form`
  grid-column: 1/7;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
`;

export const Map = styled.div`
  grid-column: 7/-1;
  width: 100%;
  height: 100%;
`;

export const FormGroup = styled.div`
  width: 100%;
  padding: 1rem 1rem 1rem 0;
  text-align: start;
`;

const textField = css`
  resize: none;
  border-radius: 4px;
  padding: 1rem;
  font-size: 1.4rem;
  width: 100%;
  background-color: rgba(253, 245, 239, 0.6);
  outline: none;
  border: 0.2rem solid transparent;
  border-bottom-color: rgba(${(props) => props.theme.colors.ternary2}, 0.4);
  font-family: inherit;

  &:focus {
    outline: none;
    border-bottom-color: ${(props) => props.theme.colors.black};
    box-shadow: 0 1rem 2rem rgba(${(props) => props.theme.colors.black}, 0.1);
  }
  &:focus:invalid {
    border-bottom-color: ${(props) => props.theme.colors.secondary};
  }

  &:placeholder-shown + label {
    opacity: 0;
    visibility: hidden;
    transform: translateY(-4rem);
  }
`;
export const Input = styled.input`
  ${textField}
`;

export const TextArea = styled.textarea`
  ${textField}
`;

export const Label = styled.label`
  font-size: 1.2rem;
  font-weight: 700;
  margin-left: 1rem;
  margin-top: 0.7rem;
  display: block;
  color: ${(props) => props.theme.colors.black};
  transition: all 0.2s ease-in-out;
`;
