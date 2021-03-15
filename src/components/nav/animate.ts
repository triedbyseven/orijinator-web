
import React from 'react';
import { AnimationControls, useAnimation } from 'framer-motion';
import log from '../../utils/console';

interface UseNavAnimationsControls {
    animateTopBar: AnimationControls;
    animateBottomBar: AnimationControls;
}

interface UseNavAnimationsAnimate {
    animateOnLoad: (setLoading: React.Dispatch<React.SetStateAction<boolean>>) => Promise<void>;
    animateNav: (toggle: boolean) => Promise<void>;
}


export const useNavAnimations = (): [UseNavAnimationsControls, UseNavAnimationsAnimate] => {
    const animateTopBar = useAnimation();
    const animateBottomBar = useAnimation();

    const animateOnLoad = async (setLoading: any): Promise<void> => {
        try {
            animateTopBar.start({
                width: 66,
                transition: { delay: 3 }
            });
            await animateBottomBar.start({
                width: 38,
                transition: { delay: 3.1 }
            });
            setLoading(false);
        } catch (error) {
            log.info(error);
        }
    };
    
    const animateNav = async (toggle: boolean): Promise<void> => {
        // Forward Animation
        if (toggle) {
            animateTopBar.start({
                y: 4,
                marginBottom: '0px',
                transition: { delay: 0 }
            });
            await animateBottomBar.start({
                y: -4,
                width: 66,
                transition: { delay: 0 }
            });

            animateTopBar.start({
                rotate: 90 / 2,
                borderRadius: '10px'
            });
            await animateBottomBar.start({
                rotate: -90 / 2,
                borderRadius: '10px'
            });

            animateTopBar.start({
                width: 46,
                transition: { delay: 0 }
            });
            animateBottomBar.start({
                y: -4,
                width: 46,
                transition: { delay: 0 }
            });
            return;
        }

        // Reverse Animation
        animateTopBar.start({
            width: 66,
            transition: { delay: 0 }
        });
        await animateBottomBar.start({
            y: -4,
            width: 66,
            transition: { delay: 0 }
        });

        animateTopBar.start({
            rotate: 0,
            borderRadius: '0'
        });
        await animateBottomBar.start({
            rotate: 0,
            borderRadius: '0'
        });

        animateTopBar.start({
            y: 0,
            marginBottom: '10px',
            transition: { delay: 0 }
        });
        await animateBottomBar.start({
            y: 0,
            width: 38,
            transition: { delay: 0 }
        });
    };

    return [{ animateTopBar, animateBottomBar }, { animateOnLoad, animateNav }] ;
};