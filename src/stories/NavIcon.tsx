import React, { useEffect, useState } from 'react';
import { NavContainer, PointerContainer, Svg, Path } from '../components/nav/style';
import { motion, useAnimation } from 'framer-motion';
// import { useNavAnimations } from '../components/nav/animate';

export const NavIcon = (): React.ReactElement => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);
    // const [{ animateTopBar, animateBottomBar }, { animateOnLoad, animateNav }] = useNavAnimations();
    const controls = useAnimation();


    const navHandler = () => setIsOpen(prevState => !prevState);

    const runAnimations = async (): Promise<void> => {
        await controls.start({
            d: `M0 18H10V26H0z`,
            transition: {
                delay: 0,
                duration: 1,
                bounce: 0.4,
                type: 'spring'
            }
        });

        controls.start({
            d: "M130 18H140V26H130z",
            transition: {
                delay: 0,
                duration: 2.5,
                bounce: 0,
                type: 'spring'
            }
        });
    };


    useEffect(() => {
        runAnimations();
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

    return (
        <NavContainer>
            <PointerContainer disabled={loading} onClick={navHandler}>
                <Svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="66"
                    height="44"
                    viewBox="0 0 66 44"
                >
                    <Path
                        d="M0 18H00V26H0z"
                        animate={controls}
                    />
                </Svg>
            </PointerContainer>
        </NavContainer>
    );
};