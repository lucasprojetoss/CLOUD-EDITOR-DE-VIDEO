import React from 'react';
import {Composition} from 'remotion';
import {Video} from './Video';
import {FPS, HEIGHT, TOTAL_FRAMES, WIDTH} from './project';

export const RemotionRoot: React.FC = () => {
  return (
    <Composition
      id="ComoWazeDetectaTransito"
      component={Video}
      width={WIDTH}
      height={HEIGHT}
      fps={FPS}
      durationInFrames={TOTAL_FRAMES}
    />
  );
};
