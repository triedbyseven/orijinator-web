import styled from 'styled-components';
import { motion } from 'framer-motion';

export const NavContainer = styled(motion.div)`
  /* position: absolute; */
  display: flex;
  top: 10px;
  right: 15px;
  width: 66px;
  justify-content: center;
  padding: 0;
  @media (min-width: 1024px) {
    top: 30px;
    right: 30px;
  }
`;

export const PointerContainer = styled(motion.button)`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 66px;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: 0 none;
  padding: 0;
`;

export const MarkerTop = styled(motion.div)`
  width: 0px;
  height: 8px;
  background-color: #000;
  margin-bottom: 10px;
  margin-left: auto;
  border-radius: 0px;
`;

export const MarkerBottom = styled(motion.div)`
  width: 0px;
  height: 8px;
  background-color: #000;
  margin-left: auto;
  border-radius: 0px;
`;

export const Svg = styled(motion.svg)`
  overflow: visible;
`;

export const Path = styled(motion.path)`
  /* stroke: blue;
  stroke-width: 4;
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000; */
`;