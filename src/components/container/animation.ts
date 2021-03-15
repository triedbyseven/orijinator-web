import { animate, MotionValue, useMotionValue, useTransform } from "framer-motion";
import { PlaybackControls } from "../../types";

export const useBackgroundColorAnimation = () => {
    const rangeValue: MotionValue<number> = useMotionValue<number>(0);
    const range: number[] = [0, 1];
    const backgroundColorRange: string[] = ['#000000', '#FFFFFF'];
    const backgroundColor: MotionValue<string> = useTransform(rangeValue, range, backgroundColorRange);

    return { rangeValue: rangeValue, backgroundColor };
};


export const onLoadAnimate = (rangeValue: MotionValue<number>, animateOptions: any): PlaybackControls => animate(rangeValue, 1, animateOptions);