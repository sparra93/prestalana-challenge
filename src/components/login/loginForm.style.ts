import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  padding: 20px;
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  text-align: center;
`;

export const Logo = styled.img`
  width: 100px;
  margin-bottom: 20px;
`;

export const Label = styled.label`
  width: 75%;
  text-align: left;
  margin-bottom: 5px;
  font-weight: bold;
  font-size: 14px;
`;

export const Input = styled.input`
  width: 70%;
  margin-bottom: 15px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const Button = styled.button`
  width: 50%;
  padding: 10px;
  font-size: 16px;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 9px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
