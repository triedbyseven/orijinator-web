import React, { memo, useEffect, useState } from 'react';
import { NavContainer, MarkerTop, MarkerBottom, PointerContainer, Svg } from './style';
import { motion, useAnimation } from 'framer-motion';
import log from '../../utils/console';
import { useNavAnimations } from './animate';

const Nav = (): React.ReactElement => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [{ animateTopBar, animateBottomBar }, { animateOnLoad, animateNav }] = useNavAnimations();
  const controls = useAnimation();


  const navHandler = () => setIsOpen(prevState => !prevState);

  const runAnimations = async (): Promise<void> => {
    await controls.start({
      pathLength: 0.8,
      transition: {
        delay: 3
      }
    });

    console.log('animation finished!')
  };


  useEffect(() => {
    // runAnimations();
    // animateOnLoad(setLoading);
  }, []);

  useEffect(() => {
    // if(!loading) animateNav(isOpen);
  }, [isOpen]);
  
  // return (
  //   <NavContainer>
  //     <PointerContainer disabled={loading} onClick={navHandler}>
  //       <MarkerTop
  //         animate={animateTopBar}
  //       />
  //       <MarkerBottom 
  //         animate={animateBottomBar}
  //       />
  //     </PointerContainer>
  //   </NavContainer>
  // );

  const variants = {
    initial: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 3,
        duration: 2,
        ease: 'easeInOut'
      }
    }
  }

  const pathVariants = {
    initial: {
      pathLength: 0
    },
    visible: {
      pathLength: 0,
      transition: {
        delay: 3,
        duration: 10,
        ease: 'easeInOut'
      }
    }
  }

  return (
    <NavContainer>
      <PointerContainer disabled={loading} onClick={navHandler}>
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          width="66"
          height="44"
          viewBox="0 0 66 44"
          style={{
            // stroke: '#0ccfff',
            // strokeWidth: 1
            overflow: 'visible'
          }}
        >
          <motion.path
            d="M0 18H66V26H0z"
            style={{
              // stroke: '#0ccfff',
              // strokeWidth: 1
            }}
            initial={{ 
              d: "M0 18H00V26H0z",
              // pathLength: 0, 
              // pathOffset: 1,
              // strokeWidth: 1, 
              strokeDashoffset: 0, 
              strokeDasharray: 0 }}
            animate={{ 
              d: "M0 18H66V26H0z",
              // pathLength: 1, 
              // pathOffset: 0,
              // strokeWidth: 1, 
              strokeDasharray: 0,
              strokeDashoffset: 0,
              transition: {
                delay: 3,
                duration: 2,
                bounce: 0.1,
                stiffness: 65,
                // velocity: 2,
                type: 'spring'
              }
             }}
            // transition={{ duration: 10, delay: 3, type: 'spring',bounce: 20000,velocity: 1000 }}
          />
        </motion.svg>
      </PointerContainer>
    </NavContainer>
  );
};

export default memo(Nav);