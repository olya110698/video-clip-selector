import React, { useState } from 'react';
import { InputContainer, TitleContainer, TitleText, Icon, InputField, Button } from './styles';

export const VideoInput = ({ onVideoLinkSubmit }) => {
  const [videoLink, setVideoLink] = useState('https://www.youtube.com/watch?v=f13y9afopgY');

  const handleSubmit = () => {
    onVideoLinkSubmit(videoLink);
  };

  return (
    <InputContainer>
      <TitleContainer>
        <TitleText>Add video link</TitleText>
        <Icon>ⓘ</Icon>
      </TitleContainer>
      <InputField
        type="text"
        value={videoLink}
        onChange={(e) => setVideoLink(e.target.value)}
      />
      <Button onClick={handleSubmit}>Proceed →</Button>
    </InputContainer>
  );
};
