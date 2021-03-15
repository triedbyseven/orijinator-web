import React, { useEffect } from 'react';
import { Wrapper } from './style';
import log from '../../utils/console';
import { onLoadAnimate, useBackgroundColorAnimation } from './animation';

interface ContainerProps {
  children: React.ReactNode;
  style: any;
}

const Container: React.FC<ContainerProps> = ({ children, style }): React.ReactElement => {
  const { rangeValue, backgroundColor } = useBackgroundColorAnimation();

  useEffect(() => {
    const animateOptions = {
      delay: 1,
      duration: 2,
      onComplete: () => log.info('🚀 Container background color animation complete.')
    };

    onLoadAnimate(rangeValue, animateOptions);

    return onLoadAnimate(rangeValue, animateOptions).stop;
  }, []);

  return (
    <Wrapper style={{ ...style, backgroundColor }}>
      {children}
    </Wrapper>
  );
};

export default Container;