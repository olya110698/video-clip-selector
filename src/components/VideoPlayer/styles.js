import styled, { keyframes } from 'styled-components';

export const PlayerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const VideoWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 70vh;
`;

export const LoadingContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Spinner = styled.div`
  border: 6px solid #f3f3f3;
  border-top: 6px solid #0000ff;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: ${spin} 1s linear infinite;
`;

export const ControlPanel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  height: 30vh;
  padding: 50px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background-color: #ffffff;
  align-items: center;
  box-shadow: 0 -4px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 600px) {
    padding: 10px;
  }
`;

export const TopControlsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  margin-bottom: 15px;
`;

const IconButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 600px) {
    font-size: 20px;
  }
`;

export const MuteButton = styled(IconButton)``;

export const PlayPauseButton = styled(IconButton)`
  width: 64px;
  height: 64px;

  @media (max-width: 600px) {
    width: 50px;
    height: 50px;
  }
`;

export const PlayIcon = styled.div`
  width: 0;
  height: 0;
  border-left: 22px solid #333;
  border-top: 14px solid transparent;
  border-bottom: 14px solid transparent;

  @media (max-width: 600px) {
    border-left: 15px solid #333;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
  }
`;

export const PauseIcon = styled.div`
  display: flex;
  gap: 8px;

  &::before,
  &::after {
    content: "";
    width: 8px;
    height: 28px;
    background-color: #333;
  }

  @media (max-width: 600px) {
    gap: 4px;

    &::before,
    &::after {
      width: 4px;
      height: 16px;
    }
  }
`;

export const TrimButton = styled(IconButton)``;

export const SliderContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
`;

export const TimeLabel = styled.span`
  font-size: 14px;
  color: #333;
  width: 40px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  width: 100%;
`;

const GradientButton = styled.button`
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

export const ContinueButton = styled(GradientButton)``;