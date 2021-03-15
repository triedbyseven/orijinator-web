import React, { memo, useEffect } from 'react';
import { Title } from './style';
import { animate, MotionValue, useMotionValue, useTransform } from 'framer-motion';
import log from '../../utils/console';

interface PlaybackControls {
  stop: () => void;
}

const Logo = (): React.ReactElement => {
  const rangeValue: MotionValue<number> = useMotionValue<number>(0);
  const range: number[] = [0, 1];
  const colorRange: string[] = ['#FFFFF', '#000000'];
  const color: MotionValue<string> = useTransform(rangeValue, range, colorRange);
  const onLoadAnimate = (): PlaybackControls => animate(rangeValue, 1, {
      delay: 1,
      duration: 2,
      onComplete: () => log.info('🚀 Title color animation complete.'),
  });
  

  useEffect(() => {
    onLoadAnimate();

    return onLoadAnimate().stop;
  });

  return (
    <Title style={{ color }}>
      Orijinator
    </Title>
  );
};



export default memo(Logo);