import styled from 'styled-components';

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  width: 100%;
  max-width: 90%;
  margin: 0 auto;
  height: 100vh;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  
  @media (max-width: 600px) {
    margin-bottom: 20px;
  }
`; 

export const TitleText = styled.h2`
  font-size: 18px;
  color: #333;
  margin-right: 4px;

  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

export const Icon = styled.span`
  font-size: 14px;
  margin-left: 4px;
  cursor: pointer;
`;

export const InputField = styled.input`
  width: 100%;
  max-width: 50%;
  padding: 12px 16px;
  font-size: 16px;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  outline: none;
  margin-bottom: 30px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

  @media (max-width: 600px) {
    padding: 10px 14px;
    font-size: 14px;
    margin-bottom: 20px;
  }
`;

export const Button = styled.button`
  width: 100%;
  max-width: 300px;
  padding: 12px 20px;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 25px;
  background: linear-gradient(to right, #8b00ff, #00e1ff);
  color: white;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: linear-gradient(to right, #00e1ff, #8b00ff);
  }

  @media (max-width: 600px) {
    max-width: 160px;
    font-size: 14px;
    padding: 10px 16px;
  }
`;
