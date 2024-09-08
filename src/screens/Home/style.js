import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ContainerForm = styled.div`
  width: 100%;
  padding: 10px;
  background-color: #5881b2;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.input`
  width: 100%;
`;
export const ButtonSubmit = styled.button`
  background-color: #92c456;
  color: #ffffff;
  border: #ffffff;
  padding: 4px;
  margin-left: 10px;
  cursor: pointer;
  border-radius: 3px;
  &:hover {
    background-color: #05315a;
  }
`;
export const Form = styled.form`
  display: grid;
  gap: 10px;
  grid-template-columns: 10fr 2fr;
  width: 100%;
`;

export const ContainerTasks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #e7e7e7;
  margin-top: 5%;
  width: 70%;
  padding: 10px;
`;
export const ContainerTaskActions = styled.div`
  width: 100%;
  margin-top: 10px;
  padding: 2px 2px 2px 2px;
  display: grid;
  grid-template-columns: 10fr 2fr 2fr;
  background-color: #2c587c;

`;
export const Span = styled.span`
  padding: 10px 10px 10px 10px;
  border-radius: 10px;
  color: white;
`;

export const ButtonRemover = styled.button`
  margin-left: 20px;
  background-color: red;
  color: white;
  border-color: white;
  border: 0px;
  padding: 10px;
  max-height: 50px;
  border-radius: 6px;
  cursor: pointer;
  &:hover {
    background-color: #05315a;
  }
`;

export const ButtonFinish = styled.button`
  margin-left: 20px;
  background-color: #92c456;
  color: white;
  border-color: white;
  border: 0px;
  padding: 10px;
  max-height: 50px;
  border-radius: 6px;
  cursor: pointer;
  &:hover {
    background-color: #05315a;
  }
`;
