import React, { useState, useRef, useEffect } from 'react';
import ReactPlayer from 'react-player';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { formatTime } from '../../utils/timeUtils';
import {
  PlayerContainer,
  VideoWrapper,
  ControlPanel,
  ButtonContainer,
  ContinueButton,
  LoadingContainer,
  Spinner,
  SliderContainer,
  TimeLabel,
  PlayPauseButton,
  TopControlsContainer,
  MuteButton,
  TrimButton,
  PlayIcon,
  PauseIcon
} from './styles';

export const VideoPlayer = ({ videoUrl }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [duration, setDuration] = useState(0);
  const [range, setRange] = useState([0, 15]);
  const playerRef = useRef(null);

  useEffect(() => {
    if (playerRef.current) {
      const interval = setInterval(() => {
        const currentTime = playerRef.current.getCurrentTime();
        if (currentTime > range[1]) {
          playerRef.current.seekTo(range[0], 'seconds');
        }
      }, 500);

      return () => clearInterval(interval);
    }
  }, [range]);

  const handleSliderChange = (value) => {
    setRange(value);
    playerRef.current.seekTo(value[0], 'seconds');
  };

  const handlePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  const handleMute = () => {
    setIsMuted((prev) => !prev);
  };

  const handleContinue = () => {
    const segmentLength = range[1] - range[0];
    if (segmentLength > 15) {
      alert("Ошибка: Фрагмент должен быть не более 15 секунд.");
    } else {
      alert(`Фрагмент выбран: от ${formatTime(range[0])} до ${formatTime(range[1])}`);
    }
  }; 

  const handleTrim = () => {
    const segmentLength = range[1] - range[0];
    if (segmentLength > 15) {
      setRange([range[0], range[0] + 15]);
      playerRef.current.seekTo(range[0], 'seconds');
    }
  };

  const handleError = () => {
    setIsLoading(false);
    alert("Ошибка загрузки видео. Пожалуйста, проверьте ссылку.");
  };

  return (
    <PlayerContainer>
      <VideoWrapper>
        {isLoading && (
          <LoadingContainer>
            <Spinner />
          </LoadingContainer>
        )}
        <ReactPlayer
          ref={playerRef}
          url={videoUrl}
          playing={isPlaying}
          muted={isMuted}
          controls={false}
          width="100%"
          height="100%"
          onReady={() => setIsLoading(false)}
          onDuration={(d) => setDuration(d)}
          onError={handleError}
          style={{ visibility: isLoading ? 'hidden' : 'visible' }}
        />
      </VideoWrapper>
      <ControlPanel>
        <TopControlsContainer>
          <MuteButton onClick={handleMute}>
            {isMuted ? '🔇' : '🔊'}
          </MuteButton>
          <PlayPauseButton onClick={handlePlayPause}>
            {isPlaying ? <PauseIcon /> : <PlayIcon />}
          </PlayPauseButton>
          <TrimButton onClick={handleTrim}>✂️</TrimButton>
        </TopControlsContainer>
        <SliderContainer>
          <TimeLabel>{formatTime(range[0])}</TimeLabel>
          <Slider
            range
            min={0}
            max={duration}
            value={range}
            onChange={handleSliderChange}
            allowCross={false}
            trackStyle={[{ backgroundColor: '#8b00ff' }]}
            handleStyle={[{ backgroundColor: '#8b00ff' }, { backgroundColor: '#8b00ff' }]}
          />
          <TimeLabel>{formatTime(range[1])}</TimeLabel>
        </SliderContainer>
        <ButtonContainer>
          {/* Placeholder for "Change Video" button, to be added later */}
          <div></div> 
          <ContinueButton onClick={handleContinue}>Continue</ContinueButton>
        </ButtonContainer>
      </ControlPanel>
    </PlayerContainer>
  );
};
